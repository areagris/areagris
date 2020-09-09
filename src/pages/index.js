import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from '../components/intro';
import Gallery from '../components/gallery';

const IndexPage = () => (
  <Layout>
    <SEO title="Área Gris" />
    <div className="flex items-center">
      <Intro />
      <Gallery />
    </div>
  </Layout>
)

export default IndexPage
