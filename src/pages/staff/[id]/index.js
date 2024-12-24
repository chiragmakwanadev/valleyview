import Banner from "@/components/Banner";
import Clamp from "@/components/Clamp";
import Head from "next/head";
import { createClient } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

// Initialize the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-12-23", // Ensure you're using the latest version of the Sanity API
});

const StaffDetail = ({ staffMember }) => {
  if (!staffMember) return <p>Staff member not found</p>;

  return (
    <>
      <Head>
        <title>{staffMember.name} | Valleyview Medical Centre</title>
      </Head>
      <div className="flex flex-col w-full items-center">
        <Banner subtitle={staffMember.name} buttonText="Email Us" />
        <div className="padding-x py-[50px] flex flex-col gap-0 md:gap-5 w-full xl:w-[80%]">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-[30%] flex flex-col gap-3">
              <img
                src={urlFor(staffMember.image.asset).url()}
                alt={staffMember.name}
                className="object-cover h-auto md:h-[50vh] w-full rounded-xl"
              />
            </div>

            <div className="text-[18px] w-full md:w-[70%] flex flex-col gap-3">
              <h1
                className="font-bold text-blue-600"
                style={{ fontSize: Clamp(1, 1.5) }}
              >
                {staffMember.name}
              </h1>
              <p className="text-[18px] text-blue-600 bg-blue-200 w-[250px] p-[5px] text-center rounded-3xl">
                {staffMember.categories.join(", ")}
              </p>
              <div style={{ whiteSpace: "pre-line", fontSize: Clamp(1, 1.25) }}>
                {staffMember.body.slice(0, 4).map((paragraph, index) => (
                  <p key={index} className="mb-3">
                    {paragraph.children.map((child, i) => (
                      <span key={i}>{child.text}</span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div
            className="text-[18px] w-full"
            style={{ whiteSpace: "pre-line", fontSize: Clamp(1, 1.25) }}
          >
            {staffMember.body.slice(4).map((paragraph, index) => (
              <p key={index} className="mb-3">
                {paragraph.children.map((child, i) => (
                  <span key={i}>{child.text}</span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Fetch all available slugs from Sanity
export async function getStaticPaths() {
  const data = await client.fetch(`
    *[_type == "author"]{
      slug
    }
  `);

  const paths = data.map((item) => ({
    params: { id: item.slug.current },
  }));

  return { paths, fallback: false };
}

// Fetch specific staff member by slug
export async function getStaticProps({ params }) {
  const { id } = params;

  const staffMember = await client.fetch(
    `
    *[_type == "author" && slug.current == $id]{
      name,
      slug,
      image,
      "categories": categories[]->title,
      body
    }[0]
  `,
    { id }
  );

  return { props: { staffMember: staffMember || null } };
}

export default StaffDetail;
