import Head from "next/head";
import Footer from "../components/Footer";
import { agents } from "../folder/agents";
import TopRatedAgent from "../components/topRatedAgent";
import BelowNav from "../components/BelowNav";
import { NextPage } from "next";
import Navbar from "../components/Navbar";
const Index: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <BelowNav />
      <Footer />
    </div>
  );
};
export default Index;
