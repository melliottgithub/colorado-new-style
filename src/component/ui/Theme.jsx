import { createMuiTheme } from "@material-ui/core/styles";

const arcBlack = "#1C1C1C";
const arcRed = "#D90B0B";

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
    h3: {
      fontWeight: "100",
    },
  },
});
