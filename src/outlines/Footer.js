import React from "react";
import styled from "styled-components";
import color from "../global/styled/color";


const {light} = color;

const StyedFooter = styled.footer`
    height: 100px;
    background: ${light};
`;

const Footer=()=>{
    return <StyedFooter className="layout-width"></StyedFooter>
};

export default React.memo(Footer);