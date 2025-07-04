import React from "react";
import styled from "styled-components";
import color from '../../global/styled/color';
import fontsize from "../../global/styled/fontsize";

const {secondary, dark} = color;
const {big}  = fontsize;
const StyledBox = styled.div`
  background: ${secondary};
  font-size: ${big};
  padding: 30px 20px;
  text-align: center;
  margin-bottom: 15px;
  box-shadow: 2px 2px 5px ${dark};
  border-radius: 3px;
`;

const Drawection = ({ category }) => {
  return <StyledBox>{category[1]}을(를) 그리시오.</StyledBox>;
};

export default React.memo(Drawection);