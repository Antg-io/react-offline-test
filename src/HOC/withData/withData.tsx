import React, { Component, ComponentType } from 'react';
import axios from 'axios';

const API_URL = 'https://api.carbonintensity.org.uk/generation';

interface DataState {
  from: string;
  fuels: [];
  to: string;
  dataError: object | boolean;
  loading: boolean;
}

const withData = <P extends object>(WrappedComponent: ComponentType<P>) =>
  class WithData extends Component<P, DataState> {
    state: {
      from: null;
      fuels: [];
      to: null;
      dataError: false;
      loading: true;
    };

    componentDidMount(): void {
      this.fetch();
    }

    fetch(): void {
      axios
        .get(API_URL)
        .then(res => {
          const { from, generationmix: fuels, to } = res.data.data;
          fuels.sort((a, b) => a.perc - b.perc).reverse();
          this.setState({ from, fuels, to, loading: false });
        })
        .catch(error => this.setState({ dataError: error, loading: false }));
    }

    render(): React.ReactNode {
      return <WrappedComponent {...(this.props as P)} {...this.state} />;
    }
  };

export default withData;
