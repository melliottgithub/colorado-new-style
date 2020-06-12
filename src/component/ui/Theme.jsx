import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = '#0b72b9';
const arcOrange = '#ffba60';

export default createMuiTheme({
    palette: {
        common: {
            arcBlue: `${arcBlue}`,
            arcOrange: `${arcOrange}`
        }
    }
});
