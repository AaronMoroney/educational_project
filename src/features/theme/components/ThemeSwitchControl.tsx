import {FC, useContext} from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitchControl: FC = function ThemeSwitchControl() {
    const {themeMode, setThemeMode} = useContext(ThemeContext);
    const label = themeMode === "dark" ? " Toggle Light Mode" : "Toggle Dark Mode";

    return (
        <div>
            <FormControl component="fieldset" variant="standard">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch 
                                onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')} 
                            />
                        }
                        label={label}
                        sx={{ marginRight: 0 }}
                    />
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default ThemeSwitchControl;