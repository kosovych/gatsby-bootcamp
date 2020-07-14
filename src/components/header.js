import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header>
      <kbd>{data.site.siteMetadata.title}</kbd>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
