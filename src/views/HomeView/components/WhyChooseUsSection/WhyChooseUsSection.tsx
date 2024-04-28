import Container from '@/src/components/ui/Container';
import styles from './WhyChooseUsSection.module.scss';
import { cards } from './constants';
import Image from 'next/image';
function WhyChooseUsSection() {
    return (
        <Container className={styles.root}>
        <h2>Why Choose Us</h2>
        <div className={styles.cards}>
            {cards.map((item) => (
                <div key={item.title}>
                    <Image src={item.icon} alt="Customized Tours" width={100} height={100}/>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
        </Container>
    );
  }
  
  export default WhyChooseUsSection;