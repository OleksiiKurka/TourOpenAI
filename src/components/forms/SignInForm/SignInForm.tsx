'use client';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '@/src/components/ui/inputs/TextInput';
import styles from './SignInForm.module.scss';
import GoogleLogo from '@/src/assets/icons/google_logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import CheckBox from '@/src/components/ui/inputs/CheckBox';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter correct email.')
    .required('The email is required.'),
  password: Yup.string()
    // .min(8, 'Пароль має містити не менше 8 символів')
    .required('Please enter your password.')
});

function SignInForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        remember_me: false
      }}
      validationSchema={SignInSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form className={styles.form}>
        <p className={styles.welcome_back}>Welcome Back</p>

        <TextInput
          label="Email"
          name="email"
          type="email"
          placeholder="john.smith@travelisor.com"
        />

        <TextInput
          label="Password"
          name="password"
          type="password"
          placeholder="∗∗∗∗∗∗∗∗∗∗∗"
        />

        <div className={styles.container}>
          <CheckBox label="Remember me" name="remember_me" />
          <Link href="/forgot-your-password" className={styles.forgot_password}>
            Forgot Your Password?
          </Link>
        </div>

        <div className={styles.buttons_container}>
          <button className={styles.sign_up_button} type="submit">
            Sign In
          </button>
          <button className={styles.sign_up_with_google} type="button">
            <Image src={GoogleLogo} width={20} height={22} alt="google logo" />
            Sign In with Google
          </button>
          <p className={styles.sub_text}>
            Don`t have an account?{' '}
            <Link href="/sign-up" className={styles.sign_in_link}>
              <b>Sign Up</b>
            </Link>{' '}
          </p>
        </div>
      </Form>
    </Formik>
  );
}

export default SignInForm;
