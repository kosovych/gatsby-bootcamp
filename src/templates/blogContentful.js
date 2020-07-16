import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost (
      slug: {
        eq: $slug
      }
    ) {
      title
      publisedDate(formatString: "MMMM Do, YYYY")
      postBody {
        json
      }
    }
  }
`;

const BlogPost = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = '';
        const url = node.data.target.fields.file["en-US"].url;
        console.log(node);
        return <img alt={alt} src={url} />
      }
    }
  }
  return (
    <Layout>
      <Helmet title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publisedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.postBody.json, options)}
    </Layout>
  )
};

export default BlogPost;
