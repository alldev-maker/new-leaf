import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../utilities/htmlSerializer";

function NaturopathyPage({ data }) {
  const bowlCss = `
        .cls-1{fill:#e88324;}.cls-2{fill:#aacdec;}.cls-3{fill:#507453;}.cls-4{fill:none;stroke:#b4b4b4;stroke-miterlimit:10;stroke-width:0.3px;}
    `;
  const targetCss = `
        .cls-1{fill:#aacdec;}.cls-2{fill:#507453;}.cls-3{fill:#e88324;}.cls-4{fill:none;stroke:#b4b4b4;stroke-miterlimit:10;stroke-width:0.3px;}
    `;

  const {
    area_image,
    area_of_focus,
    get_clinical,
    hero_content,
    new_leaf_image,
    practice_medicine,
    what_is_naturopathy,
    what_naturopath_do,
    why_new_leaf,
  } = data.allPrismicNaturopathy.nodes[0].data;

  return (
    <Layout>
      <section className="mx-auto xl:flex max-w-screen-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 360 360"
          className="w-full xl:w-1/2 mb-1/24 lg:mb-8"
        >
          <defs>
            <style>{bowlCss}</style>
          </defs>
          <g id="Layer_1" data-name="Layer 1">
            <polygon
              class="cls-1"
              points="360 360.15 0 360.15 360 0.15 360 360.15"
            />
            <path
              class="cls-2"
              d="M180.14,120.05a59.75,59.75,0,0,1,42.39,17.56L360.14,0H.14V360L137.75,222.39a59.95,59.95,0,0,1,42.39-102.34Z"
            />
            <path
              class="cls-3"
              d="M180.14,360a180,180,0,0,0,180-180H.14A180,180,0,0,0,180.14,360Z"
            />
          </g>
          <g id="Layer_2" data-name="Layer 2">
            <line class="cls-4" y1="359.85" x2="360" y2="359.85" />
            <line class="cls-4" y1="0.15" x2="360" y2="0.15" />
            <line class="cls-4" y1="60.1" x2="360" y2="60.1" />
            <line class="cls-4" y1="120.05" x2="360" y2="120.05" />
            <line class="cls-4" y1="180" x2="360" y2="180" />
            <line class="cls-4" y1="239.95" x2="360" y2="239.95" />
            <line class="cls-4" y1="299.9" x2="360" y2="299.9" />
            <line class="cls-4" x1="0.15" y1="360" x2="0.15" />
            <line class="cls-4" x1="60.1" y1="360" x2="60.1" />
            <line class="cls-4" x1="120.05" y1="360" x2="120.05" />
            <line class="cls-4" x1="180" y1="360" x2="180" />
            <line class="cls-4" x1="239.95" y1="360" x2="239.95" />
            <line class="cls-4" x1="299.9" y1="360" x2="299.9" />
            <line class="cls-4" x1="359.85" y1="360" x2="359.85" />
          </g>
        </svg>
        <div className="w-11/12 mx-auto green-color xl:w-1/2 xl:px-1/24">
          <RichText
            render={hero_content.richText}
            htmlSerializer={htmlSerializer}
          />
          <p className="text-nl-green">
            <a href="/clinic-bookings">Let's introduce to you</a>
          </p>
        </div>
      </section>

      <section className="bg-nl-blue">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className="mb-4 font-serif text-3xl lg:text-5xl lg:leading-snug px-1/24 pt-1/24">
            Our Practice
          </h2>
          <div className="flex flex-wrap justify-between px-1/24">
            <section className="w-full border-b border-black xl:w-11/24 py-1/24">
              <RichText
                render={what_is_naturopathy.richText}
                htmlSerializer={htmlSerializer}
              />
              <p>
                <a href="/naturopathy">Get the low-down</a>
              </p>
            </section>
            <section className="w-full border-b border-black xl:w-11/24 py-1/24">
              <RichText
                render={what_naturopath_do.richText}
                htmlSerializer={htmlSerializer}
              />
              <p>
                <a href="/clinic-bookings">Book now</a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl xl:flex">
        <div className="m-1/24 pt-1/24 xl:w-1/2 xl:m-0 xl:p-1/24">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360">
            <defs>
              <style>{targetCss}</style>
            </defs>
            <g id="Layer_1" data-name="Layer 1">
              <path
                class="cls-1"
                d="M180,120.05h.14V0A180,180,0,0,0,.14,180H120.05A60,60,0,0,1,180,120.05Z"
              />
              <path
                class="cls-2"
                d="M120.19,180.15c0-.05,0-.1,0-.15H.14a180,180,0,0,0,180,180V240.1A60,60,0,0,1,120.19,180.15Z"
              />
              <path
                class="cls-2"
                d="M240,179.86V180H360A180,180,0,0,0,180,0V119.91A60,60,0,0,1,240,179.86Z"
              />
              <path
                class="cls-3"
                d="M180,0h0A180,180,0,0,1,359.86,180H360V0Z"
              />
              <path
                class="cls-3"
                d="M.14,180h0A180,180,0,0,1,180.14.14V0H.14Z"
              />
              <path
                class="cls-3"
                d="M360,180h0A180,180,0,0,1,180,359.86V360H360Z"
              />
              <path
                class="cls-3"
                d="M180.14,360h0A180,180,0,0,1,.28,180H.14V360Z"
              />
              <path
                class="cls-1"
                d="M180.14,240H180V360A180,180,0,0,0,360,180H240.09A60,60,0,0,1,180.14,240Z"
              />
            </g>
            <g id="Layer_2" data-name="Layer 2">
              <line class="cls-4" y1="0.15" x2="360" y2="0.15" />
              <line class="cls-4" y1="60.1" x2="360" y2="60.1" />
              <line class="cls-4" y1="120.05" x2="360" y2="120.05" />
              <line class="cls-4" y1="180" x2="360" y2="180" />
              <line class="cls-4" y1="239.95" x2="360" y2="239.95" />
              <line class="cls-4" y1="299.9" x2="360" y2="299.9" />
              <line class="cls-4" y1="359.85" x2="360" y2="359.85" />
              <line class="cls-4" x1="0.15" y1="360" x2="0.15" />
              <line class="cls-4" x1="60.1" y1="360" x2="60.1" />
              <line class="cls-4" x1="120.05" y1="360" x2="120.05" />
              <line class="cls-4" x1="180" y1="360" x2="180" />
              <line class="cls-4" x1="239.95" y1="360" x2="239.95" />
              <line class="cls-4" x1="299.9" y1="360" x2="299.9" />
              <line class="cls-4" x1="359.85" y1="360" x2="359.85" />
            </g>
          </svg>
        </div>
        <div className="xl:w-1/2 p-1/24">
          <RichText
            render={get_clinical.richText}
            htmlSerializer={htmlSerializer}
          />
          <p>
            <a href="/clinic-bookings">Book now</a>
          </p>
        </div>
      </section>

      <div className="xl:flex">
        {practice_medicine.map((item, idx) => (
          <section
            className={`${idx === 0 ? "bg-nl-blue" : "bg-nl-pink"} xl:w-1/2`}
            key={idx}
          >
            <div className={`${idx === 0 ? "xl:float-right" : "xl:float-left"} xl:max-w-screen-md`}>
              <div className="p-1/24 xl:p-1/12">
                <h2 className="mb-4 font-serif text-3xl lg:text-5xl">
                  {item.title}
                </h2>
                <p className="whitespace-pre-wrap">{item.content}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="bg-nl-green">
        <section className="mx-auto max-w-screen-2xl xl:flex">
          <div className="m-1/24 pt-1/24 xl:w-1/2 xl:m-0 xl:p-1/24">
            <GatsbyImage
              image={getImage(area_image)}
              alt="Hannah talking to a client"
              layout="fullWidth"
            />
          </div>
          <div className="white-color xl:w-1/2 p-1/24">
            <RichText
              render={area_of_focus.richText}
              htmlSerializer={htmlSerializer}
            />
          </div>
        </section>
      </div>

      <div className="bg-nl-orange">
        <section className="mx-auto max-w-screen-2xl xl:flex">
          <div className="m-1/24 pt-1/24 xl:w-1/2 xl:m-0 xl:p-1/24">
            <GatsbyImage
              image={getImage(new_leaf_image)}
              alt="Hannah talking to a client"
              layout="fullWidth"
            />
          </div>
          <div className="xl:w-1/2 p-1/24">
            <RichText
              render={why_new_leaf.richText}
              htmlSerializer={htmlSerializer}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default NaturopathyPage;

export const query = graphql`
  query NaturopathyQuery {
    allPrismicNaturopathy {
      nodes {
        data {
          area_image {
            gatsbyImageData
          }
          area_of_focus {
            richText
          }
          get_clinical {
            richText
          }
          hero_content {
            richText
          }
          new_leaf_image {
            gatsbyImageData
          }
          practice_medicine {
            title
            content
          }
          what_is_naturopathy {
            richText
          }
          what_naturopath_do {
            richText
          }
          why_new_leaf {
            richText
          }
        }
      }
    }
  }
`;
