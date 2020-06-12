import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={true} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

export default function Header(props) {
  return (
    <Fragment>
      <HideOnScroll>
        <AppBar position="fixed">
          <ToolBar>Colorado New Style</ToolBar>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
}
