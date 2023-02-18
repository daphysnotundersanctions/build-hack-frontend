import React from 'react';
import CoffeeIcon from '@mui/icons-material/Coffee';
import {Switch} from "@mui/joy";
function CoffeeSwitch() {
    const [on, setOn] = React.useState(false);

    return (
        <Switch
            color={on ? 'primary' : 'neutral'}
            slotProps={{ input: { 'aria-label': 'dark mode' } }}
            sx={{mt:1}}
            startDecorator={
                <CoffeeIcon
                    sx={{ color: on ? 'text.tertiary' : 'neutral.500' }}
                />
            }
            endDecorator={
                <CoffeeIcon sx={{ color: on ? 'primary.200' : 'text.tertiary' }} />
            }
            checked={on}
            onChange={(event) => setOn(event.target.checked)}
        />
    );
}

export default CoffeeSwitch;