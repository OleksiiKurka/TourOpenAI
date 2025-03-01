'use client';
import styles from './CityOverviewSection.module.scss';
import Image from 'next/image';
import CasinoImage from '@/src/assets/casino.jpg';
import RightArrowIcon from '@/src/assets/icons/right-arrow_2.svg';
import LongRightArrowIcon from '@/src/assets/icons/long-right-arrow.svg';
import { SwiperSlide, Swiper } from 'swiper/react';
import Link from 'next/link';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { swiper_items } from './constants';

function CityOverviewSection() {
  return (
    <div className={styles.root}>
      <div className={styles.image_container}>
        <Image src={CasinoImage} alt="Image of Selected City" fill></Image>
        <div className={styles.buttons}>
          <button className="city-overview-swiper-button-prev">
            <Image
              src={RightArrowIcon}
              alt="Left Arrow Icon"
              className={styles.left_arrow_icon}
            />
          </button>
          <button className="city-overview-swiper-button-next">
            <Image src={RightArrowIcon} alt="Right Arrow Icon" />
          </button>
        </div>
        <div className={styles.line}></div>
        <p className={styles.slide_number}>01</p>
      </div>
      <div className={styles.description_container}>
        <h6 className={styles.hashtag_title}># Easy Planning</h6>
        <h3>Monaco, Monaco</h3>
        <p>
          Experience the glamour of Monaco—opulent casinos, pristine beaches,
          and scenic harbors by the azure sea. With rich history and luxury at
          every turn, it’s an escape like no other.
        </p>
        <Swiper
          modules={[Navigation, FreeMode]}
          navigation={{
            nextEl: '.city-overview-swiper-button-next',
            prevEl: '.city-overview-swiper-button-prev'
          }}
          pagination={true}
          className={styles.swiper_container}
          slidesPerView={4}
          spaceBetween={15}
          freeMode={true}
        >
          {swiper_items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.wrapper}>
                <Image
                  className={styles.img}
                  src={item.image}
                  alt="Locations"
                  fill
                />
                <div className={styles.bottom_container}>
                  <h4>{item.location}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.bottom_wrapper}>
          <div className={styles.circle}></div>
          <h6 className={styles.explore}>Explore Monaco, Monaco</h6>
          <Image
            className={styles.arrow}
            src={LongRightArrowIcon}
            alt="Arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default CityOverviewSection;
