import classes from "./Login.module.css"

const Login = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.cta}>
                    <img className={classes["cta-logo-one"]} src="images/cta-logo-one.svg" alt="" />
                    <a href="" className={classes["sign-up"]}>GET ALL HERE</a>
                    <p className={classes.description}>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increasw by $1.
                    </p>
                    <img className={classes["cta-logo-two"]} src="images/cta-logo-two.png" alt="" />
                </div>
                <div className={classes["bg-image"]} />
            </div>
        </div>
    );
}

export default Login;