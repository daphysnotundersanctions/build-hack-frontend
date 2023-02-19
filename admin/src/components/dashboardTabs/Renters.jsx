import React from 'react';
import {supabase} from "../../API/API.js";
import {
    AspectRatio,
    Button,
    Card,
    CardOverflow,
    CircularProgress,
    Divider,
    Grid,
    Input, Stack, Switch,
    Typography
} from "@mui/joy";
import BaseModal from "../basic/BaseModal.jsx";
import Add from '@mui/icons-material/Add';
import AddRenterForm from "../AddRenterForm.jsx";
import SearchIcon from '@mui/icons-material/Search';
import TableSortAndSelection from "./RentersTable.jsx";
import TableRowsIcon from '@mui/icons-material/TableRows';


function Renters() {

    const [loading,setLoading] = React.useState(false);
    const [renters, setRenters] = React.useState([]);
    const [places, setPlaces] = React.useState([]);

    const [openModalAddRenter, setModalAddRenter] = React.useState(false);
    const [openModalTable, setModalTable] = React.useState(false);

    function OverflowCard({photo, name, floor, place}) {
        return (
            <Card variant="outlined" sx={{ width: 320, mb:2 }}>
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <img
                            src={photo}
                            srcSet={`${photo} 2x`}
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                    {name}
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                    Офис: {place}
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
    const getAllRenters = async () => {
        try {
            setLoading(true)

            const { data, error, status } = await supabase
                .from('renter')
                .select('*')
            if (error && status !== 406) {
                throw error
            }
            if (data) {
                setRenters(data);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }
    const getAllPlaces = async () => {
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
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        getAllRenters();
        getAllPlaces();
    }, []);


    return (
        <>

            <BaseModal open={openModalAddRenter} onClose={()=>setModalAddRenter(!openModalAddRenter)}>
                <AddRenterForm onClose={()=>setModalAddRenter(false)}/>
                <Button variant={'outlined'} fullWidth onClick={()=>setModalAddRenter(false)}>Отмена</Button>
            </BaseModal>

            <BaseModal open={openModalTable} onClose={()=>setModalTable(true)}>
                <TableSortAndSelection renters={renters} places={places}/>
                <Button startDecorator={<Add />} fullWidth onClick={()=>setModalAddRenter(!openModalAddRenter)} sx={{mt:1}}> Добавить арендатора </Button>
                <Button variant={'outlined'} fullWidth onClick={()=>setModalTable(false)} sx={{mt:1}}>Закрыть</Button>
            </BaseModal>

            <Button startDecorator={<Add />} onClick={()=>setModalAddRenter(!openModalAddRenter)} > Добавить арендатора </Button>
            <Button startDecorator={<TableRowsIcon />} onClick={()=>setModalTable(!openModalTable)} sx={{m:1}}> Таблица </Button>


            {
                loading ? <CircularProgress sx={{display:'flex', mt:'50%', mr:'50%', ml:'35%'}}/> :
                <Grid container spacing={2} sx={{flexGrow: 1, mt: 1}}>
                    <Grid item xs={4}>
                    {
                        renters?.map((renter, i) => {
                            return (
                                <OverflowCard key={i} name={renter.name} place={`${places[renter.place]?.name}`} photo={renter.photo}/>
                            )
                        })
                    }
                    </Grid>
                </Grid>
            }

        </>
    );
}

export default Renters;