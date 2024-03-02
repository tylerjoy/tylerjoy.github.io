import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DocumentsPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Navbar />
      <main>
        <h1>Welcome to Ideal Broccoli!</h1>
        <p>
          This is the document hub page, raw versions of PDFs will live here.
        </p>
        <Link to="/about">Go to About</Link>
      </main>
      <Footer />
    </Layout>
  );
};

export default DocumentsPage;
