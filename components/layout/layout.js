import { useRouter } from "next/router";
import { Fragment } from "react";
import MainNavigationBar from "./main-navigation";
import BottomBar from "./bottomBar";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./layout.module.css";
import MainNavigationBarMobile from "./mainNavigationMobile";

export default function Layout(props) {
  return (
    <>
      <MainNavigationBar />
      <MainNavigationBarMobile />
      <div className={classes.mainWrapper}>
        <main>{props.children}</main>
        {/* <BottomBar /> */}
      </div>
    </>
  );
}
