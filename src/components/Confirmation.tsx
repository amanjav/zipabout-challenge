import React from 'react';
import TrainIcon from "@material-ui/icons/Train";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Confirmation = (props: any) => {
    const classes = useStyles();

    return (

        <div className="planner-wrapper">
            <div className="image-wrapper">
                <img src="https://images.theconversation.com/files/300236/original/file-20191105-88382-nasrla.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop" alt="transport" />
            </div>
            <div className="wrapper-content">
                <p>Thank you for planning your journey between:</p>

                <Grid container className="journey-info">
                    <Grid item sm={2}>
                        <p><TrainIcon /></p>
                        <div className="timeline"></div>
                        <p> <TrainIcon /></p>
                    </Grid>
                    <Grid item sm={10}>
                        <p>{props.location.state.originValue.name} [{props.location.state.originValue.code}]</p>
                        <div className="timeline hidden"></div>
                        <p>{props.location.state.destinationValue.name} [{props.location.state.destinationValue.code}]</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Confirmation;