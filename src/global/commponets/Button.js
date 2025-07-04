import styled , {css}from "styled-components";
import color from "../../global/styled/color";
import fontsize from "../../global/styled/fontsize";

const {primary, light,dark} =color;
const {medium, normal} = fontsize;

const commonStyle = css`
  min-width: 100px;
  min-height: 45px;
  background: ${({ bg }) => (bg ? (color[bg] ? color[bg] : bg) : primary)};
  color: ${({ color: c }) => (c ? (color[c] ? color[c] : c) : light)};
  font-size: ${normal};
  border: 0;
  cursor: pointer;
  box-shadow: 3px 3px 5px ${dark};
`;
export const  Button = styled.button`
    ${commonStyle}
    width:${({width})=> width ?? '200px'};
    height:${({height})=> height ?? '58px'};
    font-size: ${medium};
`;
export const MediumButton = styled.button`
  ${commonStyle}
  width: ${({ width }) => width ?? "200px"};
  height: ${({ height }) => height ?? "58px"};
  font-size: ${medium};
`;
