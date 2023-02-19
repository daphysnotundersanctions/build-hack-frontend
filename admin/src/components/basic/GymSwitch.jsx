import React from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {Switch} from "@mui/joy";
function GymSwitch() {
    const [on, setOn] = React.useState(false);

    return (
        <Switch
            color={on ? 'primary' : 'neutral'}
            slotProps={{ input: { 'aria-label': 'dark mode' } }}
            sx={{mt:1}}

            endDecorator={
                <FitnessCenterIcon sx={{ color: on ? 'success.400' : 'text.tertiary' }} />
            }
            checked={on}
            onChange={(event) => setOn(event.target.checked)}
        />
    );
}

export default GymSwitch;