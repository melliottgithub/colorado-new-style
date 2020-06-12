import React, { Fragment, useState, useEffect } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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

  },
  logo: {
    "&:hover": {
      backgroundColor: 'transparent'
    }
  }
}));

export default function Hero() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(null)
    } else if (window.location.pathname === '/' && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === '/' && value !== 2) {
      setValue(2)
    }else if (window.location.pathname === '/' && value !== 3) {
      setValue(3)
    }else if (window.location.pathname === '/' && value !== 4) {
      setValue(4)
    }
    
  }, [value])

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="transparent">
          <ToolBar>
            <Typography variant="h6">
             <Button className={classes.logo} component={Link} to='/' disableRipple> Colorado <span style={{ color: "#D92332" }}>New</span> Style</Button>
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="secondary"
            >
              <Tab component={Link} to="/categories" label="Categories" />
              <Tab component={Link} to="/virtual" label="Virtual School" />
              <Tab component={Link} to="/about" label="About Us" />
              <Tab component={Link} to="/language" label="EN" />
            </Tabs>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      <Button className={classes.button} variant="contained" color="secondary">
        Click me!
      </Button>
    </Fragment>
  );
}
