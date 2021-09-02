import {
	Box,
	makeStyles,
	Paper,
	Table,
	TableContainer, Typography,
} from '@material-ui/core';
import MuiTableBody from '../MuiTableBody';


const MuiTable = ({ caption, rows }) => {
	const useStyles = makeStyles({
		table: {
			backgroundColor: `#000`,
		},
		caption: {
			color: `#FFF !important`,
			fontWeight: `bold !important`,
		},
		captionContainer: {
			display: `flex`,
			alignItems: `center`,
			marginLeft: `0.5em`
		},
	});
	const classes = useStyles();

	// I would add a TableHead for semantic value but it does not look there
	// is one in the screenshot.
	return (
		<TableContainer className={classes.table}  component={Paper}>
		<Table aria-label="table">
			<Box className={classes.captionContainer}>
				{caption.icon}
			<Typography className={classes.caption} variant={`caption`} component={`caption`}>
				{caption.text}
			</Typography>
			</Box>
			<MuiTableBody rows={rows}/>
		</Table>
	</TableContainer>
	)
};

export default MuiTable;
