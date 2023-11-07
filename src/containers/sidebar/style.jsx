import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  active_link: {
    color: "#DFDFDF",
    fontFamily: "work sans",
    "&.active": {
      backgroundColor: "#fff",
    },
  },
}));
