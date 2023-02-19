import React from 'react';
import {Box, Button, Container, Sheet, Stack, Typography} from "@mui/joy";
import Valueslider from "../basic/Valueslider.jsx";
import CoffeeSwitch from "../basic/CoffeeSwitch.jsx";
import SquareSwitch from "../basic/SquareSwitch.jsx";
import PdfGenerator from "../docsEditor/PdfGenerator.jsx";
import GymSwitch from "../basic/GymSwitch.jsx";

export default function FilterWidget() {
    const widgetCode = `<html><iframe src="http://localhost:3000/parent-component/clock-component"><iframe></html>`;

    return (
        <Container>
            <Typography sx={{mb:2}}>Площадь </Typography>
            <Valueslider symbol={`м²`} mark1={40} mark2={60} mark3={80} mark4={10} max={110}/>

            <Typography sx={{mt:2}}>Срок </Typography>
            <Valueslider symbol={`мес`} mark1={6} mark2={12} mark3={18} mark4={36} max={36}/>

            <Box sx={{mt:1}} >
                <Typography>Доп услуги: </Typography>
                <Stack direction={'row'} gap={2} sx={{mb:2}}> <CoffeeSwitch/> <SquareSwitch/> <GymSwitch/> </Stack>
                <Button fullWidth>Заявка</Button>
            </Box>


            <Box sx={{mt:2}}>
                <Typography>Код для встраивания: </Typography>
                <Sheet variant="outlined" color="neutral" sx={{ p: 4}}>
                    <code>{widgetCode}</code>
                </Sheet>
            </Box>

        </Container>
    );
}