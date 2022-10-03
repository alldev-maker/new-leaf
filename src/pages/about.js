import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../utilities/htmlSerializer";

function AboutPage({ data }) {
  const {
    about_bronwyn,
    about_hannah,
    about_kyoko,
    about_sophia,
    connect_content,
    connect_image,
    bronwyn_photo,
    hannah_photo,
    kyoko_photo,
    sophia_photo,
    meet_people,
    our_philosophy,
    people_image,
  } = data.allPrismicAbout.nodes[0].data;

  return (
    <Layout>
      <section className="mx-auto xl:flex max-w-screen-2xl">
        <GatsbyImage
          image={getImage(people_image)}
          alt="Hannah Boyd and Kyoko Kawamoto looking at the camera"
          className="w-full xl:w-1/2 mb-1/24 lg:mb-8"
          placeholder="blurred"
          layout="fullWidth"
        />
        <div className="w-11/12 mx-auto green-color xl:w-1/2 xl:px-1/24">
          <RichText
            render={meet_people.richText}
            htmlSerializer={htmlSerializer}
          />
        </div>
      </section>

      <section className="bg-nl-blue">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className="mb-4 font-serif text-3xl lg:text-5xl lg:leading-snug px-1/24 pt-1/24">
            Our Philosophy
          </h2>
          <div className="flex flex-wrap justify-between px-1/24">
            {our_philosophy.map((item) => (
              <section
                className="w-full border-b border-black xl:w-11/24 py-1/24"
                key={item.title}
              >
                <h3 className="mb-4 font-serif text-xl lg:text-4xl">
                  {item.title}
                </h3>
                <p>{item.content}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nl-green">
        <div className="mx-auto max-w-screen-2xl xl:flex">
          <div className="mx-1/24 pt-1/24 xl:w-1/2 xl:m-0 xl:p-1/24">
            <GatsbyImage
              image={getImage(hannah_photo)}
              alt="Hannah looking at a bottle of herbs"
            />
          </div>
          <div className="white-color xl:w-1/2 p-1/24 text-nl-cream">
            <RichText
              render={about_hannah.richText}
              htmlSerializer={htmlSerializer}
            />
          </div>
        </div>
      </section>

      <section className="bg-nl-pink">
        <div className="mx-auto max-w-screen-2xl xl:flex">
          <div className="mx-1/24 pt-1/24 xl:w-1/2 xl:m-0 xl:p-1/24">
            <GatsbyImage image={getImage(bronwyn_photo)} alt="Bronwyn" />
          </div>
          <div className="xl:w-1/2 p-1/24">
            <RichText
              render={about_bronwyn.richText}
              htmlSerializer={htmlSerializer}
            />
          </div>
        </div>
      </section>

      <section className="bg-nl-blue">
        <div className="mx-auto max-w-screen-2xl xl:flex">
          <div className="mx-1/24 pt-1/24 xl:w-1/2 xl:m-0 xl:p-1/24">
            <GatsbyImage image={getImage(sophia_photo)} alt="Sophia" />
          </div>
          <div className="xl:w-1/2 p-1/24">
            <RichText
              render={about_sophia.richText}
              htmlSerializer={htmlSerializer}
            />
          </div>
        </div>
      </section>

      <section className="bg-nl-orange">
        <div className="mx-auto max-w-screen-2xl xl:flex">
          <div className="mx-1/24 pt-1/24 xl:w-1/2 xl:m-0 xl:p-1/24">
            <GatsbyImage image={getImage(kyoko_photo)} alt="Kyoko Kawamoto" />
          </div>
          <div className="xl:w-1/2 p-1/24">
            <RichText
              render={about_kyoko.richText}
              htmlSerializer={htmlSerializer}
            />
          </div>
        </div>
      </section>

      <section className="bg-nl-green">
        <div className="mx-auto max-w-screen-2xl xl:flex">
          <div className="mx-1/24 pt-1/24 xl:w-1/2 xl:m-0 xl:p-1/24">
            <GatsbyImage image={getImage(connect_image)} alt="Herbs" />
          </div>
          <div className="xl:w-1/2 p-1/24">
            <RichText
              render={connect_content.richText}
              htmlSerializer={htmlSerializer}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    allPrismicAbout {
      nodes {
        data {
          about_bronwyn {
            richText
          }
          about_hannah {
            richText
          }
          about_kyoko {
            richText
          }
          about_sophia {
            richText
          }
          connect_content {
            richText
          }
          connect_image {
            gatsbyImageData
            url
          }
          bronwyn_photo {
            gatsbyImageData
            url
          }
          hannah_photo {
            gatsbyImageData
            url
          }
          kyoko_photo {
            gatsbyImageData
            url
          }
          sophia_photo {
            gatsbyImageData
            url
          }
          meet_people {
            richText
          }
          our_philosophy {
            title
            content
          }
          people_image {
            gatsbyImageData
            url
          }
        }
      }
    }
  }
`;
