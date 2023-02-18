import { extendTheme } from '@mui/joy/styles';

export default extendTheme({
	overrides: {
		MuiAutocomplete: {
			popup: ' z-index: 999999 !important',
		},
	},
	fontFamily: {
		display: "'Inter', var(--joy-fontFamily-fallback)",
		body: "'Inter', var(--joy-fontFamily-fallback)",
	},
});