import Container from '@/src/components/ui/Container';
import styles from './HeroSection.module.scss';
import Link from 'next/link';
import DownArrow from '@/src/assets/icons/down_arrow.svg';
import Image from 'next/image';
function HeroSection() {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
        <Link href="#popular_search_section">
          Explore
          <Image src={DownArrow} width={18} height={10} alt="down arrow" />
        </Link>
      </Container>
    </div>
  );
}

export default HeroSection;
