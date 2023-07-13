/* eslint-disable react/sort-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { SvgXml } from 'react-native-svg';
import PropTypes from 'prop-types';

const SvgIcon = props => {
  return (
    <SvgXml
      xml={props.xml}
      width={props.width}
      height={props.height}
      style={props.style}
    />
  );
};
export default SvgIcon;

SvgIcon.propTypes = {
  xml: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
