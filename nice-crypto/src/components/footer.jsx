import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #f6f6f6;
  padding: 20px 0;
  text-align: center;
`;

const CopyrightText = styled.p`
  font-size: 0.9rem;
  color: #333;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>© 2024 Copyright: $NICE Token</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
