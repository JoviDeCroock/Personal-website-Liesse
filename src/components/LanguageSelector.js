import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Option = styled.p`
  cursor: pointer;
  text-decoration: ${({ selected }) => (selected ? 'underline' : 'none')};
`;

const LanguageSelector = ({ language, setLanguage }) => (
  <Wrapper>
    <Option selected={language === 'en'} onClick={() => setLanguage('en')}>EN</Option>&nbsp;|&nbsp;
    <Option selected={language === 'nl'} onClick={() => setLanguage('nl')}>NL</Option>&nbsp;|&nbsp;
    <Option selected={language === 'fr'} onClick={() => setLanguage('fr')}>FR</Option>
  </Wrapper>
)

export default LanguageSelector;
