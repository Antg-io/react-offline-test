import React, { ComponentType } from 'react';
import styled from '@emotion/styled';
import { color, flexbox, layout, space } from 'styled-system';

interface StyleFooterProps {
  alignContent: string;
  bg: string;
  display: string;
  justifyContent: string;
  p: number;
}

const StyledFooter: ComponentType<StyleFooterProps> = styled.footer(
  color,
  flexbox,
  layout,
  space
);

const Footer: React.FC = () => (
  <StyledFooter
    alignContent="center"
    bg="kiwiGrey"
    data-testid="components/Layout/Footer"
    display="flex"
    justifyContent="center"
    p={2}
  >
    <h4 data-testid="components/Layout/Footer@text">
      Candidate:
      <a
        data-testid="components/Layout/Footer@email"
        href="mailto:ant@onedigitalvision.com"
      >
        Ant Grimmitt
      </a>
    </h4>
  </StyledFooter>
);

export default Footer;
