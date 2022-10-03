import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/Layout";

function TermsAndConditionsPage({ data }) {
  const {
    heading,
    content
  } = data.prismicTermsAndPrivcay.data

  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl w-11/12">
        <h1 className="font-serif text-xl lg:text-4xl capitalize mb-5">
          {heading}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </div>
    </Layout>
  );
}

export default TermsAndConditionsPage;


export const query = graphql`
  query TermsAndConditionsQuery($id: String) {
    prismicTermsAndPrivcay(id: { eq: $id }) {
      data {
        heading
        content {
          html
        }
      }
    }
  }
`