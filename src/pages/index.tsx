import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import MainSection from "../components/MainContent";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <main>
        <SearchBar />
        <section className="mainSection">
          <h1>Welcome to Ideal Broccoli!</h1>
          <p>This is the home page.</p>
          <Link to="/documents">Go to About</Link>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
