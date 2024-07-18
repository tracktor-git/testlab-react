import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Accordion from './Accordion';
import './Faq.css';
const Faq = () => {
    const [accordionData, setAccordionData] = React.useState([]);
    /* Сымитируем, будто данные приходят откуда-то с API */
    React.useEffect(() => {
        fetch('./accordion.json')
            .then((data) => data.json())
            .then((data) => setAccordionData(data))
            .catch((error) => console.warn(error));
    }, []);
    return (_jsx("section", { id: "faq", className: "faq", children: _jsxs("div", { className: "container", children: [_jsx("div", { className: "faq-title", children: _jsx("h2", { children: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B" }) }), _jsx("div", { className: "accordion-wrapper", children: accordionData.map(({ id, body, header }) => (_jsx(Accordion, { header: header, body: body }, id))) })] }) }));
};
export default Faq;
