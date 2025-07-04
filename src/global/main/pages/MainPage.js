import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MediumButton } from "../../commponets/Button";



const Wrapper = styled.div`
    position: absolute;
    height: calc(100px - 190px);
    width: 100%;
    top: 90px;
    left: 0;
    display: flex;
    align-ltems: center;
    flex=direction: column;
    justify-content: center;
      .main-image {
    display: block;
    margin-bottom: 30px;
  }

  .start-btn {
    width: 200px;
    display: block;
    margin:
`;


const MainPage =()=>{
    return (
      <div>
        <Wrapper>
          <Link to="/draw" className="start-btn">
            <MediumButton type="button">시작하기</MediumButton>
          </Link>
        </Wrapper>
      </div>
    );
};

export default React.memo(MainPage)