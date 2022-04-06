import * as React from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const style = {
  width: "80%",
  bgradius: "100px",
  bgcolor: "beige",
};
export default function HabitBox({ Daten }) {
  const data = ["Hallo", "ich", "bin", "deine", "Gewohnheiten"];
  return (
    <div style={{ flex: 1, display: "flex" }}>
      <List sx={style} component="nav" aria-label="mailbox folders">
        {Daten.map((x) => {
          return (
            <div>
              <ListItem button>
                <ListItemText primary={x} />
                <Checkbox {...label} color="success" />
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </List>
    </div>
  );
}
