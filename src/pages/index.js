import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import HeroImg from "../components/home/hero-img";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../utilities/htmlSerializer";

function IndexPage({ data }) {
  const {
    hero_content,
    hannah_photo,
    hannah_summary,
    practice_combines,
    virtual_clinic,
  } = data.allPrismicHomepage.nodes[0].data;

  return (
    <Layout>
      <section className="mx-auto xl:flex max-w-screen-2xl">
        <HeroImg />
        <div className="w-11/12 mx-auto green-color xl:w-1/2 xl:px-1/24">
          <RichText
            render={hero_content.richText}
            htmlSerializer={htmlSerializer}
          />
        </div>
      </section>

      <section className="bg-nl-green">
        <div className="mx-auto max-w-screen-2xl xl:flex">
          <div className="m-1/24 pt-1/24 xl:w-1/2 xl:m-0 xl:p-1/24">
            <GatsbyImage
              image={getImage(hannah_photo)}
              alt="Hannah Boyd smiling and looking into the camera"
            />
          </div>
          <div className="white-color xl:w-1/2 p-1/24">
            <RichText
              render={hannah_summary.richText}
              htmlSerializer={htmlSerializer}
            />
            <p className="text-nl-cream">
              <a href="about">Meet our Team</a>
            </p>
          </div>
        </div>
      </section>

      <div className="xl:flex">
        <section className="bg-nl-blue xl:w-1/2">
          <div className="xl:float-right xl:max-w-screen-md">
            <div className="p-1/24 xl:p-1/12">
              <RichText
                render={practice_combines.richText}
                htmlSerializer={htmlSerializer}
              />
              <p>
                <a href="naturopathy/">Discover more</a>
              </p>
            </div>
          </div>
        </section>
        <section className="bg-nl-orange xl:w-1/2">
          <div className="xl:max-w-screen-md">
            <div className="p-1/24 xl:p-1/12">
              <RichText
                render={virtual_clinic.richText}
                htmlSerializer={htmlSerializer}
              />
              <p>
                <a href="contact">Let's connect</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    allPrismicHomepage {
      nodes {
        data {
          hero_content {
            richText
          }
          hannah_photo {
            url
            gatsbyImageData
          }
          hannah_summary {
            richText
          }
          practice_combines {
            richText
          }
          virtual_clinic {
            richText
          }
        }
      }
    }
  }
`;
