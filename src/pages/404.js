import React from "react";
import Layout from "../components/Layout";

function PageNotFoundPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-screen-2xl p-1/24">
          <h1 className="mb-4 font-serif text-3xl lg:text-5xl lg:leading-snug px-1/24 pt-1/24">It's a 404:</h1>
          <p>you can’t go over it,<br />
            you can’t go under it...<br />
            Sometimes (like right now), moving forward means taking a <a href="/">step back</a>.
          </p>
      </section>
    </Layout>
  );
}

export default PageNotFoundPage;
