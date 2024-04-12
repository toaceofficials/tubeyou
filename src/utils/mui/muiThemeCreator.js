import { createTheme } from "@mui/material/styles";

export const muiCustomTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: ".5px",
            borderRadius: "0px",
            borderColor: "black",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
            outline: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
            outline: "none",
          },
          input: {
            outline: "none",
          },
        },
      },
    },
  },
});
