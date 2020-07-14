import React from 'react';
import Layout from '../components/layout';
import { Link, useStaticQuery, graphql } from 'gatsby';

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `);
  console.log(posts);
  
  const postsElemets = posts.allMarkdownRemark.edges.map( post => {
    return (
    <li key={post.node.id}>
      <h3>
        <Link to={`/blog/${post.node.fields.slug}`}>
          {post.node.frontmatter.title}
        </Link>
      </h3>
      <p>{post.node.frontmatter.date}</p>
    </li>
  )
  })
  return (
    <Layout>
      <h1>Blog</h1>
      <h2>Blog posts:</h2>
      <ol>
        {postsElemets}
      </ol>
    </Layout>
  );
}

export default BlogPage;
