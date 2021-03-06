import styled from 'styled-components/native';
import ios from 'helpers/ios';

export const MainView = styled.View`
  flex: 1;
`;

export const HeaderView = styled.View`
  flex: ${ios ? 2.4 : 2};
`;

export const SequencerView = styled.View`
  flex: 5;
  background-color: #000000;
  padding: 5px;
`;

export const TimerView = styled.View`
  flex: 1.1;
  flex-direction: row;
  background-color: #000000;
`;

export const PlayerView = styled.View`
  background-color: #000000;
  flex: 5;
  padding: 5px 5px 20px;
`;
