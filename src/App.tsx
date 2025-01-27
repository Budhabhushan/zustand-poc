import { Box, Container, Typography } from "@mui/material";
import AddHabitForm from "./components/add-habit";
import HabitList from "./components/habit-list";
import useHabitStore from "./store/store";
import { useEffect } from "react";

const App = () => {
  const { fetchHabits } = useHabitStore();

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Habit Tracker
        </Typography>
        {/* From */}
        <AddHabitForm />
        {/* list */}
        <HabitList />
        {/* stats */}
      </Box>
    </Container>
  );
};

export default App;
