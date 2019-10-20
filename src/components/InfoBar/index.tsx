import React, { ComponentType } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styled from '@emotion/styled';
import { color, flexbox, layout, space } from 'styled-system';
import moment from 'moment';

interface StyledInfoBarProps {
  bg: string;
  p: number;
}
const StyledInfoBar: ComponentType<StyledInfoBarProps> = styled.div(
  color,
  flexbox,
  layout,
  space
);

const infoBarProps = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export const formattedDate = (date: string) => {
  const momentDate = moment(new Date(date));

  return momentDate.isValid()
    ? momentDate.format('D-M-Y @ H:mm')
    : 'INVALID DATE';
};

const InfoBar: React.FC<InferProps<typeof infoBarProps>> = ({
  from,
  to,
}: InferProps<typeof infoBarProps>) => (
  <StyledInfoBar data-testid="components/InfoBar" bg="kiwiLightGreen" p={2}>
    Displaying Data from {formattedDate(from)} to {formattedDate(to)}
  </StyledInfoBar>
);

InfoBar.propTypes = infoBarProps;

export default InfoBar;
