import Container from '@/src/components/ui/Container';
import styles from './TopSearchesSection.module.scss';
import Link from 'next/link';
import { trips } from './constants';
import Image from 'next/image';
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

let search_categories = [
  'Popular',
  'Food',
  'Sightseeing',
  'Rest',
  'Activities',
  'Other'
];

function TopSearchesSection() {
  return (
    <Container className={styles.root} id="top_searches_section">
      <h2>Top Searches</h2>
      <div className={styles.top_searches_container}>
        {search_categories.map((item, index) => (
          <Link href="#" key={index}>
            {item}
          </Link>
        ))}
        <button className={styles.more_places}>Explore More Places</button>
      </div>
      <div className={styles.locations_container}>
        {trips.map((item, index) => (
          <div key={index} className={styles.one_location_wrapper}>
            <Image
              src={item.image}
              alt={item.location}
              width={276}
              height={400}
            ></Image>
            <Link href="#">
              <h4>{item.title}</h4>
            </Link>
            <div className={styles.location}>
              <Image
                src={item.flag}
                alt={item.location}
                width={18}
                height={12}
              ></Image>
              <p>{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default TopSearchesSection;
