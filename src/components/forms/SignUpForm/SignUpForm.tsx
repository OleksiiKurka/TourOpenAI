'use client';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../ui/inputs/TextInput';
import styles from './SignUpForm.module.scss';
import GoogleLogo from '@/src/assets/icons/google_logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'The name must be at least 2 characters long.')
    .max(50, 'The name must be less than 50 characters.')
    .required('Please enter your name.'),
  lastName: Yup.string()
    .min(2, 'The surname must be at least 2 characters long.')
    .max(50, 'The surname must be less than 50 characters.')
    .required('Please enter your surname.'),
  email: Yup.string()
    .email('Please enter correct email.')
    .required('Email is required.'),
  password: Yup.string()
    .min(8, 'The password must be at least 8 characters long')
    .required('Please enter your password.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'The passwords must match.')
    .required('Please confirm your password.')
});

function SignUpForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form className={styles.form}>
          <div>
            <TextInput
              label="First Name*"
              name="firstName"
              type="text"
              placeholder="John"
            />
          </div>

          <div>
            <TextInput
              label="Last Name*"
              name="lastName"
              type="text"
              placeholder="Smith"
            />
          </div>

          <div>
            <TextInput
              label="Email*"
              name="email"
              type="email"
              placeholder="john.smith@travelisor.com"
            />
          </div>

          <div>
            <TextInput
              label="Password*"
              name="password"
              type="password"
              placeholder="∗∗∗∗∗∗∗∗∗∗∗"
            />
          </div>

          <div>
            <TextInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="∗∗∗∗∗∗∗∗∗∗∗"
            />
          </div>

          <div className={styles.buttons_container}>
            <button className={styles.sign_up_button} type="submit">
              Sign Up
            </button>
            <button className={styles.sign_up_with_google} type="button">
              <Image
                src={GoogleLogo}
                width={20}
                height={22}
                alt="google logo"
              />
              Sign Up with Google
            </button>
            <p className={styles.sub_text}>
              Already have an account?{' '}
              <Link href="/sign-in" className={styles.sign_in_link}>
                <b>Sign In</b>
              </Link>{' '}
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
