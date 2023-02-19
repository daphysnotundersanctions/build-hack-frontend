import React from 'react';
import {supabase} from "../../API/API.js";
import {
    AspectRatio,
    Button,
    Card,
    CardOverflow, Checkbox,
    CircularProgress,
    Divider,
    Grid,
    Input, Stack, Switch,
    Typography
} from "@mui/joy";
import Autocomplete from '@mui/joy/Autocomplete';
import BaseModal from "../basic/BaseModal.jsx";
import Add from '@mui/icons-material/Add';


function Renters() {

    const [loading,setLoading] = React.useState(false);
    const [renters, setRenters] = React.useState([]);
    const [places, setPlaces] = React.useState([]);
    const [openModalAddRenter, setModalAddRenter] = React.useState(false);

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
    const addNewRenter = async (name,status=true,tariff,end_date,repair_from_bc=true) => {
        try {
            setLoading(true)

            const { data, error } = await supabase
                .from('renter')
                .insert([
                    {   some_column: 'someValue',
                        other_column: 'otherValue' },
                ])
            if (error !== 406) {
                throw error
            }
            if (data) {
                setModalAddRenter(false);
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

    const [checked, setChecked] = React.useState(false);

    return (
        <>

            <BaseModal open={openModalAddRenter} onClose={()=>setModalAddRenter(!openModalAddRenter)}>
                <Stack gap={2}>

                <Input
                    id={"name"}
                    placeholder="Название"/>

                <Autocomplete
                    id={"place"}
                    placeholder={"Помещение (офис)"}
                    options={places}
                    getOptionLabel={(option) => option?.name}
                    isOptionEqualToValue={(option)=>option.id}
                    slotProps={{
                        listbox: { disablePortal: true, sx: { maxHeight: 160 } },
                    }}
                />


                    <Input
                        id={"tarif"}
                        placeholder="Тариф"
                        endDecorator={'₽ в мес.'}
                    />


                    <Input
                        id={"time"}
                        placeholder="Срок аренды"
                        endDecorator={'мес.'}
                    />


                    <Checkbox
                        label="Ремонт от бизнес-центра "
                    />


                <Stack direction="row" gap={2}>
                <Typography>Активен: </Typography>
                <Switch
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}/>
                </Stack>

                </Stack>

                <Button fullWidth sx={{mb:1, mt:4}}>Добавить</Button>
                <Button variant={'outlined'} fullWidth onClick={()=>setModalAddRenter(false)}>Отмена</Button>
            </BaseModal>

            <Button startDecorator={<Add />} onClick={()=>setModalAddRenter(!openModalAddRenter)}>Добавить арендатора</Button>

            {
                loading ? <CircularProgress sx={{display:'flex', mt:'50%', mr:'50%', ml:'35%'}}/> :
                <Grid container spacing={2} sx={{flexGrow: 1, mt: 1}}>
                    <Grid xs={6} md={8}>
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