import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import fonts from "./fonts";
import commonSettings, { handleBackdropFilter } from "./global.js";

// TODO: Break repeated use color values out into list of consts declared here
// then set the values in darkTheme using the global color variables

const darkTheme = {
  color: "#E8E8E8",
  gold: "#B53DED",
  gray: "#A3A3A3",
  borderColor: "2px solid #F2F1F1",
  textHighlightColor: "#B53DED",
  backgroundColor: "#1A1A1C",
  background: "#1A1A1C",
  paperBg: "rgba(54, 56, 64, 0.4)",
  modalBg: "#24242699",
  popoverBg: "rgba(54, 56, 64, 0.99)",
  menuBg: handleBackdropFilter("rgba(54, 56, 64, 0.5)"),
  backdropBg: "rgba(54, 56, 64, 0.5)",
  largeTextColor: "#B53DED",
  activeLinkColor: "#F5DDB4",
  activeLinkSvgColor:
    "brightness(0) saturate(100%) invert(84%) sepia(49%) saturate(307%) hue-rotate(326deg) brightness(106%) contrast(92%)",
  primaryButtonColor: "#F2F1F1",
  primaryButtonBG: "#B53DED",
  primaryButtonHoverBG: "#e447ff",
  secondaryButtonHoverBG: "rgba(54, 56, 64, 1)",
  outlinedPrimaryButtonHoverBG: "#e447ff",
  outlinedPrimaryButtonHoverColor: "#333333",
  outlinedSecondaryButtonHoverBG: "transparent",
  outlinedSecondaryButtonHoverColor: "#e447ff", //gold
  containedSecondaryButtonHoverBG: "#e447ff",
  graphStrokeColor: "rgba(255, 255, 255, .1)",
};

export const dark = responsiveFontSizes(
  createTheme(
    {
      primary: {
        main: darkTheme.color,
      },
      palette: {
        type: "dark",
        background: {
          default: darkTheme.backgroundColor,
          paper: darkTheme.backgroundColor,
        },
        contrastText: darkTheme.color,
        primary: {
          main: darkTheme.color,
        },
        neutral: {
          main: darkTheme.color,
          secondary: darkTheme.gray,
        },
        text: {
          primary: darkTheme.color,
          secondary: darkTheme.gray,
        },
        graphStrokeColor: darkTheme.graphStrokeColor,
        highlight: darkTheme.textHighlightColor,
      },
      typography: {
        fontFamily: "Proxima Nova",
      },
      props: {
        MuiSvgIcon: {
          htmlColor: "#fff",
        },
      },
      overrides: {
        MuiCssBaseline: {
          "@global": {
            "@font-face": fonts,
            body: {
              background: darkTheme.background,
            },
            ":root": {
              "--color-gold": darkTheme.gold,
            },
          },
        },

        MuiDrawer: {
          paper: {
            backgroundColor: darkTheme.background,
            zIndex: 7,
          },
          paperAnchorLeft: {
            backgroundColor: "#1A1A1C",
          },
        },
        MuiPaper: {
          root: {
            backgroundColor: darkTheme.paperBg,
            borderRadius: 0,
            color: "#F2F1F1",
            "&.ohm-card": {
              backgroundColor: "rgb(0 1 1 / 70%)",
              border: darkTheme.borderColor,
              borderRadius: "20px",
            },
            "&.ohm-modal": {
              backgroundColor: darkTheme.modalBg,
            },
            "&.ohm-menu": {
              backgroundColor: darkTheme.menuBg,
              backdropFilter: "blur(33px)",
            },
            "&.ohm-popover": {
              backgroundColor: darkTheme.popoverBg,
              color: darkTheme.color,
              backdropFilter: "blur(15px)",
            },
          },
        },
        MuiBackdrop: {
          root: {
            backgroundColor: darkTheme.backdropBg,
          },
        },
        MuiLink: {
          root: {
            color: darkTheme.color,
            "&:hover": {
              color: darkTheme.textHighlightColor,
              textDecoration: "none",
              "&.active": {
                color: darkTheme.color,
              },
            },
            "&.active": {
              color: darkTheme.color,
              textDecoration: "underline",
            },
          },
        },
        MuiTableCell: {
          root: {
            // color: darkTheme.color,
          },
          body: {
            color: "#fff",
          },
        },
        MuiInputBase: {
          root: {
            // color: darkTheme.gold,
            color: "#fff",
          },
          input: {
            borderColor: darkTheme.gold,
          },
        },
        MuiOutlinedInput: {
          notchedOutline: {
            borderColor: `${darkTheme.gold} !important`,
            borderWidth: "2px",
            borderRadius: "8px",
          },
        },
        MuiTab: {
          textColorPrimary: {
            color: darkTheme.gray,
            "&$selected": {
              color: darkTheme.gold,
            },
          },
        },
        PrivateTabIndicator: {
          colorPrimary: {
            backgroundColor: darkTheme.gold,
          },
        },
        MuiToggleButton: {
          root: {
            backgroundColor: darkTheme.paperBg,
            "&:hover": {
              color: darkTheme.color,
              backgroundColor: `${darkTheme.containedSecondaryButtonHoverBG} !important`,
            },
            selected: {
              backgroundColor: darkTheme.containedSecondaryButtonHoverBG,
            },
            "@media (hover:none)": {
              "&:hover": {
                color: darkTheme.color,
                backgroundColor: darkTheme.paperBg,
              },
              "&:focus": {
                color: darkTheme.color,
                backgroundColor: darkTheme.paperBg,
                borderColor: "transparent",
                outline: "#00000000",
              },
            },
          },
        },
        MuiButton: {
          containedPrimary: {
            color: "#F2F1F1",
            backgroundColor: darkTheme.gold,
            "&:hover": {
              backgroundColor: darkTheme.primaryButtonHoverBG,
              color: darkTheme.primaryButtonHoverColor,
            },
            "&:active": {
              backgroundColor: darkTheme.primaryButtonHoverBG,
              color: darkTheme.primaryButtonHoverColor,
            },
            "@media (hover:none)": {
              color: darkTheme.primaryButtonColor,
              backgroundColor: darkTheme.gold,
              "&:hover": {
                backgroundColor: darkTheme.primaryButtonHoverBG,
              },
            },
          },
          containedSecondary: {
            backgroundColor: darkTheme.gold,
            color: "#F2F1F1",
            "&:hover": {
              backgroundColor: `${darkTheme.containedSecondaryButtonHoverBG} !important`,
            },
            "&:active": {
              backgroundColor: darkTheme.containedSecondaryButtonHoverBG,
            },
            "&:focus": {
              backgroundColor: darkTheme.gold,
            },
            "@media (hover:none)": {
              color: "#F2F1F1",
              backgroundColor: darkTheme.gold,
              "&:hover": {
                backgroundColor: `${darkTheme.containedSecondaryButtonHoverBG} !important`,
              },
            },
          },
          outlinedPrimary: {
            color: "#F2F1F1",
            borderColor: darkTheme.gold,
            borderRadius: "999px",
            "&:hover": {
              backgroundColor: darkTheme.gold,
            },
            "@media (hover:none)": {
              borderColor: darkTheme.gold,
              "&:hover": {
                backgroundColor: `${darkTheme.primaryButtonHoverBG} !important`,
                textDecoration: "none !important",
              },
            },
          },
          outlinedSecondary: {
            color: "#fff",
            borderColor: darkTheme.gold,
            "&:hover": {
              color: darkTheme.outlinedSecondaryButtonHoverColor,
              backgroundColor: darkTheme.outlinedSecondaryButtonHoverBG,
              borderColor: darkTheme.gold,
            },
          },
          textPrimary: {
            color: "#A3A3A3",
            "&:hover": {
              color: darkTheme.gold,
              backgroundColor: "#00000000",
            },
            "&:active": {
              color: darkTheme.gold,
              borderBottom: "#e447ff",
            },
          },
          textSecondary: {
            color: darkTheme.color,
            "&:hover": {
              color: darkTheme.gold,
            },
          },
        },
        MuiSvgIcon: {
          colorSecondary: {
            color: darkTheme.gray,
          },
        },
        MuiChip: {
          sizeSmall: {
            fontSize: "10px",
            height: "22px",
            marginLeft: "4px",
          },
        },
      },
    },
    commonSettings,
  ),
);
