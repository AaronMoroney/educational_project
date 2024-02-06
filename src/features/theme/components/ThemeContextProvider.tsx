import { useMemo, PropsWithChildren, FC } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";
import { toggleTheme } from '../ThemeSlice';
import type { RootState } from '../../../app/store';
import { useSelector, useDispatch } from 'react-redux';

const ThemeContextProvider: FC<PropsWithChildren> = (props) => {
  const theme = useSelector((state: RootState) => state.themeState.themeMode);
  const dispatch = useDispatch();

  //define the theme
  const MuiTheme = useMemo(() => createTheme({
    palette: {
      mode: theme,
    },
  }), [theme]);

  const themeContextValue = useMemo((): ThemeContextType => ({ 
    themeMode: theme,
    setThemeMode: () => dispatch(toggleTheme()),
  }), [theme, dispatch]);

  return (
    <ThemeContext.Provider value={themeContextValue}> 
      <ThemeProvider theme={MuiTheme}> {/* using MUI - MUI theme had to be memo'd to prevent rerenders during delete & toggle*/}
        <CssBaseline >
            {props.children}
        </CssBaseline>
      </ThemeProvider>  
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider