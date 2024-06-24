"use client"
import { Form, Formik } from 'formik';
import TextInput from '../../ui/inputs/TextInput';
import styles from './SignInForm.module.scss';
import GoogleLogo from '@/src/assets/icons/google_logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import CheckBox from '../../ui/inputs/CheckBox';

function SignInForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        remember_me: ''
      }}
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
        <CheckBox
             label="Remember me"
             name="remember_me"
           />  

           <Link href="#" className={styles.forgot_password}>Forgot Your Password?</Link>
        </div>   

        <div className={styles.buttons_container}>
        <button className={styles.sign_up_button}>Sign Up</button> 
        <button className={styles.sign_up_with_google}>
          <Image src={GoogleLogo} width={20} height={22} alt="google logo" />
          Sign Up with Google
          </button>  
        <p className={styles.sub_text}>Don`t have an account? <Link href="#" className={styles.sign_in_link}><b>Sign Up</b></Link> </p>  
        </div> 
      </Form>


    </Formik>
  );
}

export default SignInForm;
