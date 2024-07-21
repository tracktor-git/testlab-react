import React from 'react';

import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import FormSchema from './FormSchema';
import FloatingInput from '../Common/FloatingInput/FloatingInput';
import FirmButton from '../Common/FirmButton/FirmButton';
import FirmCheckbox from '../Common/FirmCheckbox/FirmCheckbox';

import './Form.css';

const formInitialValues = {
  name: '',
  phone: '',
  agree: false,
};

const Form: React.FC = (): React.ReactElement => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const formik = useFormik({
    initialValues: formInitialValues,
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
        if (formRef.current) formRef.current.reset();
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
              errorText={formik.errors.name}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              isSubmitting={formik.isSubmitting}
              isCompleted={Boolean(formik.touched.name) && !formik.errors.name}
            />

            <FloatingInput
              id="phone"
              name="phone"
              label="Телефон"
              mask="+{7} (000) 000 00 00"
              inputMode="numeric"
              className={formik.errors.phone ? 'invalid' : null}
              errorText={formik.errors.phone}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              isSubmitting={formik.isSubmitting}
              isCompleted={Boolean(formik.touched.phone) && !formik.errors.phone}
            />
          </div>

          <div className="input-wrapper">
            <FirmCheckbox
              id="agree"
              label="Согласен, отказываюсь"
              onChange={formik.handleChange}
              checked={formik.values.agree}
            />

            <FirmButton
              type="submit"
              variant="primary"
              isSubmitting={formik.isSubmitting}
              disabled={formik.isSubmitting || !formik.values.agree}
            >
              Отправить
            </FirmButton>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Form;
