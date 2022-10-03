import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import htmlSerializer from '../../utilities/htmlSerializer';

function BlogPost({ data }) {
  const blogPostData = data.allPrismicBlogPost.nodes[0].data;

  return (
    <Layout>
      <div className='max-w-screen-2xl mx-auto px-1/24 pb-5 text-nl-green border-b border-black'>
        <GatsbyImage
          image={blogPostData.headline_image.gatsbyImageData}
          alt={blogPostData.headline_image.alt}
          className='mb-6'
        />
        <div className='w-10/12 xl:w-9/12 mx-auto'>
          <h1 className='font-serif text-3xl lg:text-5xl mb-4'>
            {blogPostData.blog_title}
          </h1>
          <RichText
            render={blogPostData.body.richText}
            htmlSerializer={htmlSerializer}
          />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($uid: String) {
    allPrismicBlogPost(filter: { uid: { eq: $uid } }) {
      nodes {
        data {
          blog_title
          body {
            richText
          }
          headline_image {
            gatsbyImageData(layout: FULL_WIDTH)
            alt
          }
        }
      }
    }
  }
`;
export default BlogPost;
