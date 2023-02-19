import React from 'react';
import ReactToPdf from "react-to-pdf";
import {Button, Container, Typography} from "@mui/joy";
function PdfGenerator() {
    const [city, setCity] = React.useState('Краснодар');
    const ref = React.createRef();

    return (
        <Container>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({toPdf}) => (
                    <Button onClick={toPdf}>Сохранить PDF</Button>
                )}
            </ReactToPdf>

            <Container ref={ref} sx={{backgroundColor:'#DDF1FF'}}>
                <Container sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <Typography sx={{fontSize:24}}>{city}</Typography>
                    <Typography sx={{fontSize:24}}>{city}</Typography>
                    <Typography sx={{fontSize:24}}>{city}</Typography>
                    <Typography sx={{fontSize:24}}>{city}</Typography>
                </Container>

            </Container>

        </Container>
    );
}

export default PdfGenerator;