import React from 'react';
import {Box, Chip, Container} from "@material-ui/core";
import styled from 'styled-components';


const questionArray = [{
    question: "How old is your phone ?",
    options:[
        {key: 0, label: '< 1 months'},
        {key: 1, label: '< 3 months'},
        {key: 2, label: '< 6 months'},
        {key: 3, label: '< 1 year'},
    ]
}, {
    question: "How much did you buy it for ?",
    options: [
        {key: 0, label: '5 - 10k'},
        {key: 1, label: '10 - 15k'},
        {key: 2, label: '15 - 20k'},
        {key: 3, label: '20 - 25k'},
    ]
}, {
    question: "Which OS  ?",
    options: [
        {key: 0, label: 'Android'},
        {key: 1, label: 'IOS'},
        {key: 2, label: 'Windows'},
        {key: 3, label: 'Others'},
    ]
}];

const Option = styled.div`
    margin:10px 8px;
`;


const questionComponent = (question) =>
    <Box pb={3} borderBottom={2}>
        <Box component='h2'>{question.question}</Box>
        <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
            {question.options.map(data =>
                <Option>
                    <Chip key={data.key} label={data.label} clickable={true} size="small"/>
                </Option>
            )}
        </Box>
    </Box>;


class ProductQuestions extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            answer: []
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Box component='h1'>Answer a few questions</Box>
                    {questionArray.map(question => {
                        return questionComponent(question)
                    })}
                </Container>
            </div>
        );
    }
}

export default ProductQuestions;
