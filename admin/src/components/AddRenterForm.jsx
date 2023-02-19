import React from 'react';
import {supabase} from "../API/API.js";
import {Button, Checkbox, Input, Stack, Switch, Typography} from "@mui/joy";
import Autocomplete from "@mui/joy/Autocomplete";
import dayjs from "dayjs";

function AddRenterForm({ onClose }) {
    const [loading,setLoading] = React.useState(false);
    const [places, setPlaces] = React.useState([]);
    const [checked, setChecked] = React.useState(false);
    const [checkedRem, setCheckedRem] = React.useState(false);
    const addNewRenter = async (name,status=true,tariff=100000,end_date,repair_from_bc=true) => {
        try {
            setLoading(true)

            const { data, error } = await supabase
                .from('renter')
                .insert([
                    {   name: `${name}`,
                        photo:'https://picsum.photos/400/300',
                        status: status ? 'active':'false',
                        place: 1,
                        tariff: tariff,
                        end_date: `${end_date}`,
                        repair_from_bc: repair_from_bc
                    },
                ])
        } catch (error) {
            console.log(error);
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
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        getAllPlaces();
    }, []);

    return (
        <>
            <form
                id={"renter-form"}
                onSubmit={(event) => {
                    const form = document.getElementById('renter-form');
                    event.preventDefault();
                    addNewRenter(form.name.value, checked, form.tarif.value, dayjs().add(form.time.value,"month").format('YYYY-MM-DD'), form.repairFromBc.checked)
                        .then(onClose);
                }}
            >
            <Stack gap={2}>

                <Input
                    id={"name"}
                    required
                    placeholder="Название"/>

                <Autocomplete
                    id={"place"}
                    required
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
                    required
                    placeholder="Тариф"
                    endDecorator={'₽ в мес.'}
                />


                <Input
                    id={"time"}
                    required
                    placeholder="Срок аренды"
                    endDecorator={'мес.'}
                />


                <Checkbox
                    id={"repairFromBc"}
                    label="Ремонт от бизнес-центра"
                />


                <Stack direction="row" gap={2}>
                    <Typography>Активен: </Typography>
                    <Switch
                        checked={checkedRem}
                        onChange={(event) => setCheckedRem(event.target.checked)}/>
                </Stack>

            </Stack>

            <Button fullWidth sx={{mb:1, mt:4}} loading={loading} type="submit">Добавить</Button>

            </form>
        </>
    );
}

export default AddRenterForm;