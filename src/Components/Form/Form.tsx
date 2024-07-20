/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

import { useFormik } from 'formik';
import { IMaskMixin } from 'react-imask';
import { toast } from 'react-toastify';

import FormSchema from './FormSchema';

import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

const MaskedInput = IMaskMixin(({ inputRef, ...props }) => (
  <input {...props} ref={inputRef as React.RefObject<HTMLInputElement>} />
));

const Form: React.FC = (): React.ReactElement => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      agree: false,
    },
    validationSchema: FormSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      try {
        const response = await fetch('https://fakestoreapi.com/users', {
          method: 'POST',
          body: JSON.stringify({ username: values.name, phone: values.phone }),
        });

        if (!response.ok) {
          const errorText = `${response.status}: ${response.statusText}`;
          toast.error(`Возникла ошибка при отправке формы: ${errorText}`);
          console.log(response);
          throw new Error(errorText);
        }

        const data = await response.json();
        console.log(data);
        formik.setFieldValue('agree', false);

        if (formRef) {
          formRef.current?.reset();
        }

        toast.success('Форма успешно отправлена! ;)');
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          console.log(formik.errors);
          return;
        }
        console.error(error);
      }
    },
  });

  return (
    <section className="form" id="form">
      <div className="container">
        <div className="form-title">
          <h2>Отправь форму</h2>
        </div>
        <form className="form-wrapper" onSubmit={formik.handleSubmit} ref={formRef}>
          <div className="input-wrapper">
            <div className="floating-input">
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                className={formik.errors.name && 'invalid'}
                placeholder=" "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
              <label htmlFor="name">Имя</label>
              <span className="error-text">{formik.errors.name}</span>
              <div className="input-state" />
            </div>
            <div className="floating-input">
              <MaskedInput
                type="text"
                id="phone"
                name="phone"
                autoComplete="off"
                mask="+{7} (000) 000 00 00"
                className={formik.errors.phone && 'invalid'}
                placeholder=" "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
              <label htmlFor="phone">Телефон</label>
              <span className="error-text">{formik.errors.phone}</span>
              <div className="input-state" />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                onChange={formik.handleChange}
                checked={formik.values.agree}
              />
              <label htmlFor="agree">Согласен, отказываюсь</label>
            </div>
            <button
              type="submit"
              className="button button-primary"
              disabled={formik.isSubmitting || !formik.values.agree}
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
