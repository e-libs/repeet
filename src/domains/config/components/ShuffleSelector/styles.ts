import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 40px;
`;

export const Label = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

// TODO: reuse / share styles below
export const OffButton = styled.TouchableOpacity<{ active: boolean }>`
  ${({ active }) => css`
    flex: 1;
    align-items: center;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: ${active ? '#26bd53' : '#AAA'};
    padding: 15px;
  `}
`;

export const OnButton = styled.TouchableOpacity<{ active: boolean }>`
  ${({ active }) => css`
    flex: 1;
    align-items: center;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${active ? '#bd322d' : '#AAA'};
    padding: 15px;
  `}
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 25px;
`;

export const Description = styled.Text`
  margin-top: 20px;
  font-size: 18px;
`;