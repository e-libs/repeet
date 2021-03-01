import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 30px;
`;

export const ScoreRow = styled.View`
  /* flex: 1; */
  flex-direction: row;
  justify-content: center;
  padding: 5px 0;
`;

export const InitialsPlace = styled.View`
  flex: 0.4;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 2px;
`;

export const Score = styled.View`
  flex: 1;
  align-items: flex-start;
  padding-left: 2px;
`;

export const Text = styled.Text`
  font-size: 35px;
  font-weight: bold;
`;
