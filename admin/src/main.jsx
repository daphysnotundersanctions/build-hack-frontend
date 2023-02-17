import React from 'react'
import ReactDOM from 'react-dom/client'
import {StyledEngineProvider} from "@mui/joy";
import App from "./App.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<App />
		</StyledEngineProvider>
	</React.StrictMode>,
)
