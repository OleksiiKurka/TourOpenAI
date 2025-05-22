import Container from '@/src/components/ui/Container';
import styles from './FAQsSection.module.scss';
import { questions_and_answers } from './constants';
import PlusSolidIcon from '@/src/assets/icons/plus-solid.svg';
import Image from 'next/image';

function FAQsSection() {
  return (
    <Container className={styles.root}>
      <h2>FAQs</h2>
      <div className={styles.FAQs_container}>
        {questions_and_answers.map((item) => (
          <div className={styles.cont} key={item.question}>
            <details>
              <summary>
                {item.question}
                <Image
                  src={PlusSolidIcon}
                  alt="Plus"
                  width={40}
                  height={28}
                ></Image>
              </summary>
              <p>{item.answer}</p>
            </details>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default FAQsSection;
