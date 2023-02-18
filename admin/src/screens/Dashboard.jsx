import React from 'react';
import TeamNav from "../components/TeamNav.jsx";
import Layout from "../components/Layout";
import TopHeaderMenu from "../components/TopHeaderMenu.jsx";
import {Typography} from "@mui/joy";
import GridTest from "../components/GridTest.jsx";

function Dashboard() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

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
                <Typography sx={{mb:2}}> Hello </Typography>

                <GridTest/>
            </Layout.Main>


        </Layout.Root>
    );
}

export default Dashboard;