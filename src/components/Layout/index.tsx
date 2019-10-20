import React, { ComponentType } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

import KiwiPowerTheme from '../../kiwipower.theme';
import { flexbox, layout } from 'styled-system';

import Header from './Header';
import Footer from './Footer';

interface ContainerProps {
  display: string;
  flexDirection: string;
}

const Container: ComponentType<ContainerProps> = styled.div(flexbox, layout);

const layoutProps = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

const Layout: React.FC<InferProps<typeof layoutProps>> = ({
  children,
  title,
}: InferProps<typeof layoutProps>) => (
  <div data-testid="components/Layout">
    <ThemeProvider theme={KiwiPowerTheme}>
      <Container display="flex" flexDirection="column">
        <Header title={title} />
        <main data-testid="components/Layout/Main">{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
