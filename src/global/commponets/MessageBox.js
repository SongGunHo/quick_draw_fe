import React ,{useState, useCallback, useContext} from "react";
import styled, {css} from "styled-components";
import color from "../styles/color";
import fontsize from "../styles/fontsize";
import CommonContext from "../contexts/CommonContext";

const {primary} = color;
const {normal} = fontsize;
const {actions: {setIsLogin, setLoggdMemeber}} = useState;

const StyledItem = styled.div`
  box-shadow: 2px 2px 5px ${primary};
  color: ${primary};
  padding: 5px 10px;
  test-align: center;
  border-radius: 3px;
  bcakeground: #fff;
  & + & {
    margin-top: 5px;
  }
  ${({ theme }) =>
    theme &&
    css[color] &&
    css`
      box-shadow: 2px 2px 5px ${color[theme]};
      color: ${color[theme]};
    `}
`;

const MessageBox =({items, theme, children}) =>{
    if(children) items = children;
    items = Array.isArray(items) ? items:items ? [items]:[];
    if(items.length ===0){
        return<></>;
    }
    return (
        <>
            {items.map((item, i)=> (
                <StyledItem key={item + '-' +i} theme={theme ?? 'primary'}>{item}</StyledItem>
            ))}
        </>
    )
};

export default React.memo(MessageBox);