declare module "*.css";
declare module "@fontsource/*" {}
declare module "@fontsource-variable/*" {}

declare module "react-router-hash-link" {
  import * as React from "react";
  import { LinkProps } from "react-router-dom";

  export interface HashLinkProps extends LinkProps {
    smooth?: boolean;
    scroll?: (el: HTMLElement) => void;
  }

  export const HashLink: React.ForwardRefExoticComponent<
    HashLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  export const NavHashLink: React.ForwardRefExoticComponent<
    HashLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
}
