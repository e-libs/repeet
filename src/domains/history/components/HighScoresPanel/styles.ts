import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 7px;
`;

export const ScoreRow = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 5px 0;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
`;

export const InitialsPlace = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 2px;
`;

export const Score = styled.View`
  flex: 1;
  align-items: flex-end;
  padding-left: 2px;
`;

export const Text = styled.Text`
  font-size: 35px;
  font-weight: bold;
`;
