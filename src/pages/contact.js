import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../utilities/htmlSerializer";

function ContactPage({ data }) {
  const circleCss = `
    .cls-1{fill:#507453;}.cls-2{fill:#aacdec;}.cls-3{fill:#f6a0a7;}.cls-4{fill:#e88324;}.cls-5{fill:none;stroke:#b4b4b4;stroke-miterlimit:10;stroke-width:0.3px;}
    `;
  const leafCss = `
    .cls-1{fill:#aacdec;}.cls-2{fill:#507453;}.cls-3{fill:#f6a0a7;}.cls-4{fill:none;stroke:#b4b4b4;stroke-miterlimit:10;stroke-width:0.3px;}
    `;

  const { lets_connect, where_begin } = data.allPrismicContact.nodes[0].data;

  return (
    <Layout>
      <section className="mx-auto xl:flex max-w-screen-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 360 360"
          className="w-full xl:w-1/2 mb-1/24 lg:mb-8"
        >
          <defs>
            <style>{circleCss}</style>
          </defs>
          <g id="Layer_1" data-name="Layer 1">
            <path class="cls-1" d="M180,0h0A180,180,0,0,1,359.86,180H360V0Z" />
            <path
              class="cls-2"
              d="M360,180h0A180,180,0,0,1,180,359.86V360H360Z"
            />
            <path class="cls-2" d="M.14,180h0A180,180,0,0,1,180.14.14V0H.14Z" />
            <path
              class="cls-2"
              d="M180.14,360h0A180,180,0,0,1,.28,180H.14V360Z"
            />
            <path
              class="cls-3"
              d="M.14,180a180,180,0,0,0,180,180V0A180,180,0,0,0,.14,180Z"
            />
            <path class="cls-4" d="M180,180V360h0A180,180,0,0,0,360,180Z" />
          </g>
          <g id="Layer_2" data-name="Layer 2">
            <line class="cls-5" y1="0.15" x2="360" y2="0.15" />
            <line class="cls-5" y1="60.1" x2="360" y2="60.1" />
            <line class="cls-5" y1="120.05" x2="360" y2="120.05" />
            <line class="cls-5" y1="180" x2="360" y2="180" />
            <line class="cls-5" y1="239.95" x2="360" y2="239.95" />
            <line class="cls-5" y1="299.9" x2="360" y2="299.9" />
            <line class="cls-5" x1="0.15" y1="360" x2="0.15" />
            <line class="cls-5" x1="60.1" y1="360" x2="60.1" />
            <line class="cls-5" x1="120.05" y1="360" x2="120.05" />
            <line class="cls-5" x1="180" y1="360" x2="180" />
            <line class="cls-5" x1="239.95" y1="360" x2="239.95" />
            <line class="cls-5" x1="299.9" y1="360" x2="299.9" />
            <line class="cls-5" x1="359.85" x2="359.85" y2="360" />
          </g>
        </svg>

        <div className="w-11/12 mx-auto font-serif green-color xl:w-1/2 xl:px-1/24 text-nl-green">
          <RichText
            render={lets_connect.richText}
            htmlSerializer={htmlSerializer}
          />
        </div>
      </section>

      <section className="bg-nl-orange">
        <div className="mx-auto max-w-screen-2xl xl:flex">
          <div className="mx-1/24 pt-1/24 xl:w-1/2 xl:m-0 xl:p-1/24">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360">
              <defs>
                <style>{leafCss}</style>
              </defs>
              <g id="Layer_1" data-name="Layer 1">
                <path class="cls-1" d="M360,0H0V360C0,161.18,161.18,0,360,0Z" />
                <path
                  class="cls-2"
                  d="M0,360H0C198.83,360,360,198.82,360,0,161.18,0,0,161.18,0,360Z"
                />
                <path
                  class="cls-3"
                  d="M0,360H360V0C360,198.82,198.82,360,0,360Z"
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
              render={where_begin.richText}
              htmlSerializer={htmlSerializer}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;

export const query = graphql`
  query ContactQuery {
    allPrismicContact {
      nodes {
        data {
          lets_connect {
            richText
          }
          where_begin {
            richText
          }
        }
      }
    }
  }
`;
