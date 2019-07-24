import React from 'react';
import CONSTANTS from '../../constants/constants'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Box, Button, FormControl, Input} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        QuantityButton: {
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            backgroundColor: CONSTANTS.lightBrown,
            width: '25px',
            height: '39px',
            margin: '0 auto',
        },
        QuantityInput: {
            width: '45px',
            height: '39px',
            paddingLeft: "2px",
         },
    }),
);

export default function Pricing() {
    const classes = useStyles({});
    return (
        <div>
            <FormControl>
                <Box display="flex" alignItems="center">
                    <Box className={classes.QuantityButton}>-</Box>
                    <Box display="flex" alignItems="center" textAlign="center">
                        <Input className={classes.QuantityInput} type="number"
                              defaultValue={1}>1</Input>
                    </Box>
                    <Box className={classes.QuantityButton} textAlign="center">+</Box>
                </Box>
            </FormControl>
        </div>
    );
}
