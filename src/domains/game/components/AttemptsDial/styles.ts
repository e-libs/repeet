import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const Indicator = styled.Text<{ active: boolean }>`
  color: ${({ active }) => (active ? '#0F0' : '#030')};
  font-size: 70px;
  line-height: 70px;
  margin: 0 2px;
`;
