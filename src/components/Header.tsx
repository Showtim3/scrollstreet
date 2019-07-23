import Link from 'next/link';
import ReactPath from "../ReactPath";

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href={ReactPath.HOME_PAGE}>
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href={ReactPath.LIST_ITEM}>
            <a style={linkStyle}>List Items</a>
        </Link>
    </div>
);

export default Header;
