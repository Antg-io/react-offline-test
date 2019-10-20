import React, { ComponentType } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styled from '@emotion/styled';
import { color, flexbox, layout, space, typography } from 'styled-system';

interface StyleUnicornPukeStreamProps {
  alignContent: string;
  bg: string;
  display: string;
  fontSize: string;
  height: number;
  justifyContent: string;
  p: number;
}

const StyledUnicornPukeStream: ComponentType<
  StyleUnicornPukeStreamProps
> = styled.div(color, flexbox, layout, space, typography);

const UnicornPukeStreamProps = {
  color: PropTypes.string,
  fuel: PropTypes.string,
  percentage: PropTypes.number,
};

const UnicornPukeStream = ({
  color,
  fuel,
  percentage,
}: InferProps<typeof UnicornPukeStreamProps>) => (
  <StyledUnicornPukeStream
    alignContent="center"
    bg={color}
    data-testid="components/UnicornPukeStream"
    display="flex"
    fontSize={`${percentage > 2 ? 1 * (percentage / 5) : 0.5}rem`}
    justifyContent="center"
    p={4}
    height={percentage * 5}
  >
    {fuel} ({percentage}%)
  </StyledUnicornPukeStream>
);

UnicornPukeStream.propTypes = UnicornPukeStreamProps;

export default UnicornPukeStream;
