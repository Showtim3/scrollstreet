import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import styled from "styled-components";
import CONSTANTS from "../../constants/constants";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            flexWrap: "wrap",
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        dense: {
            marginTop: theme.spacing(2),
        },
        menu: {
            width: 200,
        },
    }),
);
interface IState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    invitationLink: string;
}
const ButtonWrapper = styled.div`
text-align: center;
`;
const FormWrapper = styled.div`
padding: 3rem 0;
`;
const RegisterForm = () => {
    const classes = useStyles({});
    const [values, setValues] = React.useState<IState>({
        email: "",
        firstName: "",
        invitationLink: "",
        lastName: "",
        password: "",
    });

    const handleChange = (name: keyof IState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [name]: event.target.value});
    };
    const submitHandler = () => {
        console.log(values);
    };

    return (
        <div>
            <style jsx global>{`
      body {
      margin:0;
      padding:0;
      font-size:10px;
      font-family:Poppins,sans-serif;
      }p
    `}</style>
            <Container>
                <FormWrapper>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-firstName"
                            label="First Name"
                            className={classes.textField}
                            onChange={handleChange("firstName")}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-lastName"
                            label="Last Name"
                            className={classes.textField}
                            onChange={handleChange("lastName")}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-email"
                            label="Email"
                            className={classes.textField}
                            onChange={handleChange("email")}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-password"
                            label="Password"
                            className={classes.textField}
                            onChange={handleChange("password")}
                            margin="normal"
                            type="password"
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-name"
                            label="Invitation Link"
                            className={classes.textField}
                            onChange={handleChange("invitationLink")}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                        />

                    </form>
                </FormWrapper>
                <ButtonWrapper>
                    <Button variant="contained"
                            color="primary" style={{backgroundColor: CONSTANTS.colorGreen}}
                            onClick={submitHandler}>Register</Button>
                </ButtonWrapper>
            </Container>
        </div>
    );
};

export default RegisterForm;
