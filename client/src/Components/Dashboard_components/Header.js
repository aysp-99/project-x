import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    typographystyles: {
        flex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographystyles}>
                    Project X
                </Typography>
                <SearchRoundedIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header;