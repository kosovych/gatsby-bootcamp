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
      allContentfulBlogPost (
        sort: {
          fields: publisedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            id
            title
            slug
            publisedDate(formatString: "Do MMMM, YYYY")
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
  });

  const contentfulBlogPosts = posts.allContentfulBlogPost.edges.map(post => {
    return (
      <li key={post.node.id}>
        <h3>
          <Link to={`/blog/${post.node.slug}`}>
            {post.node.title}
          </Link>
        </h3>
        <p>{post.node.date}</p>
        <kbd>{post.node.publisedDate}</kbd>
      </li>
    )
  });

  return (
    <Layout>
      <h1>Blog</h1>
      <h2>Blog posts:</h2>
      <ol>
        {postsElemets.concat(contentfulBlogPosts)}
      </ol>
    </Layout>
  );
}

export default BlogPage;
