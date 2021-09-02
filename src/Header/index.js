import {AppBar, makeStyles, Toolbar} from '@material-ui/core';

const Header = ({children}) => {
	const useStyles = makeStyles({
		appBar: {
			backgroundColor: `inherit`,
			position: `unset`
		},
	});
	const classes = useStyles();

	return (
		<AppBar className={classes.appBar}>
			<Toolbar>
				{children}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
