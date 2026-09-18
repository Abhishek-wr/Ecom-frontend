// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, EffectFade, Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import { bannerList } from "../../Utils";
// const colors = ["--color-banner-color1","--color-banner-color2","--color-banner-color3","--color-banner-color4"]
// const HomeBanner = () => {
//   return (
//     <div className="py-2 rounded-md ">
//       <Swiper grabCursor = {true}
//               autoplay = {{
//                 delay :4000,
//                 disableOnInteraction:false
//               }}
//               navigation
//               modules={[Pagination,EffectFade,Navigation,Autoplay]}
//               pagination={{clickable:true}}
//               scrollbar={{draggable:true}}
//               slidesPerView={1}
//       >
//             {bannerList.map((item,i)=>(
//               <SwiperSlide key = {item.id}>
//                 <div className={`carousel-item rounded-md sm:h-[500px] h-96 ${colors[i]}`}>
//                   <div className="flex items-center justify-center">
//                     <div className="text-center">
//                       <h3 className="text-3xl text-white font-bold">
//                         {item.title}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>

//               </SwiperSlide>
//             ))}
//       </Swiper>
//     </div>
    
//   );
// };

// export default HomeBanner;
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { bannerList } from "../../Utils";
import { Link } from "react-router-dom";


const colors = [
  
  "bg-purple-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-emerald-500",
  "bg-lime-500",
  "bg-rose-500",
  "bg-violet-500",
  "bg-fuchsia-500",
  "bg-sky-500",
];

const HomeBanner = () => {
  return (
    <div className="py-2 rounded-md">
      <Swiper
        grabCursor={true}
        loop={true}
        speed={800}
        
        
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter:true
        }}
        navigation
        modules={[Pagination, EffectFade, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {bannerList.map((item, i) => (
          <SwiperSlide key={item.id}>
            <div
              className={`carousel-item rounded-md sm:h-[500px] h-96 ${colors[i]}`}
            >
              <div className="flex items-center justify-center h-full">
                <div className="hidden lg:flex justify-center w-1/2 p-8">
                  <div className="text-center">
                    <h3 className="text-3xl text-white font-bold">
                      {item.title}
                    </h3>
                    <h1 className="text-5xl text-white font-bold mt-2">
                      {item.subtitle}
                    </h1>
                    <p className="text-white font-bold mt-4">
                      {item.description}
                    </p>
                    <Link className="mt-6 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800" 
                    to="/products"> 
                    Shop
                    </Link>
                  </div>
                </div>
              
                <div className="w-full flex justify-center lg:w-1/2 ">
                  <img src={item?.image} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;