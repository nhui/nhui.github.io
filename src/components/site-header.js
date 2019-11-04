import React from "react"
import { StaticQuery, graphql } from "gatsby"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { Row, Col } from "antd"
import { Layout, Menu, Breadcrumb } from "antd"
import { Button, Icon, Typography } from "antd"
import SubMenu from "antd/lib/menu/SubMenu"

const { Header, Content, Footer } = Layout
const { Title } = Typography

const HEADER_HEIGHT = `92px`
const ICON_SIZE = `24px`

const HeaderCSS = css`
  padding: 0;
  height: ${HEADER_HEIGHT};
`
const ColCSS = css`
  text-align: center;
`
const MenuCSS = css`
  line-height: ${HEADER_HEIGHT};
  padding: 0 5%;
`
const TitleCSS = css`
  margin: 0 auto;
  padding: 0;
`
const MenuItemCSS_Pages = css`
  float: left;
  font-size: 20px;
`
const MenuItemCSS_Title = css`

`
const MenuItemCSS_Links = css`
  height: 100%;
  float: right;
  justify-content: center;
`
const IconCSS = css`
  display: inline-block;
  margin: 0 auto;
  vertical-align: middle;
`

export default () => (
  <StaticQuery
    query={graphql`
      query SiteHeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Header css={HeaderCSS}>
        <Row type="flex">
          <Col span={8} css={ColCSS}>
            <Menu css={MenuCSS}
              theme="light"
              mode="horizontal"
            >
              <Menu.Item css={MenuItemCSS_Pages} key="1">about</Menu.Item>
              <Menu.Item css={MenuItemCSS_Pages} key="2">projects</Menu.Item>
              <Menu.Item css={MenuItemCSS_Pages} key="3">travel</Menu.Item>
              {/* <Menu.Item css={MenuItemCSS_Title}>
                <Title css={TitleCSS}>
                  {data.site.siteMetadata.title}
                </Title>
              </Menu.Item>
              <Menu.Item css={MenuItemCSS_Links}>
                <Icon type="linkedin" css={IconCSS}/>
              </Menu.Item>
              <Menu.Item css={MenuItemCSS_Links}>
                <Icon type="github" css={IconCSS}/>
              </Menu.Item>
              <Menu.Item css={MenuItemCSS_Links}>
                <Icon type="mail" css={IconCSS}/>
              </Menu.Item>
              <Menu.Item css={MenuItemCSS_Links}>
                <Icon type="twitter" css={IconCSS}/>
              </Menu.Item>               */}
            </Menu>
          </Col>
          <Col span={8} css={ColCSS}>
            <div
              css={css`
                /* display: inline-flex; */
                margin: 0 auto;
                background-color: white;
                height: 100%;
                border-bottom: 1px solid #e8e8e8;
              `}
            >
              <Title css={TitleCSS} style={{lineHeight: HEADER_HEIGHT, margin: '0 auto'}}>
                {data.site.siteMetadata.title}
              </Title>
            </div>
          </Col>
          <Col span={8} css={ColCSS}>
            <Menu css={MenuCSS}
              theme="light"
              mode="horizontal"
              selectable={false}
            >
              <Menu.Item css={MenuItemCSS_Links}>
                <Icon css={IconCSS} style={{fontSize: ICON_SIZE}} type="twitter"/>
              </Menu.Item>
              <Menu.Item css={MenuItemCSS_Links}>
                <Icon css={IconCSS} style={{fontSize: ICON_SIZE}} type="mail"/>
              </Menu.Item>
              <Menu.Item css={MenuItemCSS_Links}>
                <Icon css={IconCSS} style={{fontSize: ICON_SIZE}} type="github"/>
              </Menu.Item>
              <Menu.Item css={MenuItemCSS_Links}>
                <Icon css={IconCSS} style={{fontSize: ICON_SIZE}} type="linkedin"/>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    )}
  />
)
