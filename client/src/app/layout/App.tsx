import { List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

function App() {
  const [activitites, setActivities] = useState<Activity[]>([]);
  
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data));

      return () => {}
  }, []);

  return (
    <>
      {/* <Typography variant='h3'>Reactivities</Typography> */}
      <NavBar />
      <List>
        {activitites.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>
              {activity.title}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default App
