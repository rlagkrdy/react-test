import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import { withStyles, css, withStylesPropTypes } from "react-with-styles";
// @ts-ignore
import * as aphroditeInterface from "react-with-styles-interface-aphrodite";
import Theme from "./theme/Theme";

ThemedStyleSheet.registerTheme(Theme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
export default withStyles;
