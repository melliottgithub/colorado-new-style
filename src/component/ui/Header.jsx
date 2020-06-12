import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

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
          <ToolBar>
            <Typography variant="h6">
              Colorado New Style
            </Typography>
          </ToolBar>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
}
