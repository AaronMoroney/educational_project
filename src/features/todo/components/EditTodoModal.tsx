import {FC, useRef } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { onKeyPress } from '../../../shared/helpers/UXhelpers';
import { Todo } from '../../../shared/types/types';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  editing: Todo | null;
  onEdit: (todo: Todo, newLabel:string ) => void;
}

const EditTodoModal: FC<EditModalProps> =({open, onClose, editing, onEdit}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEditSubmit = (): void => {
      //account for null values by checking if currentEditingTodo exists
      if (inputRef.current && editing) {
        onEdit(editing, inputRef.current.value);
        onClose();
      }
    };

    return (
      <Modal
        open={open}
        onClose={onClose}
      >
        <Stack direction="row" spacing={2}>
          <Box sx={style}>
            <TextField
              defaultValue={editing?.label}
              inputRef={inputRef}
              type="text"
              fullWidth
              label='edit'
              onKeyPress={(event) => onKeyPress(event as React.KeyboardEvent<HTMLInputElement>, handleEditSubmit)}
            />
            <Button
              type='submit'
              disableElevation
              variant="contained"
              onClick={() => handleEditSubmit()}
            >
              Finish Editing
            </Button>
          </Box>
        </Stack>
      </Modal>
  );
}

export default EditTodoModal;