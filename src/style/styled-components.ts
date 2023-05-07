import styled from "styled-components";
import backgroundImage from "../assets/container_bg.png"

export const RootLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  min-height: 100vh;
  background: url(${backgroundImage});
`;

export const HeaderWrapper = styled.header`
  background: #f8fafd;
  width: 100%;
  border: 1px solid #d2d2d2;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10000;
  .header__content {
    height: 100%;
    padding: 0 48px;
    color: #000;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 100;
    .ReactCollapse--collapse {
      position: absolute;

      top: 50px;
      right: 0;
      transition: height 500ms;
    }
    .logosDIV {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    @media (max-width: 768px) {
      padding: 0 12px;
      flex-direction: column;
    }
  }
`;

export const NavbarWrapper = styled.nav`
  width: 100%;
  background-color: #f8fafd;
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    margin: 0;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    li {
      padding: 0 6px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 100%;
      @media (max-width: 768px) {
        display: block;
      }
      a {
        text-align: center;
        min-width: 120px;
        white-space: nowrap;
        display: block;
        text-transform: capitalize;
        text-decoration: none;
        color: inherit;
        padding: 4px 6px;
        transition: 0.3s ease all;
        border-bottom: 1px solid #d2d2d2;
        @media (max-width: 768px) {
          font-size: 1.5rem;
          padding: 0.5rem 2rem;
        }
        @media (max-width: 265px) {
          font-size: 1.3rem;
          padding: 0.5rem 1rem;
        }
        &:hover,
        &.active {
          color: #3861fb;
          border-bottom: 1px solid #3861fb;
        }
      }
    }
  }
`;
