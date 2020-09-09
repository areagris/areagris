import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
