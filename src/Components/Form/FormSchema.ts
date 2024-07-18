import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Введите как минимум 2 символа!')
    .max(50, 'Можно ввести до 50 символов!')
    .required('Заполните это поле!'),
  phone: Yup.string()
    .trim()
    .matches(/^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/, 'Введите корректный номер телефона!')
    .required('Заполните это поле!'),
});

export default FormSchema;
