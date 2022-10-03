import React, { useEffect, useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import ReactPaginate from 'react-paginate';
import Layout from '../components/Layout';

function JournalPage({ data }) {
  const blogPosts = data.allPrismicBlogPost.nodes;
  // const blogTags = data.allPrismicBlogPost.distinct

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(blogPosts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogPosts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, blogPosts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogPosts.length;
    setItemOffset(newOffset);
  };

  return (
    <Layout>
      <div className='max-w-screen-2xl mx-auto flex justify-between px-1/24 text-nl-green border-b '>
        <section>
          <ul className='flex justify-between flex-wrap'>
            {currentItems?.map((e, i) => {
              return (
                <li className='my-2 lg:w-1/3 px-4' key={i}>
                  <a href={'/blog/' + e.uid}>
                    <GatsbyImage
                      image={e.data.headline_image.gatsbyImageData}
                      alt={e.data.headline_image.alt}
                      className='w-full h-56 mb-2 xl:mb-4'
                    />
                    <h2 className='font-serif text-xl lg:text-4xl mb-2'>
                      {e.data.blog_title}
                    </h2>
                  </a>
                  <p>{e.data.body.text.substring(0, 90) + '...'}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <ReactPaginate
        breakLabel='. . .'
        nextLabel='>'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='<'
        renderOnZeroPageCount={null}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination-link'}
        nextLinkClassName={'pagination-link'}
        disabledClassName={'pagination-link__disabled'}
        activeClassName={'pagination-link__active'}
      />
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allPrismicBlogPost(sort: { order: DESC, fields: last_publication_date }) {
      nodes {
        data {
          blog_title
          body {
            text
          }
          headline_image {
            gatsbyImageData
            alt
          }
        }
        uid
      }
    }
  }
`;

export default JournalPage;
