import styled from 'styled-components';
import { getTextColor } from '../utils/convertColor';

export const Title = styled.h1`
  color: ${(props) => props.theme.color.textTitle};
  font-size: 3em;
  text-shadow: 1px 3px 0 ${(props) => props.theme.color.primary};
  margin: 0;
  animation: fadeInUp;
  animation-duration: 1.2s;
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.color.primary};
  animation: fadeInUp;
  margin: 10px;
  animation-duration: 1.4s;
  font-size: 1.5em;
`;

export const CardTitle = styled.h3`
  color: ${(props) => getTextColor(props.theme.color.intermediary)};
  margin: 0;
`;

export const SectionTitle = styled.h2`
  color: ${(props) => getTextColor(props.theme.color.intermediary)};
  margin: 0;
  margin-bottom: 10px;
`;
