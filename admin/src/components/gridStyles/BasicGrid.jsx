import React from 'react'
import './Grid.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/joy/Grid';
import {supabase} from "../../API/API.js";


const squereSet = ["100","200","300","100","200","300","100","200","300",];

const colorSet = {
    freeNeedRepair : {
      color : 'invert(100%) sepia(24%) saturate(6028%) hue-rotate(317deg) brightness(91%) contrast(86%)'
    },
    freeNoRepair : {
      color :  'invert(90%) sepia(5%) saturate(3652%) hue-rotate(59deg) brightness(90%) contrast(100%)'
    },
    busyOnRepair :{
      color : 'invert(58%) sepia(12%) saturate(2484%) hue-rotate(333deg) brightness(107%) contrast(80%)'
    },
    busyNoRepair : {
      color : 'invert(79%) sepia(13%) saturate(202%) hue-rotate(244deg) brightness(81%) contrast(90%)'
    },
}



const ShowContent = styled('div')(({size, stageName}) => ({
  '&:hover::before' : {
    content: `"${size}"`,
    position : 'absolute',
    zIndex: 999,
    overflow  : 'hidden',
    // background: 'rgba(39,62,84,0.82)',
  },
  '&:hover': {
    'img' : {
      // filter: colorSet.stageName.color,
    }
  }
}));

const imageSet = ['0','1','2_door1','0','1','2_door1','0','1','2_door1',]

export default function BasicGrid() {
  const [loading, setLoading] = React.useState(false);
  const [centers, setPlaces] = React.useState([]);


  const drawImgs = imageSet.map((i,id) => 
      <ShowContent key={id} size={squereSet[id]} stageName={centers[id]?.status} sx={{maxWidth: 'fit-content', height: '150px'}}>
        <Grid>
          <img className='gridImg' width={'150'} src={`./blueprint/${i}.png`} />
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
    <div>
    <Grid sx={{display : 'grid', gridTemplateColumns : '1fr 1fr 1fr'}}>
          {drawImgs}
    </Grid>
    </div>
  );
}