import React from 'react'
import './Grid.css'
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/material/styles';
import Grid from '@mui/joy/Grid';

const squereSet = ["100","200","300"];

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.vars.palette.text.tertiary,
}));


const ShowContent = styled('div')(({size}) => ({
  '&:hover::before' : {
    content: `"${size}"`,
    position : 'absolute',
    transition: 'transform 0.4s',
    zIndex: 999,
  }
}));

const imageSet = ['0','1', '2_door1']
const drawImgs = imageSet.map((i,id) => 
    <ShowContent size={squereSet[id]}>
      <Grid>
        <img className='gridImg' width={'150px'} src={`../../../public/blueprint/${i}.png`} />
      </Grid>
    </ShowContent>
)
export default function BasicGrid() {
  return (
    // sx={{maxWidth: 'fit-content'}}
<Grid >
        {drawImgs}
    </Grid>
  );
}