import React from 'react';
import {supabase} from "../../API/API.js";
import {AspectRatio, Button, Card, CardOverflow, CircularProgress, Divider, Grid, Typography} from "@mui/joy";

function Renters() {

    const [loading,setLoading] = React.useState(false);
    const [renters, setRenters] = React.useState([]);

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

    React.useEffect(() => {
        getAllRenters();
    }, []);

    return (
        <>
            <Button>Добавить арендатора</Button>

            {
                loading ? <CircularProgress sx={{display:'flex', mt:'50%', mr:'50%', ml:'35%'}}/> :
                <Grid container spacing={2} sx={{flexGrow: 1, mt: 1}}>
                    <Grid xs={6} md={8}>
                    {
                        renters?.map((renter, i) => {
                            return (
                                <OverflowCard key={i} name={renter.name} place={renter.place} photo={renter.photo}/>
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