import React from 'react';
import styled from 'styled-components';
import CONSTANTS from '../../constants/constants'
import {Box, FormControl, Input, InputLabel, Select} from '@material-ui/core';

const QuantityButton = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${CONSTANTS.lightBrown};
        width: 25px;
        height: 42px;
        font-size: 22px;
`;


export default function Pricing() {
    return (
        <div>
            <FormControl>
                <div className="quantitySelector">
                    <Box fontSize="15px" mb=".5rem">Quantity</Box>
                    <Box display="flex">
                        <QuantityButton>-</QuantityButton>
                        <Box display="flex" alignItems="center"
                             border={1}
                             borderColor={CONSTANTS.lightBrown}
                             width={"45px"}
                             height={"40px"}>
                            <Input type=" number"
                                   defaultValue={1} disableUnderline
                                   inputProps={{
                                       style: {textAlign: "center"}
                                   }}>2
                            </Input>
                        </Box>
                        <QuantityButton>+</QuantityButton>
                    </Box>
                </div>

                <div className="specialOffer">
                     <Select
                        native
                        value={"state.age"}
                        // onChange={handleChange('age')}
                        inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}
                    >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </div>


            </FormControl>
        </div>
    )
        ;
}
