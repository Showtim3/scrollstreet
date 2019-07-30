import {Container, createStyles, Theme, WithStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import ReactPath from "../ReactPath";
import DialogContentText from "@material-ui/core/DialogContentText";

const styles = (theme: Theme) =>
    createStyles({

        closeButton: {
            color: theme.palette.grey[500],
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(1),
        },
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const {children, classes, onClose} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const FooterContainer = styled.div`
background-color:#e6e6e6;
display:flex;
flex-wrap:wrap;
justify-content:center;
text-align: center;
margin-top: 1rem;
`;
const FooterList = styled.div`
width:100%;
padding: 1.5rem 0 0;
ul{
padding:0;
list-style:none;}
li{
cursor: pointer;
font-size:1.2rem;
padding: 0.2rem;

}`;
const CopyrightContainer = styled.div`
width:100%;
padding:1.5rem 0;
text-align:center;
span{
font-size:0.8rem;
}
img{
padding:0.6rem 0 1rem;}
`;

class Footer extends React.Component {
    public state = {
        open: false,
    };

    public handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    public handleClose = () => {
        this.setState({open: false});
    };

    public render() {
        return (
            <div>
                <FooterContainer>
                    <FooterList>
                        <ul>
                            <Link href={ReactPath.HOME_PAGE}>
                                <li>Home</li>
                            </Link>
                            <Link href={ReactPath.LIST_ITEM}>
                                <li>Products</li>
                            </Link>
                            <li onClick={this.handleClickOpen}>Contact Us</li>
                        </ul>
                    </FooterList>
                    <FooterList>
                        <ul>
                            <Link href={ReactPath.PRIVACY_POLICY}>
                                <li>Privacy Policy</li>
                            </Link>
                            <Link href={ReactPath.RETURN_POLICY}>
                                <li>Return Policy</li>
                            </Link>
                        </ul>
                    </FooterList>
                    <CopyrightContainer>
                        <span>&copy;2019 Copyright XoXo Protection </span>
                        <img src="/xoxo-frontend/staticrontend/static/images/payment.png" alt=""/>
                    </CopyrightContainer>
                    <Dialog
                        onClose={this.handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={this.state.open}
                    >
                        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                            Contact us
                        </DialogTitle>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                <a style={{textDecoration:"none"}} href="mailto:someone@example.com">Email: contact@xoxoprotection.com</a>
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </FooterContainer>
            </div>
        );
    }
}

export default Footer;
