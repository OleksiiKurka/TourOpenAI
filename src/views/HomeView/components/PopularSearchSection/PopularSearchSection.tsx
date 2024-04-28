import Container from '@/src/components/ui/Container';
import styles from './PopularSearchSection.module.scss';
import Link from 'next/link';
let cities = [
  'New York',
  'Tokyo',
  'Porto',
  'Paris',
  'Miami',
  'New York',
  'Tokyo',
  'Los Angeles',
  'San Francisco',
  'Paris',
  'Miami',
  'New York',
  'Porto'
];
function PopularSearchSection() {
  return (
    <Container className={styles.root} id="popular_search_section">
      <h2>Popular Search</h2>
      <div>
        {cities.map((item, index) => (
          <Link href="#" key={index}>
            {item}
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default PopularSearchSection;
