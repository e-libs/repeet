import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 0 5px;
`;

export const Indicator = styled.View<{ active: boolean }>`
  flex: 1;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? '#77F' : '#222')};
`;
