import Head from "next/head";
import Footer from "../components/Footer";
import BelowNav from "../components/BelowNav";
import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Latest from "../components/Latest";
const Index: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <BelowNav />
      <Latest />
      <Footer />
    </div>
  );
};
export default Index;
