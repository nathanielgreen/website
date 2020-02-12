import React from "react"
import styled from "styled-components"
import Icon from "../components/Icon.js"
import DefaultLayout from "../layouts/DefaultLayout.js"

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const HeaderWrapper = styled.div`
  margin: 40px;
  text-align: center;
`
const Heading = styled.h1`
  font-size: 56px;
`

const Subheading = styled.h2`
  font-size: 26px;
`

const List = styled.ul`
  list-style: none;
  display: flex;
`

export default () => (
  <DefaultLayout>
    <Container>
      <HeaderWrapper>
        <Heading>Nat Green</Heading>
        <Subheading>Web Developer based in London, UK.</Subheading>
      </HeaderWrapper>
      <List>
        <Icon
          iconPath="images/mail.svg"
          text="Mail"
          link="mailto:n@ngreen.io"
        />
        <Icon
          iconPath="images/github.svg"
          text="Github"
          link="https://github.com/nathanielgreen/"
        />
        <Icon
          iconPath="images/gitlab.svg"
          text="Gitlab"
          link="https://gitlab.com/nathanielgreen/"
        />
        <Icon
          iconPath="images/file.svg"
          text="CV"
          link="https://gitlab.com/nathanielgreen/CV/"
        />
        <Icon
          iconPath="images/linkedin.svg"
          text="LinkedIn"
          link="https://www.linkedin.com/in/nathaniel-g-727263107"
        />
      </List>
    </Container>
  </DefaultLayout> 
)
