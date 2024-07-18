var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import { IMaskMixin } from 'react-imask';
import { toast } from 'react-toastify';
import FormSchema from './FormSchema';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';
const MaskedInput = IMaskMixin((_a) => {
    var { inputRef } = _a, props = __rest(_a, ["inputRef"]);
    return (_jsx("input", Object.assign({}, props, { ref: inputRef })));
});
const Form = () => {
    const formRef = React.useRef(null);
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            agree: false,
        },
        validationSchema: FormSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield fetch('https://fakestoreapi.com/users', {
                    method: 'POST',
                    body: JSON.stringify({ username: values.name, phone: values.phone }),
                });
                if (!response.ok) {
                    const errorText = `${response.status}: ${response.statusText}`;
                    toast.error(`Возникла ошибка при отправке формы: ${errorText}`);
                    console.log(response);
                    throw new Error(errorText);
                }
                const data = yield response.json();
                console.log(data);
                formik.setFieldValue('agree', false);
                if (formRef) {
                    (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.reset();
                }
                toast.success('Форма успешно отправлена! ;)');
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                    console.log(formik.errors);
                    return;
                }
                console.error(error);
            }
        }),
    });
    return (_jsx("section", { className: "form", id: "form", children: _jsx("div", { className: "container", children: _jsxs("form", { className: "form-wrapper", onSubmit: formik.handleSubmit, ref: formRef, children: [_jsxs("div", { className: "input-wrapper", children: [_jsxs("div", { className: "floating-input", children: [_jsx("input", { type: "text", id: "name", name: "name", autoComplete: "off", className: formik.errors.name && 'invalid', placeholder: " ", onChange: formik.handleChange, onBlur: formik.handleBlur, disabled: formik.isSubmitting }), _jsx("label", { htmlFor: "name", children: "\u0418\u043C\u044F" }), _jsx("span", { className: "error-text", children: formik.errors.name }), _jsx("div", { className: "input-state" })] }), _jsxs("div", { className: "floating-input", children: [_jsx(MaskedInput, { type: "text", id: "phone", name: "phone", autoComplete: "off", mask: "+{7} (000) 000 00 00", className: formik.errors.phone && 'invalid', placeholder: " ", onChange: formik.handleChange, onBlur: formik.handleBlur, disabled: formik.isSubmitting }), _jsx("label", { htmlFor: "phone", children: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D" }), _jsx("span", { className: "error-text", children: formik.errors.phone }), _jsx("div", { className: "input-state" })] })] }), _jsxs("div", { className: "input-wrapper", children: [_jsxs("div", { className: "checkbox-wrapper", children: [_jsx("input", { type: "checkbox", id: "agree", name: "agree", onChange: formik.handleChange, checked: formik.values.agree }), _jsx("label", { htmlFor: "agree", children: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D, \u043E\u0442\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0441\u044C" })] }), _jsx("button", { type: "submit", className: "button button-primary", disabled: formik.isSubmitting || !formik.values.agree, children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" })] })] }) }) }));
};
export default Form;
