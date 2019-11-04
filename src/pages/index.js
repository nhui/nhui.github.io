import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout"


const LayoutCSS = css`
  min-height: 100vh;
`

export default () => (
    <Layout>
        <h1>Hello, I'm Nathan!</h1>
        <p>What would you like to know about me?</p>
    </Layout> 
)