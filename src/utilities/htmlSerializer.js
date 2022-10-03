import * as React from 'react';
import { Elements } from 'prismic-reactjs';

// -- Function to add unique key to props
function htmlSerializer(type, element, content, children, key) {
  switch (type) {
    case Elements.heading1: // Heading 1
      return (
        <h1
          key={key}
          className='font-serif text-3xl lg:text-5xl lg:leading-snug'
        >
          {children}
        </h1>
      );
    case Elements.heading2: // Heading 2
      return (
        <h2 key={key} className='mb-4 font-serif text-3xl lg:text-5xl'>
          {children}
        </h2>
      );
    case Elements.heading3: // Heading 3
      return (
        <h3 key={key} className='mb-4 font-serif text-xl lg:text-4xl'>
          {children}
        </h3>
      );
    case Elements.heading4: // Heading 4
      return (
        <h4 key={key} className='font-serif'>
          {children}
        </h4>
      );
    case Elements.list: // Unordered List Item
      return (
        <ul key={key} className='mb-4 list-disc list-inside lg:mb-8'>
          {children}
        </ul>
      );
    case Elements.paragraph: // Paragraph
      return <p key={key}>{children}</p>;
    case Elements.preformatted:
      return (
        <pre key={key} className='quote'>
          {children}
        </pre>
      );
    case Elements.hyperlink:
      return (
        <a href={element.data.url} target='_blank' rel="noreferrer" key={key}>
          {children}
        </a>
      );
    default:
      // Always include a default that returns null
      return null;
  }
}

export default htmlSerializer;
