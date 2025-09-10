import React from "react";
import Services from "./Services";
import EventsList from "./EventsList";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ServicesPage = ({ user, onLogout }) => (
  <>
    <Navbar user={user} onLogout={onLogout} />
    <Services />
    <EventsList user={user} />
    <Footer />
  </>
);

export default ServicesPage;