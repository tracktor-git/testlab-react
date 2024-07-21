import React from 'react';

import { ToastContainer } from 'react-toastify';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Reviews from './Components/Reviews/Reviews';
import Faq from './Components/Faq/Faq';
import Columns from './Components/Columns/Columns';
import Form from './Components/Form/Form';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  console.log('App.tsx');
  return (
    <>
      <Header />
      <main>
        <HowItWorks />
        <Reviews />
        <Faq />
        <Columns />
        <Form />
      </main>
      <Footer />
      <ToastContainer hideProgressBar />
    </>
  );
};

export default App;
