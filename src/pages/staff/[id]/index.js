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
      <div
        className="flex flex-col w-full items-center"
        style={{ paddingTop: Clamp(3.7, 7.5) }}
      >
        <Banner subtitle={staffMember.name} buttonText="Email Us" />
        <div className="padding-x py-[50px] flex flex-col xl:flex-row gap-5 w-full xl:w-[80%]">
          <div className="w-full md:w-[40%] flex flex-col gap-3">
            <img
              src={staffMember.image || "/default-image.jpg"}
              alt={staffMember.name}
              className=" object-cover h-auto md:h-[50vh] w-full"
            />
            <h1
              className="font-bold text-blue-600"
              style={{ fontSize: Clamp(1, 1.5) }}
            >
              {staffMember.name}
            </h1>
            <p className="font-light" style={{ fontSize: Clamp(1, 1.25) }}>
              {staffMember.title}
            </p>
          </div>
          <div className="flex flex-col w-full xl:w-[60%]">
            <p
              className="text-[18px]"
              style={{ whiteSpace: "pre-line", fontSize: Clamp(1, 1.25) }}
            >
              {staffMember.description}
            </p>
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
