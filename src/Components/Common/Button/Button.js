import { jsx as _jsx } from "react/jsx-runtime";
const Button = (props) => {
    const { className, severity, type, label, onClick, isDisabled, } = props;
    const defaultClassName = className ? `button ${className}` : 'button';
    const buttonClassName = severity ? `${defaultClassName} button-${severity}` : `${defaultClassName} button-default`;
    return (_jsx("button", { type: type === 'submit' ? 'submit' : 'button', className: buttonClassName, disabled: isDisabled, onClick: onClick, children: label }));
};
export default Button;
