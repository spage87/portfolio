import React, { Fragment } from "react"
import Navigation from "./Navigation"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faCodepen,
  faFreeCodeCamp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

var space = "#266ef6"
var time = "#12e772"
var power = "#e429f2"
var soul = "#ff8b00"
var reality = "#ff0130"
var mind = "#ffd300"

const Wrapper = styled.div`
  background-color: #666;
  display: flex;
  justify-content: space-around;
`
const Title = styled.div`
  font-family: "Source Sans Pro";
  color: #fff;
`
const Links = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
`
const Item = styled.li`
  padding: 0.5rem;
  font-size: 1.5rem;
  a {
    color: #fff;
  }

  :hover {
    background-color: ${props =>
      props.space
        ? space
        : props.time
        ? time
        : props.power
        ? power
        : props.soul
        ? soul
        : props.reality
        ? reality
        : props.mind
        ? mind
        : "#ccc"};
  }
`

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Fragment>
      <Wrapper>
        <Title>{data.site.siteMetadata.title}</Title>
        <Links>
          <Item space>
            <a href="https://www.github.com/spage87/">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Item>
          <Item time>
            <a href="https://www.codepen.io/spage87/">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </Item>
          <Item mind>
            <a href="https://www.freecodecamp.org/spage87">
              <FontAwesomeIcon icon={faFreeCodeCamp} />
            </a>
          </Item>
          <Item power>
            <a href="https://www.linkedin.com/in/sarah-page-4b932656/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </Item>
        </Links>
      </Wrapper>
      <Navigation />
    </Fragment>
  )
}

export default Header
