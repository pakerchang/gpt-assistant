import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primaryBg: "#112D4E",
    promptBtn: "#3F72AF",
    quickRespBtn: "#DBE2Ef",
    settingBtn: "#F9F7F7",
  },
  components: {
    Button: {
      sizes: {
        customBtn: {
          width: "180px",
          height: "35px",
        },
      },
      variants: {
        promptButton: (props: any) => ({
          bg: props.theme.colors.promptBtn,
          color: "white",
        }),
        quickRespButton: (props: any) => ({
          bg: props.theme.colors.quickRespBtn,
        }),
      },
    },
    Drawer: {
      baseStyle: {
        dialog: {
          bg: "transparent",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
