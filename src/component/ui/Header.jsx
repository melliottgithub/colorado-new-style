import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/styles";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={true} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  appContainer: {
    maxWidth: 1200,
    marginLeft: "20%",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    // textTransform: 'none',

    minWidth: 10,
    marginLeft: "25px",
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <HideOnScroll>
        <AppBar position="fixed">
          <ToolBar className={classes.appContainer}>
            <Typography variant="h6">
              Colorado{" "}
              <span
                style={{
                  fontSize: "1.5rem",
                  color: "#D92332",
                  fontWeight: "700",
                }}
              >
                New
              </span>{" "}
              Style
            </Typography>
            <Tabs textColor="inherit" className={classes.tabContainer}>
              <Tab className={classes.tab} label="Categories" />
              <Tab className={classes.tab} label="Virtual School" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="EN" />
            </Tabs>
          </ToolBar>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
}
