import React from 'react';
import {
    Chip,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemContent,
    ListItemDecorator,
    ListSubheader
} from "@mui/joy";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded.js";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded.js";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded.js";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded.js";
import BusinessIcon from '@mui/icons-material/Business';
import SsidChartIcon from '@mui/icons-material/SsidChart';

function TeamNav() {
    return (
        <List size="sm" sx={{ '--List-item-radius': '8px', '--List-gap': '4px' }}>
            <ListItem nested>
                {/* <ListSubheader>
                    <IconButton
                        size="sm"
                        variant="plain"
                        color="primary"
                        sx={{ '--IconButton-size': '24px', ml: 'auto' }}
                    >
                        <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
                    </IconButton>
                </ListSubheader> */}
                <List
                    aria-labelledby="nav-list-browse"
                    sx={{
                        '& .JoyListItemButton-root': { p: '8px' },
                    }}
                >
                    <ListItem>
                        <ListItemButton 
                            variant={ (window.location.pathname  === '/') ? "soft" : ''}
                            color="primary"
                            onClick={()=>window.location.href="/"}>
                            <ListItemDecorator sx={{ color: 'inherit' }}>
                                <SsidChartIcon fontSize="small" />
                            </ListItemDecorator>
                            <ListItemContent>Статистика</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton 
                            variant={ (window.location.pathname  === '/docs') ? "soft" : ''}
                            color="primary"
                            onClick={()=>window.location.href="/docs"}>
                            <ListItemDecorator sx={{ color: 'neutral.500' }}>
                                <ArticleRoundedIcon fontSize="small" />
                            </ListItemDecorator>
                            <ListItemContent>Документы</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton 
                            variant={ (window.location.pathname  === '/places') ? "soft" : ''}
                            color="primary"
                            onClick={()=>window.location.href="/places"}>
                            <ListItemDecorator sx={{ color: 'neutral.500' }}>
                                <BusinessIcon fontSize="small" />
                            </ListItemDecorator>
                            <ListItemContent>Площади</ListItemContent>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton 
                            variant={ (window.location.pathname  === '/renters') ? "soft" : ''}
                            color="primary"
                            onClick={()=>window.location.href="/renters"}>
                            <ListItemDecorator sx={{ color: 'neutral.500' }}>
                                <AssignmentIndRoundedIcon fontSize="small" />
                            </ListItemDecorator>
                            <ListItemContent>Арендаторы</ListItemContent>
                        </ListItemButton>
                    </ListItem>

                </List>
            </ListItem>
        </List>
    );
}

export default TeamNav;