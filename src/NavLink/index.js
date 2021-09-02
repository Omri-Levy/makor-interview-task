import {Link, ListItem, makeStyles} from '@material-ui/core';

const NavLink = ({href, text}) => {
	const useStyles = makeStyles({
		link: {
			color: `#FFF`,
			backgroundColor: `#3f6883`,
			paddingInline: 15,
			paddingBlock: 10,
			marginRight: 10,
			minWidth: 95,
			textAlign: `center`,
			fontSize: 12
		}
	});
	const classes = useStyles();

	return (
		<ListItem disableGutters>
			<Link className={classes.link} href={href}>{text}</Link>
		</ListItem>
	);
};

export default NavLink;
