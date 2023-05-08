import styled from "styled-components";

const RingWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading-ring {
    display: inline-block;
    position: sticky;
    bottom: 40px;
    width: 80px;
    height: 80px;
    margin: 0 auto;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid #fff;
      border-radius: 50%;
      animation: ldsRing 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
    }
    div:nth-child(1) {
      animation-delay: -0.45s;
    }
    div:nth-child(2) {
      animation-delay: -0.3s;
    }
    div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes ldsRing {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
}
`;

const LoadingSpinner = () => {
    return (
        <RingWrapper>
            <div className="loading-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </RingWrapper>
    );
};

export default LoadingSpinner;