import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer"
import { UserStorage } from "../../UserContext";
import Feed from "../../Components/Feed/Feed";
import Head from "../../Components/Helper/Head";

const index = () => {

  return (
    <>
        <Head title="Fotos" description="Home do site dogs, com o feed de fotos"/>
        <Header />
        <section className="container mt-8">
          <Feed/>
        </section>
    </>
  );
};

export default index;
