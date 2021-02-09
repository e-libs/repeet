import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Indicator = styled.View<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#0F0' : '#030')};
  width: 8px;
`;

export const DialContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 15px;
`;

export const LeftSpacer = styled.View`
  flex: 2;
`;
