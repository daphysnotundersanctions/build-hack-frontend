import React from "react";
import {CssBaseline, CssVarsProvider, GlobalStyles} from "@mui/joy";
import customTheme from './theme';
import Dashboard from "./screens/Dashboard.jsx";

function App() {
    return (
        <CssVarsProvider
            defaultMode="dark"
            disableTransitionOnChange
            theme={customTheme}
        >
            <CssBaseline />

            <GlobalStyles
                styles={{
                    ':root': {
                        '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
                        '--Cover-width': '40vw', // must be `vw` only
                        '--Form-maxWidth': '700px',
                        '--Transition-duration': '0.4s', // set to `none` to disable transition
                    },
                }}
            />
            <Dashboard/>


        </CssVarsProvider>
    );
}


export default App
