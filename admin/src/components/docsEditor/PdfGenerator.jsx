import React from 'react';
import ReactToPdf from "react-to-pdf";
import './blank.css'
import {Box, Button, Container, IconButton, Stack, Typography} from "@mui/joy";
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function PdfGenerator() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = () => {
        setExpanded(!expanded);
    };

    const ref = React.createRef();

    return (
        <Container>

            <Box sx={{ display:'flex', flexDirection:'row', justifyContent:'space-between', boxShadow:'10px 5px 5px secondary'}}>

                <Typography level={'h4'} sx={{mb:2}}> Договор аренды </Typography>

                <Stack direction={'row'} gap={2}>
                    <ReactToPdf targetRef={ref} filename="rent-dogovor.pdf">
                        {({toPdf}) => (
                            <IconButton onClick={toPdf}> <PictureAsPdfIcon/> </IconButton>
                        )}
                    </ReactToPdf>
                    <IconButton onClick={handleChange}> { expanded ? <OpenInFullIcon/> : <CloseFullscreenIcon/>  } </IconButton>
                </Stack>

            </Box>


            {
                expanded ?
                    <Container ref={ref} sx={{mt:2, backgroundColor:'', border : '1px solid', padding : '30px', minWidth: '100vh'}}>
                    <Container sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <form>
                            <h1 className='pdfTitle'>АКТ №
                                <input type="text" defaultValue="1" className='pdfInputTitle' />
                            </h1>
                            <div>
                                Общество с ограниченной ответственностью
                                «<input type="text" defaultValue="Василий Воронин" className='pdfInput' />»
                                в лице
                                <input type="text" defaultValue="Василия Воронинова" className='pdfInput'  />,
                                <input type="text" className='pdfInput'  />
                                далее <input type="text" className='pdfInput' defaultValue="Василия"  />
                            </div>
                            <div className='block'>
                                Стоимость услуг, включая дополнительное оборудование, приобретенное
                                <br />
                                <input type="text" className='pdfInput' />
                                <br />
                                составляет
                                <input type="text" className='pdfInput' defaultValue="6 000" />
                                (<input type="text" className='pdfInput' defaultValue="Шесть тысяч" />) руб.
                                <br />
                                НДС <input type="text" className='pdfInput' defaultValue="2 000" /> руб.
                            </div>
                            <div className='block'>
                                Исполнитель: <input type="text" defaultValue="Василий Воронин" className='pdfInput' />
                                <br />
                                <br />
                                Заказчик: <input type="text" defaultValue="Василий Воронин" className='pdfInput' />
                            </div>
                        </form>
                    </Container>
                    </Container> : null
            }

        </Container>
    );
}

export default PdfGenerator;