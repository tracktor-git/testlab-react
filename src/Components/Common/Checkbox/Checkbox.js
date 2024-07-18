import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Checkbox = (props) => {
    const { id, name, isChecked, onChange, label, } = props;
    return (_jsxs("div", { className: "checkbox-wrapper", children: [_jsx("input", { type: "checkbox", id: id, name: name, checked: isChecked, onChange: onChange }), _jsx("label", { htmlFor: id, children: label })] }));
};
export default Checkbox;
