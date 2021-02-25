import styled from 'styled-components/native';

export const MainView = styled.View`
  flex: 1;
`;

export const HeaderView = styled.View`
  flex: 2;
`;

export const SequencerView = styled.View`
  flex: 5;
  background-color: #000000;
  padding: 5px;
`;

export const ReadyView = styled.View`
  flex: 1.1;
  flex-direction: row;
  background-color: #000000;
`;

export const PlayerView = styled.View`
  background-color: #000000;
  flex: 5;
  padding: 5px 5px 20px;
`;

export const TrainingInstructions = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const TrainingMessage = styled.Text`
  font-size: 30px;
  color: #ffffff;
  text-align: justify;
`;
