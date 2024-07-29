import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  position: relative;

  /* #ppl-parcelshop-map {
    width: 100%;
    height: 800px;
    min-width: 350px;
    min-height: 600px;
 


    .smap {
      width: 100% !important;
      height: 100% !important;
    }

    svg {
      width: 100% !important;
      height: 100% !important;
    }
  } */

  /* #ppl-parcelshop-map {
    z-index: 4000;
    display: block;
  } */
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: ${({ theme }) => theme.fontOrange};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: ${({ theme }) => theme.myBorderRadius};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundBrown};
  }

  @media (max-width: 480px) {
    padding: 2px 5px;
  }
`;
