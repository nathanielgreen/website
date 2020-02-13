import React from "react"
import styled from "styled-components"
import Icon from "../components/Icon.js"
import DefaultLayout from "../layouts/DefaultLayout.js"
import JSONData from "../../_content/home/data.json"

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
        <Heading>{ JSONData.heading }</Heading>
        <Subheading>{ JSONData.subheading }</Subheading>
      </HeaderWrapper>
      <List>
        {
          JSONData.links.map((link) => {
            return (
              <Icon
                iconPath={ link.icon }
                text={ link.text }
                link={ link.link }
              />
            )
          })
        }
      </List>
    </Container>
  </DefaultLayout> 
)
