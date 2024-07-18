import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Slide = (props) => {
    const { avatar, name, city, text, } = props;
    return (_jsx("div", { className: "slide-item-wrapper", children: _jsxs("div", { className: "slider-item", children: [_jsxs("div", { className: "slider-item-user", children: [_jsx("div", { className: "user-avatar", children: _jsx("img", { src: avatar, alt: "Avatar" }) }), _jsxs("div", { className: "user-info", children: [_jsx("div", { className: "name", children: name }), _jsx("div", { className: "city", children: city })] })] }), _jsx("p", { className: "slider-item-text", children: text })] }) }));
};
export default Slide;
