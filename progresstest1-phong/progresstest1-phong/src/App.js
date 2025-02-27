
import './App.css';

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCard from './components/StudentCard';

const App = () => {
  return (
    <div>
      <Header />
      <StudentCard />
      <Footer />
    </div>
  );
};

export default App;
