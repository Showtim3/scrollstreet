import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import React from "react";

import {ContactMail, Settings, VpnKey} from "@material-ui/icons";
import Link from "next/link";
import styled from "styled-components";
import CONSTANTS from "../constants/constants";
import ReactPath from "../ReactPath";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fullList: {
            width: "auto",
        },
        list: {
            width: 250,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    const classes = useStyles({});
    const [state, setState] = React.useState({
        bottom: false,
        left: false,
        right: false,
        top: false,
    });

    type DrawerSide = "top" | "left" | "bottom" | "right";
    const toggleDrawer = (side: DrawerSide, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }

        setState({...state, [side]: open});
    };

    const sidebarClickHandler = (index) => {
        switch (index) {
            case 0 :
                <Link href={ReactPath.HOME_PAGE}/>;
                break;
            case 1 :
                break;
            case 2 :
                <Link href={ReactPath.LOGIN}/>;
                break;
            case 3 :
                <Link href={ReactPath.REGISTER}/>;
                break;
        }
    };
    const sideList = (side: DrawerSide) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <Link href={ReactPath.HOME_PAGE}>
                    <ListItem button>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </Link>

                    <ListItem button onClick={handleClickOpen}>
                        <ListItemIcon><ContactMail/></ListItemIcon>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItem>

                    <Link href={ReactPath.LOGIN}>
                        <ListItem button>
                            <ListItemIcon><VpnKey/></ListItemIcon>
                            <ListItemText>Login</ListItemText>
                        </ListItem>
                    </Link>

                <Link href={ReactPath.REGISTER}>
                    <ListItem button>
                        <ListItemIcon><Settings/></ListItemIcon>
                        <ListItemText>Register</ListItemText>
                    </ListItem>
                </Link>
            </List>
        </div>
);

    const Image = styled.div`
display: inline-block;
img{
    left: 50%;
    position: absolute;
    transform: TranslateX(-50%);
    width: 15rem;
    top:0;
}
`;
    return (
    <div className={classes.root}>
        <AppBar position="static" color="primary" style={{backgroundColor: CONSTANTS.colorWhite}}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu"
                            onClick={toggleDrawer("left", true)}
                            style={{backgroundColor: CONSTANTS.colorGreen}}>
                    <MenuIcon/>
                </IconButton>
                <Image><img src="/static/images/xoxocoverpic.png" alt="logo of Xoxo"/></Image>
            </Toolbar>
        </AppBar>
        <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
            {sideList("left")}
        </Drawer>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Contact Us"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <a style={{textDecoration:"none"}} href="mailto:someone@example.com">Email: contact@xoxoprotection.com</a>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                   Close
                </Button>
            </DialogActions>
        </Dialog>

    </div>
);
};
export default Navbar;
