import React from 'react';
import TeamNav from "../components/TeamNav.jsx";
import Layout from "../components/Layout";
import TopHeaderMenu from "../components/TopHeaderMenu.jsx";
import {Container, Typography} from "@mui/joy";
import Valueslider from "../components/basic/Valueslider.jsx";
import CoffeeSwitch from "../components/basic/CoffeeSwitch.jsx";
import {getBusinessCenters, supabase} from "../API/API.js";

function Dashboard() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [centers, setCenters] = React.useState([]);


    const getAllCenters = async () => {
        try {
            setLoading(true)

            const { data, error, status } = await supabase
                .from('business_center')
                .select('*')
            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setCenters(data);
                console.log(data);
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        getAllCenters();
    }, []);



    return (
        <Layout.Root sx={{
            ...(drawerOpen && {
                height: '100vh',
                overflow: 'hidden',
            }),
        }}>
            <Layout.Header >
                <TopHeaderMenu onClickMenu={()=>setDrawerOpen(!drawerOpen)}/>
            </Layout.Header>

            {drawerOpen && (
                <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
                    <TeamNav />
                </Layout.SideDrawer>
            )}


            <Layout.SideNav>
                <TeamNav/>
            </Layout.SideNav>


            <Layout.Main>

                <Container>
                    <Typography sx={{mb:2}}> Параметры площади </Typography>
                    <Valueslider symbol={`м²`}/>
                    <CoffeeSwitch/>
                </Container>

                {
                    centers.map((centers, i)=>{
                        return(
                            <>
                                <Typography>Приветствуем вас в {centers.name}</Typography>
                            </>
                        )
                    })
                }

            </Layout.Main>


        </Layout.Root>
    );
}

export default Dashboard;