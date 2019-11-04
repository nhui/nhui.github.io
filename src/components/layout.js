import React from "react"
import { StaticQuery, graphql } from "gatsby"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

import SiteHeader from "../components/site-header"

import { Row, Col } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button, Icon, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const LayoutCSS = css`
  min-height: 100vh;
`
const ContentCSS = css`
  display: flex;
  padding: 0;
`
const WrapperCSS = css`
  width: 100%;
  background: #fff;
  padding: 24px 64px;
  min-height: 280px;
`
const FooterCSS = css`
  text-align: center;
  height: 64px;
`

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title,
            copyright
          }
        }
      }
    `}
    render={data => (
      <Layout css={LayoutCSS}>
        <SiteHeader/>
        <Content css={ContentCSS}>
          <div css={WrapperCSS}>
            {children}
          </div>
        </Content>
        <Footer css={FooterCSS}>
          {data.site.siteMetadata.copyright}
        </Footer>
      </Layout>
    )}
  />
)
