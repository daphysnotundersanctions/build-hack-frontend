import React from 'react';
import {Avatar, IconButton, Menu, MenuItem, Typography} from "@mui/joy";
import Box from "@mui/joy/Box";
import MenuIcon from "@mui/icons-material/Menu";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import {ColorSchemeToggle} from "./ColorSchemeToggle";

function TopHeaderMenu({onClickMenu}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openAccountMenu = Boolean(anchorEl);
    const handleClickAccountMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseAccountMenu = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                <IconButton
                    variant="outlined"
                    size="sm"
                    onClick={onClickMenu}
                    sx={{ display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <IconButton
                    size="sm"
                    variant="solid"
                    sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                >
                    <GroupRoundedIcon />
                </IconButton>
                <Typography component="h1" fontWeight="xl">
                   <Typography>Hello</Typography>
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
                <ColorSchemeToggle/>

                <IconButton
                    variant="plain"
                    color="primary"
                    id="account-menu-button"
                    aria-controls={!openAccountMenu ? undefined : 'basic-menu'}
                    aria-haspopup="true"
                    aria-expanded={!openAccountMenu ? undefined : 'true'}
                    onClick={handleClickAccountMenu}
                >
                    <Avatar
                        src={'https://place-hold.it/300'}
                        srcSet={'https://place-hold.it/300'}
                        sx={{ borderRadius: 'sm' }}
                    />
                </IconButton>

                <Menu
                    id="account-menu"
                    anchorEl={anchorEl}
                    open={openAccountMenu}
                    onClose={handleCloseAccountMenu}
                    aria-labelledby="account-menu-button"
                    placement="bottom-end"
                >
                    <MenuItem onClick={handleCloseAccountMenu}>Аккаунт</MenuItem>
                    <MenuItem onClick={handleCloseAccountMenu}>Выйти</MenuItem>
                </Menu>
            </Box>
        </>
    );
}

export default TopHeaderMenu;