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
            startDecorator={
                <LocalDiningIcon
                    sx={{ color: on ? 'text.tertiary' : 'neutral.500' }}
                />
            }
            endDecorator={
                <LocalDiningIcon sx={{ color: on ? 'primary.200' : 'text.tertiary' }} />
            }
            checked={on}
            onChange={(event) => setOn(event.target.checked)}
        />
    );
}

export default SquareSwitch;