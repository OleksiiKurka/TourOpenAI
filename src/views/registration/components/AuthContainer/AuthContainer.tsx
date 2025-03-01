import Image from 'next/image';
import styles from './AuthContainer.module.scss';
import Link from 'next/link';

function AuthContainer({ image, FormComponent }: any) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.root}>
        <div>
          <Link href="/">
            <h1>Travelisor</h1>
          </Link>
          <FormComponent />
        </div>
        <div className={styles.container_for_image}>
          <Image src={image} alt="Auth Image" fill />
        </div>
      </div>
    </div>
  );
}

export default AuthContainer;
