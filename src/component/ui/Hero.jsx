import React, { Fragment } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


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
        <AppBar>
          <ToolBar>Colorado New Style</ToolBar>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
}
