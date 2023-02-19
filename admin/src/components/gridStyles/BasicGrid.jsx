import React from 'react'
import './Grid.css'
import { styled } from '@mui/material/styles';
import {
    Card,
    CardOverflow,
    Divider,
    Grid,
    Typography
} from "@mui/joy";
import {supabase} from "../../API/API.js";


const squereSet = ["100","200","300","100","200","300","100","200","300",];

const findStyle = (i) => {
  switch (i) {
    case 'freeNeedRepair':
      return "invert(100%) sepia(24%) saturate(6028%) hue-rotate(317deg) brightness(91%) contrast(86%)"
      break;
    case 'freeNoRepair':
      return "invert(90%) sepia(5%) saturate(3652%) hue-rotate(59deg) brightness(90%) contrast(100%)"
      break;
    case 'busyOnRepair':
      return "invert(58%) sepia(12%) saturate(2484%) hue-rotate(333deg) brightness(107%) contrast(80%)"
      break;
    default:
      return "invert(79%) sepia(13%) saturate(202%) hue-rotate(244deg) brightness(81%) contrast(90%)"
      break;
  }
}



const ShowContent = styled('div')(({squereInfo, stageName}) => ({
  '&:hover::before' : {
    content: `"${squereInfo}"`,
    position : 'absolute',
    zIndex: 999,
    overflow  : 'hidden',
  },
  '&:hover': {
    'img' : {
      filter: findStyle(stageName),
    }
  }
}));

export default function BasicGrid() {
  const [loading, setLoading] = React.useState(false);
  const [centers, setPlaces] = React.useState([]);
  const [place, setPlace] = React.useState(-1)

  const setCardValue = (i) => {
    switch(i) {
      case 0 :
        return <OverflowCard name={'120м2'} plaseState={'Свободна, требует ремонта'} company={'Crystall'} />
      break;
      case 1 :
        return <OverflowCard name={'50м2'} plaseState={'Занята'} company={'zOzon'} />
      break;
      case 2:
        return  <OverflowCard name={'170м2'} plaseState={'Свободна, ремонта не требует'} company={'Велики.клаб'} />
      break;
      case 3 :
        return <OverflowCard name={'200м2'} plaseState={'Занята, на ремонте'} company={'Яндекс.вода'} />
      break;
      case 4 :
        return <OverflowCard name={'150м2'} plaseState={'Занята, на ремонте'} company={'ООО "Как рыба в воде"'} />
      break;
      case 5 :
        return <OverflowCard name={'170м2'} plaseState={'Занята, на ремонте'} company={'ИП "Газ есть"'} />
      break;
      case 6 :
        return <OverflowCard name={'150м2'} plaseState={'Свободна, требует ремонта'} company={'MetroStroy'} />
      break;
      case 7 :
        return <OverflowCard name={'200м2'} plaseState={'Свободна, ремонта не требует'} company={'Disco elysium'} />
      break;
      case 8 :
        return <OverflowCard name={'70м2'} plaseState={'Занята'} />
      break;
      default : 
        return null
      }
  }

  function OverflowCard({ name, plaseState, company}) {
    return (
        <Card variant="outlined" sx={{ width: 420, mt:5 }}>
            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
               Площадь : {name}
            </Typography>
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                Состояние помещения: {plaseState}
            </Typography>
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                Арендует: {company}
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


  const drawImgs = centers.map((i,id) => 
      <ShowContent
        key={id}
        onClick={() => setPlace(id)}
        squereInfo={centers[id]?.square} 
        stageName={centers[id]?.status}
        sx={{maxWidth: 'fit-content', height: '150px'}}
      >
        <Grid>
          <img className='gridImg' width={'150'} src={`./blueprint/${centers[id]?.position}.png`} />
        </Grid>
      </ShowContent>
  )
  
  const getAllCenters = async () => {
    try {
        setLoading(true)

        const { data, error, status } = await supabase
            .from('place')
            .select('*')
        if (error && status !== 406) {
            throw error
        }

        if (data) {
            setPlaces(data.sort((age1, age2) => age1['id'] > age2['id'] ? 1 : -1));
            console.log(data.sort((age1, age2) => age1['id'] > age2['id'] ? 1 : -1));
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        setLoading(false);
    }
}

  React.useEffect(() => {
    getAllCenters();
  }, []);

  return (
    <>
    <Grid sx={{display : 'grid', gap: '10px', gridTemplateColumns : '1fr 1fr 1fr'}}>
          {drawImgs}
    </Grid>
    <div>
      {setCardValue(place)}
    </div>
    </>
  );
}