// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
      }}
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="w-full max-h-[40rem] h-full overflow-hidden">
          <img
            className="max-w-full w-full h-full object-cover  "
            src="https://media.istockphoto.com/id/1279984422/photo/elementary-schoolchildren-wearing-a-protective-face-masks-in-the-classroom-education-during.jpg?b=1&s=612x612&w=0&k=20&c=BPZWpUHYX-KGGFJJ6ziwhr1zBm2-L29EP6Nw1KeQXmE="
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full max-h-[40rem] h-full overflow-hidden">
          <img
            className="max-w-full w-full h-full object-cover  "
            src="https://media.istockphoto.com/id/1031384160/photo/primary-school-kids-run-holding-hands-in-corridor-close-up.jpg?b=1&s=612x612&w=0&k=20&c=b-xhzxTIb3Gr3dBD_kaJ2WNTBf0cxkCRlVjGllCv1Fg="
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full max-h-[40rem] h-full overflow-hidden">
          <img
            className="max-w-full w-full h-full object-cover  "
            src="https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.jpg?b=1&s=612x612&w=0&k=20&c=zEb3WXVRX0z2Mgw0eDdfSqcAjEd1wPbtrq2yhw6f2D0="
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
