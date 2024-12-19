import React from "react";
import Card from "./Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function GroupCard({titleCard}) {
  return (
    <>
        <div className="flex pl-5">
          <Swiper spaceBetween={20} slidesPerView="auto">
            <SwiperSlide style={{ width: "16rem" }}>
              <Card title={titleCard} description="1 Sabor" />
            </SwiperSlide>
            <SwiperSlide style={{ width: "16rem" }}>
              <Card title={titleCard} description="2 Sabores" />
            </SwiperSlide>
            <SwiperSlide style={{ width: "16rem" }}>
              <Card title={titleCard} description="3 Sabores" />
            </SwiperSlide>
            <SwiperSlide style={{ width: "16rem" }}>
              <Card title={titleCard} description="4 Sabores" />
            </SwiperSlide>
          </Swiper>
        </div>
    </>
  );
}
