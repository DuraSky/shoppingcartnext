import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  .textAndIcon {
    display: flex;
    align-items: center;
    gap: 7px;

    p {
      color: ${({ theme }) => theme.backgroundBrown};
      //font-weight: bold;
      //font-weight: 400;
      font-size: 14px;
      letter-spacing: 1px;
    }
  }

  @media (min-width: 1200px) {
    /* max-width: 1200px; */
    max-width: ${({ theme }) => theme.maxWidth};

    margin: 0 auto;
  }
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  position: relative;
  background: white;
  padding: 25px;
  gap: 10px;

  &::before {
    background: white;

    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100%;
    box-shadow: ${({ theme }) => theme.myLightBoxShadow};
    z-index: -1;
  }

  @media (min-width: 530px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0px;
  }
`;

export default { Wrapper, TopBar };
