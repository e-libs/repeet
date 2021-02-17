import styled from 'styled-components/native';
import ios from 'helpers/ios';

export const MainView = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ConfigContainer = styled.View`
  flex: 11.1;
`;

export const BackButtonContainer = styled.View`
  left: 10px;
  position: absolute;
  bottom: 13px;
`;

export const TitleContainer = styled.View`
  bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #000;
`;

export const HeaderContainer = styled.View`
  flex: ${ios ? 1.7 : 1.3};
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
