import React, { Fragment } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";
import Example from "./Example";

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

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tabContainer: {
    marginLeft: "auto",
  },
  button: {
    
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Fragment>
      <Example />
      <ElevationScroll>
        <AppBar position="fixed" color="transparent">
          <ToolBar>
            <Typography variant="h6" color="">
              Colorado <span style={{ color: "#D92332" }}>New</span> Style
            </Typography>
            <Tabs className={classes.tabContainer}>
              <Tab label="Categories" />
              <Tab label="Virtual School" />
              <Tab label="About Us" />
              <Tab label="EN" />
            </Tabs>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      <Button className={classes.button} variant='contained' color='secondary'>Click me!</Button>
    </Fragment>
  );
}
