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
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

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
  tab: {
    // textTransform: 'none',
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {},
  logo: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  appContainer: {
    maxWidth: 1200,
    marginLeft: "20%",
  },
}));

export default function Hero() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(null);
    } else if (window.location.pathname === "/" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/" && value !== 4) {
      setValue(4);
    }
  }, [value]);

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar color="transparent">
          <ToolBar className={classes.appContainer}>
            <Typography variant="h6">
              <Button
                onClick={() => setValue(0)}
                className={classes.logo}
                component={Link}
                to="/"
                disableRipple
              >
                {" "}
                Colorado&nbsp;<span style={{ color: "#D92332" }}>New </span>
                &nbsp;Style
              </Button>
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="secondary"
            >
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                className={classes.tab}
                component={Link}
                onMouseOver={(event) => handleClick(event)}
                to="/categories"
                label="Categories ▼"
              ></Tab>
              <Tab
                className={classes.tab}
                component={Link}
                to="/virtual"
                label="Virtual School"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/language"
                label="EN"
              />
            </Tabs>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      <Button className={classes.button} variant="contained" color="secondary">
        Click me!
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onmouseleave: handleClose }}
        classes={{}}
        elevation={0}

      >
        <MenuItem onClick={handleClose}>Categories</MenuItem>
        <MenuItem onClick={handleClose}>Choregraphies</MenuItem>
        <MenuItem onClick={handleClose}>Classes</MenuItem>
        <MenuItem onClick={handleClose}>Shop</MenuItem>
      </Menu>
    </Fragment>
  );
}
