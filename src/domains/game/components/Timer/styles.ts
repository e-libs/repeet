import styled from 'styled-components/native';

export const Container = styled.View`
  /* flex: 1; */
  /* flex-direction: row; */
  /* border: 1px solid red; */
`;

export const Indicator = styled.Text<{ active: boolean }>`
  color: ${({ active }) => (active ? '#FFF' : '#333')};
  font-size: 70px;
  line-height: 70px;
  margin: 0 2px;
`;
