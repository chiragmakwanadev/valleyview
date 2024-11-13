// pages/policy/[slug].js

import Banner from "@/components/Banner";
import { PolicyData } from "@/static/PolicyData";

export async function getStaticPaths() {
  const paths = Object.values(PolicyData).flatMap((data) =>
    data.map((item) => ({
      params: { id: item.slug },
    }))
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const policyTopic = Object.values(PolicyData).flatMap((data) =>
    data.filter((item) => item.slug === id)
  )[0];

  if (!policyTopic) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      policyTopic,
    },
  };
}

const PolicySlugPage = ({ policyTopic }) => {
  return (
    <div className="policy-page pt-[120px]">
      <Banner subtitle={policyTopic.topic} buttonText="Have a question?" />
      <div className="policy-content flex flex-col items-center py-[100px]">
        {policyTopic.item.map((policy, index) => (
          <div key={index} className="policy-item mb-8 w-[50%]">
            {policy.title && (
              <h2 className="text-[36px] font-semibold text-blue-600 pb-3">
                {policy.title}
              </h2>
            )}
            <p className="text-[18px]" style={{ whiteSpace: "pre-line" }}>
              {policy.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicySlugPage;
