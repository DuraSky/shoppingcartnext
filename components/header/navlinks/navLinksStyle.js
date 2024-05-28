import styled from "styled-components";
import Link from "next/link";

export const StyledLinksDiv = styled.div`
  display: flex;
  gap: 80px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black; /* Default color */
  font-weight: bold;

  &.active {
    color: red; /* Color when the link is active */
  }

  &:hover {
    color: blue; /* Color when hovering over the link */
  }
`;
