import { Data } from "@/static/StaffData";
import Banner from "@/components/Banner";

const StaffDetail = ({ staffMember }) => {
  if (!staffMember) return <p>Staff member not found</p>;

  return (
    <>
      <Banner subtitle={staffMember.name} buttonText="Email Us" />
      <div className="px-[250px] py-[50px] flex w-full gap-5">
        <div className="w-[40%]">
          <img
            src={staffMember.image || "/default-image.jpg"}
            alt={staffMember.name}
            className=" object-cover h-[50vh] w-full"
          />
          <h1 className="text-[24px] font-bold text-blue-600">
            {staffMember.name}
          </h1>
          <p className="text-[16px] font-light">{staffMember.title}</p>
        </div>
        <div className="flex flex-col w-[60%]">
          <p className="text-[18px]" style={{ whiteSpace: "pre-line" }}>
            {staffMember.description}
          </p>
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
