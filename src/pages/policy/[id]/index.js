// pages/policy/[slug].js

import Banner from "@/components/Banner";
import Clamp from "@/components/Clamp";
import { PolicyData } from "@/static/PolicyData";
import Head from "next/head";

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
  const showImages = ["clinic-policies", "health-card-policy"].includes(
    policyTopic.slug
  );

  return (
    <>
      <Head>
        <title>{policyTopic.topic} | Valleyview Medical Centre</title>
      </Head>
      <div className="policy-page">
        <Banner subtitle={policyTopic.topic} buttonText="Have a question?" />
        <div className="padding-x flex flex-col items-center py-[100px]">
          {policyTopic.item.map((policy, index) => {
            if (!showImages) {
              return (
                <div className="policy-item mb-8 w-full flex flex-col items-start">
                  <h2
                    className="font-semibold text-blue-600 pb-3"
                    style={{ fontSize: Clamp(1.25, 1.75) }}
                  >
                    {policy.title}
                  </h2>
                  <p
                    key={index}
                    style={{
                      whiteSpace: "pre-line",
                      fontSize: Clamp(0.8, 1.1),
                    }}
                  >
                    {policy.description}
                  </p>
                </div>
              );
            }

            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`policy-item mb-8 w-full flex items-center ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {policy.image && (
                  <div className="w-[40%]">
                    <img
                      src={policy.image}
                      alt="Policy Image"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                )}
                <div className="w-[60%] pl-6">
                  {policy.title && (
                    <h2
                      className="font-semibold text-blue-600 pb-3"
                      style={{ fontSize: Clamp(1.25, 1.75) }}
                    >
                      {policy.title}
                    </h2>
                  )}
                  <p
                    style={{
                      whiteSpace: "pre-line",
                      fontSize: Clamp(0.8, 1.1),
                    }}
                  >
                    {policy.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PolicySlugPage;
