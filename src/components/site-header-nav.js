import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import { css } from "@emotion/core"

const Container = styled.ul`
    list-style: none;
    float: left;
`
const Element = styled.li`
    display: block;
    margin-right: 1rem;
    font-style: normal;
    background-color: lightgray;
`
const ListLink = props => (
    <Element>
        <Link to={props.to}>{props.children}</Link>
    </Element>
)
export default () => (
    <Container>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
    </Container>
)