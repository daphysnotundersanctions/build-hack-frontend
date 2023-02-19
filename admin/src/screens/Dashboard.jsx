import React from 'react';
import TeamNav from "../components/TeamNav.jsx";
import Layout from "../components/Layout";
import TopHeaderMenu from "../components/TopHeaderMenu.jsx";
import { Typography } from "@mui/joy";
import {supabase} from "../API/API.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import FilterWidget from "../components/dashboardTabs/FilterWidget.jsx";
import BasicGrid from "../components/gridStyles/BasicGrid.jsx";
import Renters from "../components/dashboardTabs/Renters.jsx";
import PdfGenerator from "../components/docsEditor/PdfGenerator.jsx";


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
            console.log(error.message);
        } finally {
            setLoading(false);
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
                        <Route path='/' element={<FilterWidget />}/>
                        <Route path='/docs' element={<PdfGenerator />}/>
                        <Route path='/renters' element={<Renters />}/>
                        <Route path='/places' element={<BasicGrid />}/>
                    </Routes >
                </Router>

            </Layout.Main>

        </Layout.Root>
    );
}

export default Dashboard;