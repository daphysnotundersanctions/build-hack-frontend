import React from 'react'
import {
    Card,
    CardOverflow,
    Divider,
    Grid,
    Typography
} from "@mui/joy";
import '../../components/sale.css'

function Sales() {
  
    const saleSet = [
        {   
            saleTitle :  'Скидка 20% на йогу для резидентов нашего',
            saleGive : 'Белые Облака',
            saleOffice : '9A'
        },
        {   
            saleTitle :  'Скидка на еду 15%',
            saleGive : 'Яндекс.вода',
            saleOffice : '6А'
        },
        {   
            saleTitle :  'Скидка на воду 50%',
            saleGive : 'Яндекс.еда',
            saleOffice : '2A'
        },
        {   
            saleTitle :  'Скидка на цветы 5% перед 14 февраля',
            saleGive : 'Цвет.ру',
            saleOffice : '20А'
        },
        {   
            saleTitle :  'Купон на покупку линз (ЛИНЗА2023)',
            saleGive : 'Сглазамаи.ру',
            saleOffice : '13А'
        },
        {   
            saleTitle :  'Промокод на доставку в офис (ДОСТАВАН)',
            saleGive : 'Dostavan.tut',
            saleOffice : '30A'
        },
    ]

    function OverflowCard({ cardsaleTitle, cardsaleGive, cardsaleOffice}) {
        return (
            <Card variant="outlined" sx={{ width: 420, mt:5 }}>
                <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                   {cardsaleTitle}
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                    Предоставляет: {cardsaleGive}
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                    Офис: {cardsaleOffice}
                </Typography>
                <Divider />
                <CardOverflow
                    variant="soft"
                    sx={{
                        display: 'flex',
                        gap: 1.5,
                        py: 1.5,
                        px: 'var(--Card-padding)',
                        bgcolor: 'background.level1',
                    }}
                >
                    <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
    
                    </Typography>
                    <Divider orientation="vertical" />
                    <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
    
                    </Typography>
                </CardOverflow>
            </Card>
        );
    }

    const drawBlocks = saleSet.map(
        (i,id) => <OverflowCard 
        cardsaleTitle={i.saleTitle}
        cardsaleGive={i.saleGive}  
        cardsaleOffice={i.saleOffice}  
    />)

   return (
    <div className='salesGrid'>
       {drawBlocks}
    </div>
  )
}

export default Sales