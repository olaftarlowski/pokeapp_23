// import styled, { CSSObject } from "styled-components";
import styled from "styled-components";

interface MyComponentProps {
  color: string;
}
const OpenButtonWrapper = styled.button<{ arrowToRight: boolean, sideMenuToggle: boolean }>`
width: 40px;
height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 10px; */
  /* background-color: red; */
  border: none;
  outline: none;
  cursor: pointer;

  animation: ${props => props.sideMenuToggle ? `rotateButton 0.5s linear` : `rotateButtonBack 0.5s linear`};

  svg {
    transform: rotate(${props => props.arrowToRight && !props.sideMenuToggle ? '90deg' : props.arrowToRight && props.sideMenuToggle ? '270deg' : !props.arrowToRight && props.sideMenuToggle ? '90deg' : '270deg'}) scale(3,1);
  }
  @keyframes rotateButton {
    from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(360deg);
  }
    }

 `
export const ArrowOpen = (
  { color, toggle, arrowToRight, sideMenuToggle }: any
  // { style }: { style?: CSSObject }
) => (
  <OpenButtonWrapper onClick={toggle} sideMenuToggle={sideMenuToggle} arrowToRight={arrowToRight}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11.561 7.216"
    // style={style}
    >

      <g
        id="arrow_open"
        data-name="arrow open"
        transform="translate(28.248 -22.1) rotate(90)"
      >
        <path
          id="Path_24"
          data-name="Path 24"
          d="M22.8,17.923l.483-.523,5.309,5.068-5.309,5.068-.483-.523,4.746-4.545Z"
          transform="translate(0 0)"
          fill={color}
          // stroke={defaultTheme.colors.primary}
          strokeWidth="1"
        />
      </g>
    </svg>
  </OpenButtonWrapper>
);

export const Star = (
  // { style }: { style?: CSSObject }
) => (
  <svg
    id="Icon_Bold_Action_Star_rating_01"
    data-name="Icon / Bold / Action / Star_rating_01"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
  // style={style}
  >
    <rect id="Container" width="18" height="18" fill="none" />
    <path
      id="_Icon_Bold_Action_Star_rating_01"
      data-name="*Icon / Bold / Action / Star_rating_01"
      d="M8.05.534A.81.81,0,0,1,9.559.5l.017.038L11.57,5.39l5.271.383a.808.808,0,0,1,.527,1.4L17.34,7.2l-.029.026L13.277,10.61l1.26,5.089a.809.809,0,0,1-1.167.936l-.032-.018-.032-.019L8.813,13.83,4.321,16.6a.809.809,0,0,1-1.248-.826l.007-.036.008-.037,1.26-5.089L.316,7.226A.808.808,0,0,1,.708,5.782l.039-.005.039,0L6.056,5.39Z"
      transform="translate(0.187 0.634)"
    />
  </svg>
);

export const Tick = (
  // { style }: { style?: CSSObject }
) => (
  <svg
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 499.26 371.84"
  // style={style}
  >
    <g id="Layer_1-2" data-name="Layer 1">
      <polyline
        style={{
          fill: "none",
          stroke: "#000",
          strokeMiterlimit: 10,
          strokeWidth: "75px",
        }}
        points="483.13 15.69 167.71 339.88 15.84 189.38"
      />
    </g>
  </svg>
);

export const Cross = (
  // { style }: { style?: CSSObject }
) => (
  <svg
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 367.9 363.5"
  // style={style}
  >
    <g id="Layer_1-2" data-name="Layer 1">
      <line
        x1="15.92"
        y1="15.9"
        x2="347.37"
        y2="347.59"
        style={{
          fill: "none",
          stroke: "#000",
          strokeMiterlimit: 10,
          strokeWidth: "55px",
        }}
      />
      <line
        x1="352.11"
        y1="16.46"
        x2="18.2"
        y2="345.68"
        style={{
          fill: "none",
          stroke: "#000",
          strokeMiterlimit: 10,
          strokeWidth: "55px",
        }}
      />
    </g>
  </svg>
);