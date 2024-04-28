'use client';
import Container from '@/src/components/ui/Container';
import styles from './CategoriesSection.module.scss';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { categories } from './constants';
import Link from 'next/link';
import Image from 'next/image';
import RightArrowIcon from '@/src/assets/icons/right-arrow.svg';

function CategoriesSection() {
  return (
    <Container className={styles.root}>
      <h2>Categories</h2>
      <div className={styles.categories_container}>
        <Swiper
          modules={[Navigation, FreeMode, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          pagination={true}
          className={styles.swiper_container}
          slidesPerView={4}
          spaceBetween={15}
          freeMode={true}
        >
          {categories.map((item, index) => (
            <SwiperSlide>
              <Link href="#" key={index}>
                <div className={styles.wrapper}>
                  <Image
                    src={item.image}
                    alt="Categories"
                    width={300}
                    height={200}
                  />
                  <h3>{item.title}</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.buttons}>
          <button className="swiper-button-prev">
            <Image
              src={RightArrowIcon}
              alt="Left Arrow Icon"
              className={styles.left_arrow_icon}
            />
          </button>
          <button className="swiper-button-next">
            <Image src={RightArrowIcon} alt="Right Arrow Icon" />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default CategoriesSection;
