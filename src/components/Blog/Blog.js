import React from 'react';
import BlogPost from './BlogPost';
import { DiCss3, DiCode, DiPython, DiJavascript, DiJava, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Blog = () => {
  const posts = [
    {
      title: 'My First Post - Coming soon!',
      content: 'Coming soon!',
    },
  ];

  return (
    <Section id="blog">
      <SectionTitle main> <DiCode size="4rem" /> Blog</SectionTitle>
      <SectionText>
        Welcome to my blog! This just a space for me to write about thoughts, ideas, things on my mind, or just some random topic.
      </SectionText>
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </Section>

  );
}

export default Blog;
