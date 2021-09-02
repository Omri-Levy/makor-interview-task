import MuiTable from './MuiTable';
import {
    Box, Button,
    Input,
    InputAdornment,
    makeStyles, Tab, Tabs, Zoom,
} from '@material-ui/core';
import {
    Clear,
    Close, KeyboardArrowDown, KeyboardArrowUp,
    LocalAtm, Sort, ZoomOutMap,
} from '@material-ui/icons';
import LTCIcon from './LTCIcon';
import Header from './Header';
import Nav from './Nav';
import NavLink from './NavLink';
import {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';

function App() {
    const isRated = useSelector((state) => state.isRated.value);
    const XRPRows = [

        {
            title: `XRPBTC`,
            number: 1.55,
            trend: `+0.57%`,
            value: `6.450M`,
            rated: isRated,
        },
        {
            title: `XRPCAD`,
            number: 1.55,
            trend: `-0.57%`,
            value: `6.450M`,
            rated: isRated
        },
        {
            title: `XRPCAD`,
            number: 1.55,
            trend: `+0.57%`,
            value: `6.450M`,
            rated: isRated
        },
    ];
    const BCHRows = [
        {
            title: `XRPCAD`,
            number: 1.55,
            trend: `-0.57%`,
            value: `6.450M`,
            rated: isRated
        },
        {
            title: `XRPCAD`,
            number: 1.55,
            trend: `+0.57%`,
            value: `6.450M`,
            rated: isRated
        },
        {
            title: `XRPCAD`,
            number: 1.55,
            trend: `-0.57%`,
            value: `6.450M`,
            rated: isRated
        },
    ];
    const LTCRows = [
        {
            title: `XRPAUD`,
            number: 1.55,
            trend: `+3.57%`,
            value: `6.450M`,
            rated: isRated
        },
        {
            title: `XRPCAD`,
            number: 1.55,
            trend: `+1.57%`,
            value: `6.450M`,
            rated: isRated
        },
        {
            title: `XRPCAD`,
            number: 1.55,
            trend: `-0.57%`,
            value: `6.450M`,
            rated: isRated
        },
    ];
    const useStyles = makeStyles({
        app: {
            backgroundColor: `#000`,
            width: `100vw`,
        },
        input: {
            marginLeft: 15,
            paddingLeft: 15,
            backgroundColor: `#2b485d`,
            color: `#FFF`
        },
        button: {
            color: `#FFF`
        },
        tabs: {
            color: `#FFF`,
        },
        tab: {
            "&:hover": {
                backgroundColor: `#2b485d`,
            },
        },
        adorment: {
            backgroundColor: `#3f6883`,
            height: `100%`
        },
    });
    const classes = useStyles();
    const iconStyle = {
        color: `#FFF`,
        width: `24px`,
        height: `24px`,
    }
    const navLinks = [
        {text: `Kraken markets`},
        {text: `BTC markets`},
        {text: `Watchlist`},
    ]
    const [isAsc, setIsAsc] = useState(false);
    const onClick = () => setIsAsc((prevState) => !prevState);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);



    return (
        <div className={classes.app}>
            <Header>
                <Nav>
                    {navLinks.map(({text}) => (
                        <NavLink href={`#`} text={text} />
                    ))}
                </Nav>
            </Header>
            <Box>
                <Input
                    inputRef={inputRef}
                    className={classes.input}
                    placeholder={`Search all markets`}
                    endAdornment={
                        <InputAdornment
                            position={`end`}
                            className={classes.adorment}
                        >
                            <Close />
                        </InputAdornment>
                    }
                />
                <Button
                    className={classes.button}
                    onClick={onClick}
                    startIcon={<Sort/>}
                >
                    Number of Pairs
                    {isAsc ? <KeyboardArrowDown/> : <KeyboardArrowUp/>}
                </Button>
            </Box>
            <MuiTable
                caption={{
                    text: `XRP`,
                    icon: <Clear style={iconStyle}/>
                }}
                rows={XRPRows}
            />
            <MuiTable
                caption={{
                    text: `BCH`,
                    icon: <LocalAtm style={iconStyle} />
                }}
                rows={BCHRows}
            />
            <MuiTable
                caption={{
                    text: `LTC`,
                    icon: <LTCIcon style={iconStyle} />
                }}
                rows={LTCRows}
            />
            <Tabs className={classes.tabs} aria-label="tabs" variant={`fullWidth`}>
                <Tab label="Chart" className={classes.tab}/>
                <Tab label="Book" className={classes.tab}/>
                <Tab label="Trade" className={classes.tab}/>
                <ZoomOutMap style={{
                    alignSelf: `center`,
                    paddingRight: 5
                }}/>
            </Tabs>
        </div>
    );
}

export default App;
