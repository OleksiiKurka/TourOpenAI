'use client';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './ForgotYourPasswordForm.module.scss';
import TextInput from '../../ui/inputs/TextInput';

const ForgotYourPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter correct email.')
    .required('The email is required.')
});

function ForgotYourPasswordForm() {
  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={ForgotYourPasswordSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form className={styles.form}>
        <p className={styles.forgot_password}>Forgot Your Password?</p>

        <TextInput
          label="Email"
          name="email"
          type="email"
          placeholder="john.smith@travelisor.com"
        />

        <button className={styles.send_code_button} type="submit">
          Send a Code
        </button>
      </Form>
    </Formik>
  );
}

export default ForgotYourPasswordForm;
