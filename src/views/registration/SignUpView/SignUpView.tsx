import Container from '@/src/components/ui/Container';
import styles from './SignUpView.module.scss';
import AuthContainer from '../components/AuthContainer';
import SignUpImage from '@/src/assets/sign-up.jpg';
import SignUpForm from '@/src/components/forms/SignUpForm';

function SignUpView() {
    return(
        <Container>
            <AuthContainer FormComponent={SignUpForm} image={SignUpImage} />
        </Container>
    );
}

export default SignUpView;