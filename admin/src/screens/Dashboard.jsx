import React from 'react';
import TeamNav from "../components/TeamNav.jsx";
import Layout from "../components/Layout";
import TopHeaderMenu from "../components/TopHeaderMenu.jsx";
import {Box, Container, Typography} from "@mui/joy";
import Valueslider from "../components/basic/Valueslider.jsx";
import CoffeeSwitch from "../components/basic/CoffeeSwitch.jsx";
import {supabase} from "../API/API.js";
import SquareSwitch from "../components/basic/SquareSwitch.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import FilterWidget from "../components/dashboardTabs/FilterWidget.jsx";


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

    const BusinessCenter = () => {
        return(
            <>
                <Typography> Списк бизнес-центров (с базы): </Typography>
                {
                    centers.map((centers, i)=>{
                        return(
                                <Typography key={i}>{centers.name}</Typography>
                        )
                    })
                }
            </>
        )
    }

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

                <Router>
                        <Routes>
                            <Route path='/' element={<FilterWidget/>} />
                            <Route path='/centers' element={<BusinessCenter/>} />
                        </Routes >
                </Router>

            </Layout.Main>

        </Layout.Root>
    );
}

export default Dashboard;