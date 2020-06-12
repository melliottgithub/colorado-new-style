import React, { Fragment } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Hero() {
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" >
          <ToolBar>
            <Typography variant='h3'>Colorado New Style</Typography>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
}
