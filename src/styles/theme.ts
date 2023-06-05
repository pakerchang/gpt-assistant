import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primaryBg: "#112D4E",
    promptBtn: "#3F72AF",
    quickRespBtn: "#DBE2Ef",
    settingBtn: "#F9F7F7",
  },
});

export default theme;
