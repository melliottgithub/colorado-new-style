import React, { Fragment, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide direction="down" in={trigger}>
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
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

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
                New{" "}
              </span>
              Style
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/categories"
                label="Categories"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/virtualschool"
                label="Virtual School"
              />
              <Tab
                className={classes.tab}
                to="/about"
                component={Link}
                label="About Us"
              />
              <Tab
                className={classes.tab}
                to="/language"
                component={Link}
                label="EN"
              />
            </Tabs>
          </ToolBar>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
}
