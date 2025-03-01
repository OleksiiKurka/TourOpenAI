// import Container from '@/src/components/ui/Container';
import styles from './SignInpView.module.scss';
import AuthContainer from '../components/AuthContainer';
import SignInImage from '@/src/assets/sign-in.jpg';
import SignInForm from '@/src/components/forms/SignInForm';

function SignInView() {
  return (
    // <Container>
    <AuthContainer FormComponent={SignInForm} image={SignInImage} />
    // </Container>
  );
}

export default SignInView;
