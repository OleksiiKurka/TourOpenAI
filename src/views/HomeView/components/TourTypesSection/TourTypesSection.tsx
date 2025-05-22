import Container from '@/src/components/ui/Container';
import styles from './TourTypesSection.module.scss';
import { tour_types } from './constants';
import Image from 'next/image';
import Link from 'next/link';
function TourTypesSection() {
    return (
        <Container className={styles.root}>
        <h2>Tour Types</h2>
        <div className={styles.tour_types_container}>
            {tour_types.map((item) => (
                <Link href="#" key={item.title} className={styles.tour_types}>
                    <Image src={item.image} alt="Tour Types" width={400} height={300}/>
                    <h3>{item.title}</h3>
                </Link>
            ))}
        </div>
        </Container>
    );
  }
  
  export default TourTypesSection;