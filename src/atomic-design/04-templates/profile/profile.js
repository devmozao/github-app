import React from 'react'

import { Container, Row, Col } from 'styled-bootstrap-grid'

import Typography from '../../01-atoms/typography'
import Icons from '../../01-atoms/icons'

const { Bold, Italic, Regular, Muted, Light, Logo } = Typography
const { Follower, Localization, Organization, Repository, Search, Star } = Icons

const TemplateProfile = ({ match, history }) => {
  return (
    <>
      <Container>
        <br />
        <Row>
          <Col col={12}>
            <span>Texto <input /><button>Send</button></span>
          </Col>
        </Row>
        <br />

        <Row>
          <Bold size={75}>Bold</Bold>
          <br />
        </Row>
        <Row>
          <Col>
            <Italic size={75}>Italic</Italic>
            <br />
            <Regular size={75}>Regular</Regular>
            <br />
          </Col>
          <Col>
            <Muted size={75}>Muted</Muted>
            <br />
            <Light size={75}>Light</Light>
            <br />
            <Logo size={75}>Logo</Logo>
            <br />
          </Col>
        </Row>
        <Row>
          <Col col={1}>
            <Follower />
            <br />
          </Col>
          <Col col={1}>
            <Localization />
            <br />
          </Col>
          <Col col={1}>
            <Organization />
            <br />
          </Col>
          <Col col={1}>
            <Repository />
            <br />
          </Col>
          <Col col={1}>
            <Search />
            <br />
          </Col>
          <Col col={1}>
            <Star />
            <br />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TemplateProfile
