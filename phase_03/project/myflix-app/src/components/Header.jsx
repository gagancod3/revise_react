import React,{ Component } from "react";
import styles from "../styles/styles.module.css";
import Clock from "./Clock";
import ClockHook from "./ClockHook";
import LoginToggle from "./loginToggle";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import GetIP from "./GetIP";

class Header extends React.Component{

    title = 'myFlix';

    render(){
        return (
            <div>
        <div className={styles.header} style={{display: "inline-flex", alignItems:"anchor-center"}}>
            <img src="/logo.png" alt="logo" width={30} height={30} />
            <h2>{this.title}</h2>
        </div>
        <Clock/>
        <ClockHook/>
        <GetIP/>
        <Link to='/sign-up'><Button variant='contained'>Sign up</Button></Link>
        <LoginToggle/>
        </div>
    )
    }

}

export default Header;