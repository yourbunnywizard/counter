import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
  decrement,
  increment,
  reset, saveCounterValue,
  selectCountValue,
} from "../store/counterSlice";
import {Box, Button, ButtonGroup, ThemeProvider} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f50b5',
      dark: '#0a1929',
      contrastText: '#fff',
    },
  },
});

const CounterDisplay = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  color: theme.palette.primary.main,
  fontWeight: "900",
  fontSize: "30vh",
}));

const CounterNavButton = styled(Button)(({ theme }) => ({
  ...theme.typography.button,
  color: theme.palette.primary.main,
  fontSize: "5vh",
  padding: "10px 25px"
}));

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCountValue);

  useEffect(() => {
    saveCounterValue(count);
  }, [count]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: 'primary.dark',
          display: "grid",
          placeItems: "center"
        }}
      >
        <CounterDisplay>{count}</CounterDisplay>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <CounterNavButton onClick={() => dispatch(decrement())}>-</CounterNavButton>
          <CounterNavButton onClick={() => dispatch(increment())}>+</CounterNavButton>
          <CounterNavButton onClick={() => dispatch(reset())}>reset</CounterNavButton>
        </ButtonGroup>
      </Box>
    </ThemeProvider>
  );
};

export default Counter;