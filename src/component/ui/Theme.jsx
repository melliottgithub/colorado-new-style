import { createMuiTheme } from "@material-ui/core/styles";

const arcBlack = "#1C1C1C";
const arcRed = "#D92332";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlack}`,
      orange: `${arcRed}`,
    },
    primary: {
      main: `${arcBlack}`,
    },
    secondary: {
      main: `${arcRed}`,
    },
  },
  typography: {
    tab: {
      fontWeight: 300,
      fontSize: ".9rem",
    },
  },
});
