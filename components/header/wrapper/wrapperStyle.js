import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

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

  &::before {
    background: white;

    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    z-index: -1;
  }

  @media (min-width: 530px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const InfoAndIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  p {
    color: green;
    font-weight: bold;
  }
`;

export default { Wrapper, TopBar, InfoAndIcon };
