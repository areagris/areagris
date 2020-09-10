import React, { useState } from "react"
import useHorizontal from '@oberon-amsterdam/horizontal/hook';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from '../components/intro';
import Gallery from '../components/gallery';

const IndexPage = () => {
  const [container, setContainer] = useState();

  useHorizontal({ container: container });

  return (
    <Layout>
      <SEO title="Área Gris" />
      <div
        className="container vh-100"
        ref={ref => {
          setContainer(ref);
        }}
      >
        <div
          className="flex items-center-ns container"
          ref={ref => {
            setContainer(ref);
          }}
        >
          <Intro />
          <Gallery />
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage
