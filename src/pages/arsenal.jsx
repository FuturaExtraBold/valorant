import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Gun from 'components/arsenal/Gun';

const ArsenalPage = () => {
  const data = useStaticQuery(graphql`
    {
      allArsenalJson {
        nodes {
          name
          image {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
          description
        }
      }
    }
  `);

  console.log('data.allArsenalJson.nodes:', data.allArsenalJson.nodes);

  return (
    <div className="container">
      {data.allArsenalJson.nodes.map((gunData, index) => (
        <Gun data={gunData} key={index} />
      ))}
    </div>
  );
};

export default ArsenalPage;
