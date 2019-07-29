import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React from "react";

import CONSTANTS from "../constants/constants";
import styled from "styled-components";

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

const Navbar = () =>  {
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

    const sideList = (side: DrawerSide) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const Image = styled.div`
display: inline-block;
    img{
        left: 50%;
        position: absolute;
        transform: TranslateX(-50%);
        width: 18rem;
        top:0rem;
       }
    `;

    return (
            <div className={classes.root}>
                <AppBar position="static" color="primary" style={{backgroundColor: CONSTANTS.colorWhite}}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu"
                                    onClick={toggleDrawer("left", true)}
                                    style={{backgroundColor: CONSTANTS.colorGreen}}>
                            <MenuIcon />
                        </IconButton>
                        <Image><img src="/static/images/xoxocoverpic.png" alt="logo of Xoxo" /></Image>
                    </Toolbar>
                </AppBar>
                <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
                    {sideList("left")}
                </Drawer>

            </div>
        );
};
export default Navbar;
