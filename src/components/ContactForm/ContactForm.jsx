import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
import { postData } from '../../redux/contactsOps.js';

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too short Name')
      .max(50, 'Too long Name')
      .required('This field is required'),
    number: Yup.string()
      .matches(
        /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
        'The number must be in the format xxx-xx-xx'
      )
      .required('This field is required'),
  });

  const handleSubmit = (value, action) => {
    action.resetForm();
    dispatch(postData(value));
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div>
            <label>
              Name
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="p" />
            </label>
          </div>
          <div>
            <label>
              Number
              <Field type="tel" name="number" />
              <ErrorMessage name="number" component="p" />
            </label>
          </div>

          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
