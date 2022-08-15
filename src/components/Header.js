import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <nav className={classes.nav}>
            <a className={classes.logo}>
                <img src="images/logo.svg" />
            </a>
            <div className={classes["nav-menu"]}>
                <a href="/home">
                    <img src="images/home-icon.svg" alt="HOME"/>
                    <span>HOME</span>
                </a>
                <a href="/search">
                    <img src="images/search-icon.svg" alt="SEARCH"/>
                    <span>SEARCH</span>
                </a>
                <a href="/watchlist">
                    <img src="images/watchlist-icon.svg" alt="WATCHLIST"/>
                    <span>WATCHLIST</span>
                </a>
                <a href="/original">
                    <img src="images/original-icon.svg" alt="ORIGINALS"/>
                    <span>ORIGINALS</span>
                </a>
                <a href="/movie">
                    <img src="images/movie-icon.svg" alt="MOVIES"/>
                    <span>MOVIES</span>
                </a>
                <a href="/series">
                    <img src="images/series-icon.svg" alt="SERIES"/>
                    <span>SERIES</span>
                </a>
            </div>
            <a href="/login" className={classes.login}>LOGIN</a>
        </nav>
    );
}

export default Header;