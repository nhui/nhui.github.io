import React from "react"
import styled from "@emotion/styled"
// import { css } from "@emotion/core"

import Title from "../components/site-header-title"
import Navigation from "../components/site-header-nav"
import ExternalLinks from "../components/site-header-links"

const Container = styled.div`
    // margin-bottom: 1.5rem;
    background-color: lightblue;
    width: 100%;
    display: block;
`
export default () => (
    <Container>
        <Navigation/>
        <Title/>
        <ExternalLinks/>
    </Container>
)