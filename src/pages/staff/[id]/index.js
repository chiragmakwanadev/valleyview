import { Data } from "@/static/StaffData";
import Banner from "@/components/Banner";
import Clamp from "@/components/Clamp";
import Head from "next/head";

const StaffDetail = ({ staffMember }) => {
  if (!staffMember) return <p>Staff member not found</p>;

  return (
    <>
      <Head>
        <title>{staffMember.name} | Vallewview Medical Centre</title>
      </Head>
      <div className="flex flex-col w-full items-center">
        <Banner subtitle={staffMember.name} buttonText="Email Us" />
        <div className="padding-x py-[50px] flex flex-col gap-0 md:gap-5 w-full xl:w-[80%]">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-[30%] flex flex-col gap-3">
              <img
                src={staffMember.image || "/default-image.jpg"}
                alt={staffMember.name}
                className=" object-cover h-auto md:h-[50vh] w-full rounded-xl"
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
                {staffMember.title}
              </p>
              <div style={{ whiteSpace: "pre-line", fontSize: Clamp(1, 1.25) }}>
                {staffMember.description
                  .split(/\n\s*\n/) // Splits paragraphs by double line breaks with optional spaces/tabs
                  .slice(0, 4) // First two paragraphs
                  .map((paragraph, index) => (
                    <p key={index} className="mb-3">
                      {paragraph.trim()} {/* Removes extra spaces */}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <div
            className="text-[18px] w-full"
            style={{ whiteSpace: "pre-line", fontSize: Clamp(1, 1.25) }}
          >
            {staffMember.description
              .split(/\n\s*\n/) // Same split logic
              .slice(4) // Remaining paragraphs
              .map((paragraph, index) => (
                <p key={index} className="mb-3">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = Data[0].doctors.concat(Data[0].pharmacists).map((member) => ({
    params: { id: member.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const allStaff = Data[0].doctors.concat(Data[0].pharmacists);

  const staffMember = allStaff.find((member) => member.slug === id);

  return { props: { staffMember: staffMember || null } };
}

export default StaffDetail;
