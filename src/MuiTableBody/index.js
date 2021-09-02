import {
	makeStyles,
	TableBody, TableCell,
	TableRow,
} from '@material-ui/core';
import {Star} from '@material-ui/icons';
import {useDispatch} from 'react-redux';
import {rate} from '../redux/isRatedSlice';

const MuiTableBody = ({ rows }) => {
	const useStyles = makeStyles({
		cell: {
				color: `#FFF`,
		},
		row: {
			'&:hover': {
				backgroundColor: `#1F1F1F`
			}
		}
	});
	const classes = useStyles();
	const dispatch = useDispatch();

	return (
		<TableBody>
			{rows.map((row) => (
				<TableRow className={classes.row} key={`row-${row.name}`} >
					{Object.keys(row).map((key) => {
						const isTh = key === `title`;
						const isNumeric = /[0-9]/g.test(row[key]);
						const isTrend = key === `trend`;
						const isPositive = /^\+/.test(row[key]);
						const isRated = key === `rated`;
						let color;

						if (isTh) {
							color = `#a2a2a2`;
						} else if (isTrend) {
							color = isPositive ? `green` : `red`;
						} else {
							color = `#FFF`
						}
						console.log(row[key]);


						return (
							<TableCell
								key={`cell-${key}`}
								component={isTh ? `th` : `td`}
								variant={isTh ? `head` : `body`}
								scope={isTh ? `col` : `row`}
								className={classes.cell}
								style={{
									color
								}}
								align={isNumeric ? `right` : ``}
							>
								{isRated ? <Star
									style={{
									color: row[key] ?  `orange` : `#a2a2a2`,
								}}
									onClick={() => dispatch(rate())}
								/> : row[key]}
							</TableCell>
						)
					})}
				</TableRow>
			))}
		</TableBody>
	)
};

export default MuiTableBody;
