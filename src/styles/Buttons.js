import styled from 'styled-components';
import { adjustColorBrightness, getTextColor } from '../utils/convertColor';

export const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 10px;
  font-size: 30px;
  background-color: ${props => props.theme.color.primary};
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;

  svg {
    fill: ${props => getTextColor(props.theme.color.primary)} !important;
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.color.primary};
  color: ${props => getTextColor(props.theme.color.primary)};
  border: none;
  padding: 10px;
  border-radius: 5px;
  flex: 1;
  margin: 5px 2px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;

  &:disabled {
    background-color: ${props => props.theme.color.intermediary};
    color: ${props => adjustColorBrightness(props.theme.color.intermediary, 20)};
    cursor: default;
  }
`
