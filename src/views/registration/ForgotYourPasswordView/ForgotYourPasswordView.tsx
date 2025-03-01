import ForgotYourPasswordForm from '@/src/components/forms/ForgotYourPasswordForm/ForgotYourPasswordForm';
import AuthContainer from '../components/AuthContainer';
import ForgotYourPasswordImage from '@/src/assets/forgot-your-password.png';

function ForgotYourPasswordView() {
  return (
    <AuthContainer
      FormComponent={ForgotYourPasswordForm}
      image={ForgotYourPasswordImage}
    />
  );
}

export default ForgotYourPasswordView;
