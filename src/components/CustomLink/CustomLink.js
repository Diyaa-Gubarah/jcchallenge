import { Link, NavLink, useLocation, useResolvedPath } from "react-router-dom";
import styled, { css } from "styled-components";

import React from "react";

// custom hook to get the current pathname in React

const usePathname = () => {
  const location = useLocation();
  return location.hash;
};

const current = css`
  color: var(--primary);
  border-bottom: 1.5px solid var(--primary);
`;

const CustomizedLink = styled.a`
  padding: 0.25em 0;
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 0.9em;
  color: var(--text_sc);

  ${(props) => props.match && current}
`;

const CustomLink = ({ to = "", children }) => {
  const currentURL = usePathname();

  return (
    <CustomizedLink href={to} match={currentURL === to}>
      {children}
    </CustomizedLink>
  );
};

export default CustomLink;

/*<Link
      to={to}
      className={
        !match ? "not__active__style customized" : "active__style customized"
      }
    >
      {children}
    </Link>**/
