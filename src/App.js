import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Reviews from './Components/Reviews/Reviews';
import Faq from './Components/Faq/Faq';
import Columns from './Components/Columns/Columns';
import Form from './Components/Form/Form';
const App = () => {
    console.log('App.tsx');
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(HowItWorks, {}), _jsx(Reviews, {}), _jsx(Faq, {}), _jsx(Columns, {}), _jsx(Form, {}), _jsx(Footer, {}), _jsx(ToastContainer, { hideProgressBar: true })] }));
};
export default App;
