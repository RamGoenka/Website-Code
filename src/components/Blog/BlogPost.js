import React, { useState } from 'react';

const BlogPost = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const paragraphs = post.content.split('\n\n');

  return (
    <div>
      <h2>{post.title}</h2>
      {isExpanded ? (
        paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
      ) : (
        <p>{`${paragraphs[0].substring(0, 75)}...`}</p>
      )}
      <button onClick={toggleExpanded}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}

export default BlogPost;
