import styled, { css } from 'styled-components/native';

export const Button = styled.TouchableOpacity<{
  active: boolean;
  color: string;
  isLeft?: boolean;
  isRight?: boolean;
}>`
  ${({ active, color, isLeft, isRight }) => css`
    flex: 1;
    align-items: center;
    border-top-left-radius: ${isLeft ? '20px' : 0};
    border-bottom-left-radius: ${isLeft ? '20px' : 0};
    border-top-right-radius: ${isRight ? '20px' : 0};
    border-bottom-right-radius: ${isRight ? '20px' : 0};
    background-color: ${active ? color : '#AAA'};
    padding: 15px;
  `}
`;

export const ButtonText = styled.Text<{ disabled: boolean; fontSize: number; }>`
  ${({ disabled, fontSize }) => css`
    color: ${disabled ? '#888' : '#fff'};
    font-size: ${fontSize}px;
  `}
`;
