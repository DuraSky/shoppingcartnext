import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  img {
    width: 150px;
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
    //flex-grow: 1;
    align-items: center;
    padding: 5px;

    .textAndIcon {
      display: flex;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
      gap: 5px;

      img,
      svg {
        width: 18px;
      }
      p {
        color: ${({ theme }) => theme.backgroundBrown};
        //font-weight: bold;
        //font-weight: 400;
        font-size: 12px;
        letter-spacing: 1px;
      }

      &:last-child:hover {
        background-color: ${({ theme }) => theme.backgroundGrey};
        cursor: pointer;
        //height: 100%;
      }
    }
  }

  @media (min-width: 370px) {
    .menu {
      display: flex;
      width: 100%;
      //padding: 10px;
      /* flex-wrap: nowrap;
      gap: 5px; */
    }
  }

  @media (min-width: 530px) {
    .menu {
      padding: 10px;
    }
  }

  @media (min-width: 750px) {
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;

    img {
      width: 200px;
    }
    .menu {
      display: flex;
      //padding: 10px;
      .textAndIcon {
        svg {
          width: 24px;
        }
      }
    }
  }

  /* @media (min-width: 420px) {
    .menu {
      flex-grow: 1;
      flex-wrap: nowrap;
    }
  } */

  @media (min-width: 1200px) {
    /* max-width: 1200px; */
    //max-width: ${({ theme }) => theme.maxWidth};

    //margin: 0 auto;
  }
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //padding: 10px;
  position: relative;
  background: white;
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

export const SignOutButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.backgroundBrown};
  cursor: pointer;
  padding: 0;
  font: inherit;
  font-size: 11px;
  text-decoration: underline;
  //margin-left: 5px;

  &:hover {
    color: ${({ theme }) => theme.fontOrange};
  }
`;

export const SignedIn = styled.span`
  display: flex;
  flex-direction: column;
`;

export default { Wrapper, TopBar, SignedIn, SignOutButton };
