import styled from "styled-components";
import { SvgOpenArrowProps } from "../utils/types/commons";
import backgroundImage from "../assets/container_bg.png";

export const RootLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  min-height: 100vh;
  background: url(${backgroundImage});
`;

export const HomeWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderWrapper = styled.header<{ height: number }>`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.border};
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10000;

  .header__content {
    height: 100%;
    padding: 0 48px;
    color: ${(props) => props.theme.colors.text};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 100;

    .ReactCollapse--collapse {
      position: absolute;

      top: ${(props) => `${props.height}px`};
      right: 0;
      transition: height 500ms;
    }
    .logosDIV {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
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
  background: ${(props) => props.theme.colors.primary};
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
        border-bottom: 1px solid ${(props) => props.theme.colors.border};
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
          color: ${(props) => props.theme.colors.active};
          border-bottom: 1px solid ${(props) => props.theme.colors.active};
        }
      }
    }
  }
`;

export const PokeListWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: stretch;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const SideMenuWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  width: 150px;
  height: 100%;
  padding: 12px 24px;
  border: 1px solid red;
`;

export const BackButtonWrapper = styled.div`
  display: inline-block;
  /* padding: 10px 20px; */
  background-color: #ccc;
  color: #333;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #bbb;
  }
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    margin: 10px 20px;
  }
`;

export const OpenButtonWrapper = styled.button<SvgOpenArrowProps>`
  width: 40px;
  height: 120px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  outline: none;
  cursor: pointer;

  animation: ${(props) =>
    props.$sideMenuToggle
      ? `rotateButton 0.5s linear`
      : `rotateButtonBack 0.5s linear`};

  svg {
    transform: rotate(
        ${(props) =>
          props.$arrowToRight && !props.$sideMenuToggle
            ? "90deg"
            : props.$arrowToRight && props.$sideMenuToggle
            ? "270deg"
            : !props.$arrowToRight && props.$sideMenuToggle
            ? "90deg"
            : "270deg"}
      )
      scale(3, 1);

    path {
      fill: #f2f2f2;
    }
  }
  @keyframes rotateButton {
    from {
      transform: rotateY(180deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }

  @keyframes rotateButtonBack {
    from {
      transform: rotateY(180deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;

export const SideMenuItemWrapper = styled.div`
  width: 100px;
  height: 100px;
  padding: 6px;
  border: 2px solid ${({ color }) => (color ? color : "green")};
  border-radius: 10px;
  margin: 12px 0;

  img {
    border-radius: inherit;
  }
`;

export const SnackbarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 70px;
  position: fixed;
  right: 0;
  /* left: 0; */
  z-index: 10;
  transition: opacity 150ms, transform 150ms;

  span {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
    border: 2px solid ${(props) => props.theme.colors.text};
    padding: 24px;
    border-radius: 24px;
  }
`;
