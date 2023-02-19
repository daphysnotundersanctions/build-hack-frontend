import React from 'react';
import {Box, Container, Typography} from "@mui/joy";
import Valueslider from "../basic/Valueslider.jsx";
import CoffeeSwitch from "../basic/CoffeeSwitch.jsx";
import SquareSwitch from "../basic/SquareSwitch.jsx";
import PdfGenerator from "../docsEditor/PdfGenerator.jsx";

export default function FilterWidget() {
    return (
        <Container>
            <Typography sx={{mb:2}}>  Площадь </Typography>
            <Valueslider symbol={`м²`}/>

            <Typography sx={{mt:2}}>  Площадь </Typography>
            <Valueslider symbol={`м²`}/>

            <Box sx={{mt:1}}>
                <Typography> Доп услуги </Typography>
                <CoffeeSwitch/>
            </Box>
            <SquareSwitch/>
            <PdfGenerator/>
        </Container>
    );
}