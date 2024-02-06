import { FC } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import Stack from "@mui/material/Stack";

interface TodoFilterProps {
    handleFilterChange: (newFilter: 'all' | 'completed' | 'active') => void;
    currentFilter: 'all' | 'completed' | 'active';
}

type FilterValue = 'all' | 'completed' | 'active';

const TodoFilter: FC<TodoFilterProps> = ({ handleFilterChange, currentFilter }) => {

    const filters: {value: FilterValue, label: string; }[] = [ //more maintainable, can easily map a new button
        { value: 'all', label: 'All' },
        { value: 'completed', label: 'Completed' },
        { value: 'active', label: 'Active' },
    ];

    return (
        <Stack direction="row" justifyContent="space-between" spacing={3}>
            {filters.map(filter => (
                <ToggleButton
                    key={filter.value}
                    value={filter.value}
                    onClick={() => handleFilterChange(filter.value)}
                    selected={currentFilter === filter.value}
                    sx={{ width: '33%' }}
                >
                    {filter.label}
                </ToggleButton>
            ))}
        </Stack>
    );
}

export default TodoFilter;