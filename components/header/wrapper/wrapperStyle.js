import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  font-weight: 300;
  line-height: 1.2;

  img {
    width: 150px;
    filter: hue-rotate(98deg);
  }

  .bold {
    font-weight: 400;
  }
  .supportIcon {
    filter: none;
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
    //flex-grow: 1;
    //align-items: center;
    //justify-content: flex-end;
    justify-content: space-around;
    //justify-content: space-between;

    //padding: 5px;
    //min-height: 80px;

    .iconGroup {
      display: flex;
      flex-grow: 1;
    }

    .textAndIcon {
      display: flex;
      //flex-grow: 1;
      align-items: center;
      justify-content: center;
      padding: 10px;

      gap: 5px;

      //height: 100%;

      .supportIcon {
        object-fit: contain;
        width: 40px;
        border-radius: 50%;

        //height: auto;
      }

      img,
      svg {
        width: 18px;
      }
      p {
        //color: ${({ theme }) => theme.backgroundBrown};
        //color: ${({ theme }) => theme.fontGrey};
        //font-weight: bold;
        //font-weight: 400;
        //font-weight: 300;
        font-size: 14px;
        //letter-spacing: 1px;
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
      padding: 5px;
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
          width: 30px;
          color: ${({ theme }) => theme.primaryColor};
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

  @media (min-width: 900px) {
    img {
      margin-left: 30px;
    }
  }

  @media (min-width: 530px) {
    flex-direction: row;
    //justify-content: space-between;
    gap: 0px;
  }
`;

export const SignOutButton = styled.button`
  background: none;
  border: none;
  //color: ${({ theme }) => theme.backgroundBrown};
  cursor: pointer;
  padding: 0;
  font: inherit;
  //font-size: 11px;
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
