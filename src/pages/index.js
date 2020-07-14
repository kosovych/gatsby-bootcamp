import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      Hello world!
      <p>
        <Link to="/blog">Blog</Link>
      </p>
    </Layout>
  )
};
