import * as React from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const style = {
  width: "50%",
  maxWidth: 360,
  bgcolor: "beige",
};
export default function HabitBox() {
  const data = ["Hallo", "ich", "bin", "deine", "Gewohnheiten"];
  return (
    <div>
      <List sx={style} component="nav" aria-label="mailbox folders">
        {data.map((x) => {
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
