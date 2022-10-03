import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "./Navigation";
import { Helmet } from "react-helmet";
import Favicon from "/src/images/favicon.png";

function Layout({ children }) {
  const { allPrismicTermsAndPrivcay } = useStaticQuery(
    graphql`
      query TermsAndPrivacy {
        allPrismicTermsAndPrivcay {
          nodes {
            data {
              heading
            }
            uid
          }
        }
      }
    `
  )
  const termsData = allPrismicTermsAndPrivcay.nodes

  return (
    <>
      <Helmet>
        <title>New Leaf Naturopathic Health</title>
        <link rel="icon" type="image/x-icon" href={Favicon} />
        <meta name="description" content="Start your journey to health with naturopath, nutritionist & herbalist Hannah Boyd at New Leaf Naturopathic Health" />
      </Helmet>
      <header className="max-w-screen-2xl mx-auto">
        <Navigation />
      </header>
      {children}
      <footer className="max-w-screen-2xl mx-auto text-sm lg:text-base mb-20">
        <div className="flex justify-between p-1/24">
          <section className="w-17/24">
            <p>
              New Leaf Naturopathic Health
              <br />
              PO Box 161
              <br />
              Alexandria NSW 1435
            </p>
          </section>
          <section className="w-3/12 flex">
            <a href="https://www.facebook.com/NewLeafNaturopathicHealth">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-1/2"
              >
                <path
                  d="M51.9129 0H8.08708C3.62524 0 0 3.62524 0 8.08708V51.9129C0 56.3748 3.62524 60 8.08708 60H29.7065L29.7505 38.5568H24.1732C23.454 38.5568 22.8669 37.9697 22.8523 37.2505L22.8229 30.3376C22.8229 29.6037 23.41 29.0166 24.1438 29.0166H29.7065V22.3386C29.7065 14.589 34.4325 10.362 41.3454 10.362H47.0108C47.7299 10.362 48.3317 10.9491 48.3317 11.683V17.5098C48.3317 18.229 47.7446 18.8307 47.0108 18.8307H43.5323C39.775 18.8307 39.0411 20.6213 39.0411 23.2339V29.0166H47.3043C48.0969 29.0166 48.6986 29.7065 48.6106 30.4843L47.7887 37.3973C47.7153 38.0577 47.1429 38.5568 46.4824 38.5568H39.0705L39.0264 60H51.8836C56.3454 60 59.9706 56.3748 59.9706 51.9129V8.08708C60 3.62524 56.3748 0 51.9129 0Z"
                  fill="black"
                ></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/newleaf_naturopathy/">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-1/2"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M42.1307 0H17.8802C8.01452 0 0 8.01452 0 17.8802V42.1307C0 51.9855 8.01452 60 17.8802 60H42.1307C51.9855 60 60.0109 51.9855 60.0109 42.1198V17.8802C60 8.01452 51.9855 0 42.1307 0ZM53.9673 42.1307C53.9673 48.6642 48.6642 53.9673 42.1307 53.9673H17.8802C11.3466 53.9673 6.04356 48.6642 6.04356 42.1307V17.8802C6.04356 11.3466 11.3466 6.04356 17.8802 6.04356H42.1307C48.6642 6.04356 53.9673 11.3466 53.9673 17.8802V42.1307Z"
                    fill="black"
                  ></path>
                  <path
                    d="M30 14.4827C21.441 14.4827 14.4828 21.4409 14.4828 29.9999C14.4828 38.5589 21.441 45.5172 30 45.5172C38.559 45.5172 45.5173 38.5589 45.5173 29.9999C45.5173 21.4409 38.559 14.4827 30 14.4827ZM30 39.4845C24.7623 39.4845 20.5155 35.2377 20.5155 29.9999C20.5155 24.7622 24.7623 20.5153 30 20.5153C35.2378 20.5153 39.4846 24.7622 39.4846 29.9999C39.4846 35.2377 35.2378 39.4845 30 39.4845Z"
                    fill="black"
                  ></path>
                  <path
                    d="M45.5499 18.3159C47.6007 18.3159 49.2632 16.6534 49.2632 14.6027C49.2632 12.5519 47.6007 10.8894 45.5499 10.8894C43.4991 10.8894 41.8367 12.5519 41.8367 14.6027C41.8367 16.6534 43.4991 18.3159 45.5499 18.3159Z"
                    fill="black"
                  ></path>
                </g>
                <defs>
                  {" "}
                  <clipPath id="clip0">
                    {" "}
                    <rect width="60" height="60" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>
              </svg>
            </a>
          </section>
        </div>
        <section className="mx-1/24">
          <p>
            New Leaf acknowledges the Wandi Wandian of the Yuin and the Gadigal
            people of the Eora nation as the Traditional Owners of the lands on
            which we live and work. We offer our greatest respect all Elders,
            past, present and emerging for their continuing and shared
            connection to land, water, culture and plants. Sovereignty has never
            been ceded. It always was and always will be, Aboriginal land.
          </p>
        </section>
        <section className="mx-1/24">
          <p>
            View our{' '}
            {
              termsData.length === 1 ?
                <a className="capitalize" href={`/${termsData[0].uid}`}>{termsData[0].data.heading}</a>
                :
                <>
                  <a className="capitalize" href={`/${termsData[0].uid}`}>{termsData[0].data.heading}</a>
                  {' '}and{' '}
                  <a className="capitalize" href={`/${termsData[1].uid}`}>{termsData[1].data.heading}</a>
                </>
            }
          </p>
        </section>
      </footer>
    </>
  );
}

export default Layout;
