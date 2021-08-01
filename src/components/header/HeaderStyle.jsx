import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: white;
  border-bottom: 1px solid lightgray;
  padding: 0 24px;
  position: fixed;
  width: 100vw;
  z-index: 100;
  /* left: 0; */
  /* top: 0; */
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
export const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

export const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      height: 34px;
      padding: 0 8px 0 40px;
      /* line-height: 1.75; */
      font-weight: 400;
      font-size: 14px;
      border-color: #dce6f1;
      /* vertical-align: text-top; */
    }
  }
`;
export const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

export const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

export const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: transparent; */
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      /* display: flex;
      align-items: center; */
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
export const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  width: 100px;
  height: 40px;
  border-radius: 0 0 5px 5px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

export const User = styled(NavList)`
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

export const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
