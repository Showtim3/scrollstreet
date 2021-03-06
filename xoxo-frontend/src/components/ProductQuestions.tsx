import React from 'react';
import {Box, Chip, Container} from "@material-ui/core";
import styled from 'styled-components';
import CONSTANTS from '../constants/constants'

const Option = styled.div`
    margin:10px 8px;
`;

interface IQuestion {
    question: string;
    selected: { key: number };
    options: Array<{ key: number, label: string }>
}

interface IProductQuestionsState {
    questionArray: Array<IQuestion>
}


interface IProductQuestionProps {
    range: any
}

class ProductQuestions extends React.Component <IProductQuestionProps, IProductQuestionsState> {

    constructor(props) {
        super(props);
        this.state = {
            questionArray: [{
                question: "How old is your phone ?",
                selected: {key: 0},
                options: [
                    {key: 0, label: '<1 months'},
                    {key: 1, label: '<3 months'},
                    {key: 2, label: '<6 months'},
                    {key: 3, label: '<1 year'},
                ]
            }, {
                question: "How much did you buy it for ?",
                selected: {key: 0},
                options: [
                    {key: 0, label: '5-10k'},
                    {key: 1, label: '10-15k'},
                    {key: 2, label: '15-20k'},
                    {key: 3, label: '20-25k'},
                ]
            }, {
                question: "Which OS  ?",
                selected: {key: 0},
                options: [
                    {key: 0, label: 'Android'},
                    {key: 1, label: 'IOS'},
                    {key: 2, label: 'Windows'},
                    {key: 3, label: 'Others'},
                ]
            }]
        }
    }

    handleClick = (index: number, optionKey: number) => {
        const newQuestions = this.state.questionArray;
        newQuestions[index].selected.key = optionKey;
        this.setState({
            questionArray: newQuestions
        }, () => {
            index < 2 && this.props.range(this.state.questionArray[0].options[this.state.questionArray[0].selected.key].label,
                this.state.questionArray[1].options[this.state.questionArray[1].selected.key].label);
        });
    };

    questionComponent = (question: IQuestion, index: number) =>
        <Box pb={3} borderBottom={2}>
            <Box component='h2'>{question.question}</Box>
            <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
                {question.options.map(option =>
                    <Option>
                        <Chip key={option.key} label={option.label} clickable={true} size="small"
                              onClick={() => this.handleClick(index, option.key)}
                              style={{backgroundColor: question.selected.key === option.key ? CONSTANTS.primaryGreen : "#e0e0e0"}}
                        />
                    </Option>
                )}
            </Box>
        </Box>;


    public render(): React.ReactNode {
        return (
            <div>
                <Box component='h1'>Answer a few questions</Box>
                {this.state.questionArray.map((question, index) => {
                    return this.questionComponent(question, index)
                })}
            </div>
        );
    }
}

export default ProductQuestions;


