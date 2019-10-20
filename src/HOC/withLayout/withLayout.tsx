import React, { Component, ComponentType } from 'react';
import Layout from '../../components/layout';

interface WithLayoutProps {
  title: string;
}

const withLayout = <P extends object>(WrappedComponent: ComponentType<P>) =>
  class WithLayout extends Component<P & WithLayoutProps> {
    render(): React.ReactElement<React.ComponentType, string> {
      return (
        <Layout {...(this.props as P)}>
          <WrappedComponent {...(this.props as P)} />
        </Layout>
      );
    }
  };

export default withLayout;
