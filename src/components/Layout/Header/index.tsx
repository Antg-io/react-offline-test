import React, { ComponentType } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styled from '@emotion/styled';
import { color, flexbox, layout, space } from 'styled-system';

interface StyleHeaderProps {
  alignContent: string;
  bg: string;
  color: string;
  display: string;
  justifyContent: string;
  p: number;
}

const StyledHeader: ComponentType<StyleHeaderProps> = styled.header(
  color,
  flexbox,
  layout,
  space
);

const headerProps = {
  title: PropTypes.string.isRequired,
};

const Header: React.FC<InferProps<typeof headerProps>> = ({
  title,
}: InferProps<typeof headerProps>) => (
  <StyledHeader
    alignContent="center"
    bg="kiwiGreen"
    color="white"
    data-testid="components/Layout/Header"
    display="flex"
    justifyContent="center"
    p={2}
  >
    <h1 data-testid="components/Layout/Header@title">{title}</h1>
  </StyledHeader>
);

Header.propTypes = headerProps;

export default Header;
