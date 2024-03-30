import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { Header } from "../components/common/header/Header";
import { Footer } from "../components/common/footer/Footer";
import { Project } from "../views/Project";
import { Error } from "../views/Error";
import { Contact } from "../views/Contact";
import { About } from "../components/about/About";
import { Suspense } from "react";

export const MyRoutes = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};
