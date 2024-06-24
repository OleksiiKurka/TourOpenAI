"use client"
import { Form, Formik } from 'formik';
import TextInput from '../../ui/inputs/TextInput';
import styles from './SignUpForm.module.scss';
import GoogleLogo from '@/src/assets/icons/google_logo.svg';
import Image from 'next/image';
import Link from 'next/link';

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
      onSubmit={(values) => console.log(values)}
    >
      <Form className={styles.form}>
      <TextInput
             label="First Name"
             name="firstName"
             type="text"
             placeholder="John"
           />

      <TextInput
             label="Last Name"
             name="lastName"
             type="text"
             placeholder="Smith"
           />  

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

        <TextInput
             label="Confirm Password"
             name="confirmPassword"
             type="password"
             placeholder="∗∗∗∗∗∗∗∗∗∗∗"
           />  

        <div className={styles.buttons_container}>
        <button className={styles.sign_up_button}>Sign Up</button> 
        <button className={styles.sign_up_with_google}>
          <Image src={GoogleLogo} width={20} height={22} alt="google logo" />
          Sign Up with Google
          </button>  
        <p className={styles.sub_text}>Already have an account? <Link href="#" className={styles.sign_in_link}><b>Sign In</b></Link> </p>  
        </div> 
      </Form>


    </Formik>
  );
}

export default SignUpForm;
