import Image from 'next/image';
import styles from './AuthContainer.module.scss';

function AuthContainer({image, FormComponent}:any) {
    return(
            <div className={styles.root}>
                <div>
                    <h1>Travelisor</h1>
                    <FormComponent />
                </div>
                <div className={styles.container_for_image}>
                    <Image src={image} alt="Auth Image" fill />
                </div>
            </div>
    );
}

export default AuthContainer;