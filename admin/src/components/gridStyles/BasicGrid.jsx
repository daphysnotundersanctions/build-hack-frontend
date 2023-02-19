import React from 'react'
import './Grid.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/joy/Grid';
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

const imageSet = ['0','1','2_door1','0','1','2_door1','0','1','2_door1',]

export default function BasicGrid() {
  const [loading, setLoading] = React.useState(false);
  const [centers, setPlaces] = React.useState([]);


  const drawImgs = centers.map((i,id) => 
      <ShowContent 
        key={id} 
        squereInfo={centers[id]?.square} 
        stageName={centers[id]?.status}
        sx={{maxWidth: 'fit-content', height: '150px'}}
      >
        <Grid>
          <img className='gridImg' width={'150'} src={`./blueprint/${id}.png`} />
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
            setPlaces(data);
            console.log(data);
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
    <Grid sx={{display : 'grid', gridTemplateColumns : '1fr 1fr 1fr'}}>
          {drawImgs}
    </Grid>
  );
}