import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.css';
import Button from '../Common/Button/Button';
const Header = () => {
    const [isNavOpened, setIsNavOpened] = React.useState(false);
    const handleLinkClick = (event) => {
        event.preventDefault();
        setIsNavOpened(false);
        const target = event.target;
        const id = target.href.split('#')[1];
        const element = document.getElementById(id);
        element === null || element === void 0 ? void 0 : element.scrollIntoView({ behavior: 'smooth' });
    };
    const handleNavClick = (event) => {
        const target = event.target;
        if (target.tagName === 'UL') {
            setIsNavOpened(false);
        }
    };
    const handleKeyUp = (event) => {
        if (event.key === 'Escape') {
            setIsNavOpened(false);
        }
    };
    const burgerClassName = isNavOpened ? 'burger-menu-button open' : 'burger-menu-button';
    return (_jsx("header", { className: "header", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "header-top", children: [_jsxs("a", { href: "/", className: "logo", children: [_jsx("img", { src: logo, alt: "TestLab Logo" }), _jsx("span", { children: "testLab" })] }), _jsx("button", { type: "button", className: burgerClassName, "aria-label": "Mobile nav button" }), _jsx("nav", { className: "nav", children: _jsx("div", { role: "button", tabIndex: 0, onClick: handleNavClick, onKeyUp: handleKeyUp, children: _jsxs("ul", { className: "nav-list", children: [_jsx("li", { className: "nav-item", children: _jsx("a", { href: "#how-it-works", onClick: handleLinkClick, children: "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442" }) }), _jsx("li", { className: "nav-item", children: _jsx("a", { href: "#reviews", onClick: handleLinkClick, children: "3-\u0439 \u0431\u043B\u043E\u043A" }) }), _jsx("li", { className: "nav-item", children: _jsx("a", { href: "#faq", onClick: handleLinkClick, children: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B" }) }), _jsx("li", { className: "nav-item", children: _jsx("a", { href: "#form", onClick: handleLinkClick, children: "\u0424\u043E\u0440\u043C\u0430" }) })] }) }) })] }), _jsxs("div", { className: "header-bottom", children: [_jsx("div", { className: "header-title", children: _jsx("h1", { children: "\u0413\u043E\u0432\u043E\u0440\u044F\u0442, \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u043E \u0441\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044E" }) }), _jsx("p", { className: "header-text", children: "\u0421\u0434\u0435\u043B\u0430\u0439 \u043A\u0440\u0443\u0442\u043E \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435 \u0438 \u0443 \u0442\u0435\u0431\u044F \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F" }), _jsx(Button, { label: "\u041F\u0440\u043E\u0449\u0435 \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E!", type: "button", severity: "default", className: "header-button" })] })] }) }));
};
export default Header;
