import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #000;
  padding: 0 10px 10px;
`;

export const Score = styled.Text`
  color: #f11;
  font-size: 60px;
  font-weight: 500;
  font-family: Verdana;
`;

export const BackButtonContainer = styled.View`
  bottom: 13px;
`;
