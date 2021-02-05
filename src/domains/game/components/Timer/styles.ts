import styled from 'styled-components/native';

export const Indicator = styled.Text<{ active: boolean }>`
  color: ${({ active }) => (active ? '#FFF' : '#333')};
  font-size: 70px;
  line-height: 70px;
  margin: 0 2px;
`;
