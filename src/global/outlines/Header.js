import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { MdHome, MdDraw, MdLogin } from 'react-icons/md';
import useUseInfo from '../../drawing/global/hooks/useUseInfo';
import color from '../styles/color';
import fontsize from '../styles/fontsize';

const { primary, light, dark } = color;
const { big, extraBig } = fontsize;

const StyledHeader = styled.header`
  height: 90px;
  display: flex;
  background: ${primary};
  color: ${light};
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  .left,
  .right {
    display: flex;
    flex-grow: 1;
  }

  .right {
    justify-content: right;
  }

  a {
    font-size: ${big};
    color: ${light};
    display: flex;
    align-items: center;

    &.on {
      text-shadow: 2px 2px 5px ${dark};
    }

    svg {
      font-size: ${extraBig};
    }
  }

  a + a {
    margin-left: 25px;
  }
`;

const Header = () => {
  const [isLogin, loggedMemeber] = useUseInfo();
  return (
    <StyledHeader className="layout-width">
      <div className="left">
        <NavLink to="/">
          <MdHome />
          <span>메인으로</span>
        </NavLink>
        <NavLink
          to="/draw"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          <MdDraw />
          <span>낙서하기</span>
        </NavLink>
      </div>
      <div className="right">
        {isLogin ? (
          <>
          {loggedMemeber.name}({loggedMemeber.email})님
          <a onClick={onLogout}></a>
            <NavLink to="logout">
              <span>로그아웃</span>
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/member/login"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            <MdLogin />
            <span>로그인</span>
          </NavLink>
        )}
      </div>
    </StyledHeader>
  );
};

export default React.memo(Header);
