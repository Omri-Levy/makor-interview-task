import {List, makeStyles} from '@material-ui/core';

const Nav = ({children}) => {
	const useStyles = makeStyles({
		list: {
			display: `flex`,
		}
	});
	const classes = useStyles();

	return (
		<nav>
			<List className={classes.list}>
				{children}
			</List>
		</nav>
	);
};

export default Nav;
