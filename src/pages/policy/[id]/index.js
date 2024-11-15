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
  return (
    <>
      <Head>
        <title>{policyTopic.topic} | Vallewview Medical Centre</title>
      </Head>
      <div className="policy-page" style={{ paddingTop: Clamp(3.7, 7.5) }}>
        <Banner subtitle={policyTopic.topic} buttonText="Have a question?" />
        <div className="policy-content padding-x flex flex-col items-center py-[100px]">
          {policyTopic.item.map((policy, index) => (
            <div key={index} className="policy-item mb-8 w-full xl:w-[50%]">
              {policy.title && (
                <h2
                  className="font-semibold text-blue-600 pb-3"
                  style={{ fontSize: Clamp(1, 1.5) }}
                >
                  {policy.title}
                </h2>
              )}
              <p
                className="text-[18px]"
                style={{ whiteSpace: "pre-line", fontSize: Clamp(0.75, 1) }}
              >
                {policy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PolicySlugPage;
