import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Icon, { Props as IconProps } from "../components/Icon";
import DefaultLayout from "../layouts/DefaultLayout";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  margin: 40px;
  text-align: center;
`;
const Heading = styled.h1`
  font-size: 56px;
`;

const Subheading = styled.h2`
  font-size: 26px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
`;

interface Props {
  heading: string;
  subheading: string;
  links: IconProps[];
}

const HomePage = ({ heading, subheading, links }: Props) => (
  <DefaultLayout>
    <Container>
      <HeaderWrapper>
        <Heading>{heading}</Heading>
        <Subheading>{subheading}</Subheading>
      </HeaderWrapper>
      <List>
        {links.map((link: IconProps) => (
          <Icon {...link} />
        ))}
      </List>
    </Container>
  </DefaultLayout>
);

export const query = graphql`
  {
    homeJson {
      links {
        text
        icon
        link
      }
      heading
      subheading
    }
  }
`;

export default ({
  data,
}: {
  data: {
    homeJson: Props;
  };
}) => <HomePage {...data.homeJson} />;
