import React from 'react';

import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import FormSchema from './FormSchema';
import FloatingInput from './FloatingInput';

import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

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
    validateOnBlur: true,
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
        formik.resetForm();
        if (formRef) formRef.current?.reset();
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
            <FloatingInput
              id="name"
              name="name"
              label="Имя"
              className={formik.errors.name ? 'invalid' : null}
              errorText={formik.errors.name ?? null}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              isSubmitting={formik.isSubmitting}
              isComplete={Boolean(formik.touched.name) && !formik.errors.name}
            />

            <FloatingInput
              id="phone"
              name="phone"
              label="Телефон"
              mask="+{7} (000) 000 00 00"
              inputMode="numeric"
              className={formik.errors.phone ? 'invalid' : null}
              errorText={formik.errors.phone ?? null}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              isSubmitting={formik.isSubmitting}
              isComplete={Boolean(formik.touched.phone) && !formik.errors.phone}
            />
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
              {/* eslint-disable-next-line */}
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
