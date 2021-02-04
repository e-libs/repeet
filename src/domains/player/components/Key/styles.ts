import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Button = styled.TouchableOpacity<{ color: string }>`
  ${({ color }) => css`
    background-color: ${color};
    flex: 1;
    border: 5px solid black;
  `}
`;
