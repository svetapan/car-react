import styled from 'styled-components';

export const Button = styled.button`
  background-color: #3470ff;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  padding: 12px;
  display: inline-block;
  min-width: 168px;
  transition: all 0.3s ease-out;
  height: ${props => props.$height || 'auto'};

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const ButtonLink = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  color: #3470ff;
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover,
  &:focus {
    color: #0b44cd;
    text-decoration: none;
  }
`;
