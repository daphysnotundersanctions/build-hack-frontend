import React from 'react';
import {Slider, Box} from "@mui/joy";



function Valueslider({symbol}) {
    const marks = [
        {
            value: 0,
            label: `0${symbol}`,
        },
        {
            value: 20,
            label: `20${symbol}`,
        },
        {
            value: 37,
            label: `37${symbol}`,
        },
        {
            value: 100,
            label: `100${symbol}`,
        },
    ];

    function valueText(value) {
        return `${value}${symbol}`;
    }

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Always visible"
                defaultValue={80}
                getAriaValueText={valueText}
                step={10}
                marks={marks}
                valueLabelDisplay="on"
            />
        </Box>
    );
}

export default Valueslider;