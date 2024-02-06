/* eslint-disable react-refresh/only-export-components */
import {FC, memo } from 'react';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Todo } from '../../../shared/types/types'

interface TodoCountProps {
    isActiveFilter: 'all' | 'completed' | 'active';
    filteredList: Todo[];
}

const TodoCount: FC<TodoCountProps> = function TodoCount({filteredList, isActiveFilter}) {

    const pluralText = filteredList.length === 1 ? '' : 's';
    return (
        <Toolbar disableGutters>
            {filteredList.length > 0 && (
                <Typography>
                    {filteredList.length >= 1 && isActiveFilter === 'all' ?
                    //display the number of items left, w/ pluralization if needed 
                    `${filteredList.length} item${pluralText} left`:
                    //display the number of items left, type of filtered list & pluralization if needed
                    `${filteredList.length} ${isActiveFilter} todo${pluralText}`
                    }
                </Typography>
            )}
        </Toolbar>
    )
}
//skips rerendering when props and state are the same
export default memo(TodoCount);