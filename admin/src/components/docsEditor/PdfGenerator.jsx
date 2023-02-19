import React from 'react';
import ReactToPdf from "react-to-pdf";
import './blank.css'
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

            <Container ref={ref} sx={{backgroundColor:'', border : '1px solid', padding : '30px', minWidth: '100vh'}}>
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

            </Container>

        </Container>
    );
}

export default PdfGenerator;