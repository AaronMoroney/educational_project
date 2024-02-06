import {FC, useRef} from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

import { onKeyPress } from '../../../shared/helpers/UXhelpers';

interface TodoFormProps {
    onCreate: (todoLabel: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({onCreate}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (): void => {
        if (inputRef.current && inputRef.current.value !== '' ) {
            const todoLabel = inputRef.current.value;
            onCreate(todoLabel);
            inputRef.current.value = ''; 
        }
    };
        
    return (
        <div>
            <Stack direction="row" spacing={2}>
            <TextField
                inputRef={inputRef}
                type="text"
                fullWidth
                placeholder="What needs to be done"
                onKeyPress={(event) => onKeyPress(event as React.KeyboardEvent<HTMLInputElement>, handleSubmit)}
            />
                <Button
                    type='submit'
                    disableElevation
                    variant="contained"
                    startIcon={<AddIcon />} 
                    onClick={() => handleSubmit()}
                >
                    Add
                </Button> 
            </Stack>
        </div>  
    ) 
}

export default TodoForm;