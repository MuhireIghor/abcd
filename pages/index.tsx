import Head from "next/head";
import Footer from "../components/Footer";
import { agents } from "../components/lib/agents";
import TopRatedAgent from "../components/topRatedAgent";
import BelowNav from "../components/ChoosingAgent";
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
