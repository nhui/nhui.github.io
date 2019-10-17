import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import { Button, Icon, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const HeaderStyled = styled( Header )`
  padding-left: 0;
  padding-right: 0;
`
const TitleStyled = styled.div`
  background-color: white;
  // height: 100%;
`
const ButtonStyled = styled.div`
  margin: 0 auto;
  bacground-color: white;
  height: inherit;
  &hover: {
    background-color: grey;
  }
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
      <Layout 
        className="layout"
        style={{
          // height: '100vh',
        }}>
        <HeaderStyled>
          {/* <div className="logo" /> */}
          <Row type="flex">
            <Col span={8} style={{textAlign: 'center'}}>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ 
                  lineHeight: '64px' 
                }}
              >
                <Menu.Item key="1">about</Menu.Item>
                <Menu.Item key="2">roboblog</Menu.Item>
                {/* <Menu.Item key="3">media</Menu.Item> */}
                <Menu.Item key="4">travel</Menu.Item>
              </Menu>
            </Col>
            <Col span={8} style={{textAlign: 'center'}}>
              <Menu
                theme="light"
                mode="horizontal"
                selectable={false}
                style={{ 
                  lineHeight: '64px' 
                }}
              >
                <Menu.Item>
                  <Title
                    style={{
                      lineHeight: '64px',
                      margin: '0 auto',
                    }}
                  >
                    {data.site.siteMetadata.title}
                  </Title>
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={8} style={{textAlign: 'center'}}>
              <Menu 
                theme="light"
                mode="horizontal"
                selectable={false}
                style={{ 
                  lineHeight: '64px' 
                }}
              >
                <Menu.Item 
                  style={{  
                    // display: 'inline-flex', 
                    // alignItems: 'center', 
                    justifyContent: 'centre',
                    // textAlign: 'centre',
                    height: '100%',
                  }}>
                  <Icon 
                    type="linkedin" 
                    style={{  
                      display: 'inline-block', 
                      margin: '0 auto',
                      verticalAlign: 'middle', 
                      fontSize: '24px'
                    }} />
                </Menu.Item>
                <Menu.Item 
                  style={{  
                    // display: 'inline-flex', 
                    // alignItems: 'center', 
                    justifyContent: 'centre',
                    // textAlign: 'centre',
                    height: '100%',
                  }}>
                  <Icon 
                    type="github" 
                    style={{  
                              display: 'inline-block', 
                              margin: '0 auto',
                              verticalAlign: 'middle', 
                              fontSize: '24px'
                          }}/>
                </Menu.Item>
                <Menu.Item 
                  style={{  
                    // display: 'inline-flex', 
                    // alignItems: 'center', 
                    justifyContent: 'centre',
                    // textAlign: 'centre',
                    height: '100%',
                  }}>
                  <Icon 
                    type="mail" 
                    style={{  
                              display: 'inline-block', 
                              margin: '0 auto',
                              verticalAlign: 'middle', 
                              fontSize: '24px'
                          }}/>
                </Menu.Item>
                <Menu.Item 
                  style={{  
                    // display: 'inline-flex', 
                    // alignItems: 'center', 
                    justifyContent: 'centre',
                    // textAlign: 'centre',
                    height: '100%',
                  }}>
                  <Icon 
                    type="twitter" 
                    style={{  
                      display: 'inline-block', 
                      margin: '0 auto',
                      verticalAlign: 'middle', 
                      fontSize: '24px'
                    }}/>
                </Menu.Item>
              </Menu>
            </Col>
            {/* <Col span={2} style={{textAlign: 'center', backgroundColor: 'white'}}>
              <div style={{ display: 'inline-flex', alignItems: 'center', height: '100%'}}>
                <Icon type="linkedin" style={{ display: 'inline-block', verticalAlign: 'middle', fontSize: '24px' }} />
              </div>
            </Col>
            <Col span={2} style={{textAlign: 'center', backgroundColor: 'white'}}>
              <div style={{ display: 'inline-flex', alignItems: 'center', height: '100%'}}>
                <Icon type="linkedin" style={{ display: 'inline-block', verticalAlign: 'middle', fontSize: '24px' }} />
              </div>
            </Col>
            <Col span={2} style={{textAlign: 'center', backgroundColor: 'white'}}>
              <div style={{ display: 'inline-flex', alignItems: 'center', height: '100%'}}>
                <Icon type="linkedin" style={{ display: 'inline-block', verticalAlign: 'middle', fontSize: '24px' }} />
              </div>
            </Col> */}
            {/* <Col span={8}>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">
                  
                </Menu.Item>
                <Menu.Item key="2">github</Menu.Item>
                <Menu.Item key="3">email</Menu.Item>
              </Menu>
            </Col> */}
          </Row>
          
        </HeaderStyled>
        <Content 
          style={{ 
            padding: '0',
          }}
        >
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div 
            style={{ 
              height: '100%',
              background: '#fff', 
              padding: 24, 
              minHeight: 280 
            }}
          >
              {children}
          </div>
        </Content>
        <Footer 
          style={{ 
            textAlign: 'center',
            height: '64px'
          }}
        >
          {data.site.siteMetadata.copyright}
        </Footer>
      </Layout>
    )}
  />
)
