import * as React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import Layout from "../components/Layout";
import htmlSerializer from "../utilities/htmlSerializer";

function BookingsPage({ data }) {
  const bowlCss = `
        .cls-1{fill:#e88324;}.cls-2{fill:#aacdec;}.cls-3{fill:#507453;}.cls-4{fill:none;stroke:#b4b4b4;stroke-miterlimit:10;stroke-width:0.3px;}
    `;

  const { hero_content, appointment_types } =
    data.allPrismicBooking.nodes[0].data;

  console.log(appointment_types[0].content, appointment_types[0].title);

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
        </div>
      </section>
      <section>
        <iframe
          title='Clinic Booking'
          id="cliniko-75844257"
          src="https://newleafnaturopathic.au1.cliniko.com/bookings?embedded=true"
          frameborder="0"
          scrolling="auto"
          width="100%"
          height="1000"
        ></iframe>
      </section>
      <section className="bg-nl-blue">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className="mb-4 font-serif text-3xl lg:text-5xl lg:leading-snug px-1/24 pt-1/24">
            We offer four appointment types
          </h2>
          <div className="flex flex-wrap justify-between px-1/24">
            {appointment_types.map((item, idx) => (
              <div
                className="w-full border-b border-black xl:w-11/24 py-1/24"
                key={item.title}
              >
                <h3 className="mb-4 font-serif text-xl lg:text-4xl">
                  {idx + 1}. {item.title}
                </h3>
                <p className="whitespace-pre-wrap">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default BookingsPage;

export const query = graphql`
  query BookingQuery {
    allPrismicBooking {
      nodes {
        data {
          hero_content {
            richText
          }
          appointment_types {
            title
            content
          }
        }
      }
    }
  }
`;
