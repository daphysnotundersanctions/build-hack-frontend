import React from 'react';
import {Slider, Box} from "@mui/joy";



function Valueslider({symbol, mark1, mark2, mark3, mark4, max}) {
    const marks = [
        {
            value: mark1,
            label: `${mark1} ${symbol}`,
        },
        {
            value: mark2,
            label: `${mark2} ${symbol}`,
        },
        {
            value: mark3,
            label: `${mark3} ${symbol}`,
        },
        {
            value: mark4,
            label: `${mark4} ${symbol}`,
        },
    ];

    function valueText(value) {
        return `${value}${symbol}`;
    }

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Always visible"
                defaultValue={10}
                getAriaValueText={valueText}
                step={5}
                max={max}
                marks={marks}
                valueLabelDisplay="on"
            />
        </Box>
    );
}

export default Valueslider;