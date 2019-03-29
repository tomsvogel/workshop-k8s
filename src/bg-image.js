import React from 'react';
import styled from 'styled-components';

const IMG = styled.img`
  width: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${props => props.opacity};
`;
const BGImage = ({src, opacity}) => <IMG src={src} opacity={opacity} />;

export default BGImage;
