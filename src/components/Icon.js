import React from "react"
import styled from "styled-components"

const Image = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 2px;
`
const Link = styled.a`
  text-decoration: none;
  color: inherit;
	margin: 0 15px;
	padding-bottom: 2px;
	border-bottom: solid;
	border-width: 2px;
	border-color: transparent;
  &:hover {
    border-color: black;
  }
`

export default ({ iconPath, text, link }) => (
  <React.Fragment>
    <Link href={ link }>
      <Image src={ iconPath } />
      { text }
    </Link>
  </React.Fragment>

)
