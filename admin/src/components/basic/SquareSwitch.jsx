import React from 'react';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import {Switch} from "@mui/joy";
function SquareSwitch() {
    const [on, setOn] = React.useState(false);

    return (
        <Switch
            color={on ? 'primary' : 'neutral'}
            slotProps={{ input: { 'aria-label': 'dark mode' } }}
            sx={{mt:1}}

            endDecorator={
                <LocalDiningIcon sx={{ color: on ? 'success.400' : 'text.tertiary' }} />
            }
            checked={on}
            onChange={(event) => setOn(event.target.checked)}
        />
    );
}

export default SquareSwitch;