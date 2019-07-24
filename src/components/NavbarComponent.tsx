import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CONSTANTS from "../constants/constants";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);
const Image = {
   'width':'15rem'
};

const Navbar = () => {
    const classes = useStyles({});
    return(
           <div className={classes.root}>
            <AppBar position="static" color="primary" style={{backgroundColor:CONSTANTS.colorGreen}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                        <img src="/static/images/xoxocoverpic.png" alt="logo of Xoxo" style={Image} />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;