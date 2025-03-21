import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Divider } from "@mui/material";

export default function Layout() {
  return (
    <><Header />
    <Outlet />
    <Divider />
    <Footer /></>
  );
}