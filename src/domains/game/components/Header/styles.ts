import styled from 'styled-components/native';
import ios from 'helpers/ios';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

export const TopContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 10px;
`;

export const BottomContent = styled.View``;

export const Score = styled.Text`
  font-size: 60px;
  font-weight: bold;
  font-family: Verdana;
`;

export const BackButtonContainer = styled.View`
  bottom: ${ios ? 14 : 19}px;
`;
