import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const Accordion = ({ header, body }) => {
    const [expanded, setExpanded] = React.useState(false);
    const className = expanded ? 'accordion accordion-expand' : 'accordion';
    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            setExpanded(!expanded);
        }
    };
    return (_jsx("div", { role: "button", tabIndex: 0, className: className, onClick: () => setExpanded(!expanded), onKeyUp: handleKeyUp, children: _jsxs("div", { className: "accordion-header", children: [_jsx("h4", { children: header }), _jsx("i", { className: "accordion-icon" }), _jsx("p", { className: "accordion-body", children: body })] }) }));
};
export default Accordion;
