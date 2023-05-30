import React, {useRef} from 'react';
import style from './Slider.module.sass'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import call from '../../assets/icons/Pagination/Call.svg'
import location from '../../assets/icons/Pagination/Location.svg'
import ArLeft from '../../assets/icons/Pagination/Left.svg'
import ArRight from '../../assets/icons/Pagination/Right.svg'
import img from "../../assets/images/Rectangle3.jpg"
import {Navigation, Scrollbar, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

const Slider = () => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    const visiblePhotos = [
        {id: 1, img: img, title: "img 1", call: call, location: location},
        {id: 2, img: img, title: "img 2", call: call, location: location},
        {id: 3, img: img, title: "img 3", call: call, location: location},
        {id: 4, img: img, title: "img 4", call: call, location: location},
        {id: 5, img: img, title: "img 5", call: call, location: location},
        {id: 6, img: img, title: "img 6", call: call, location: location},
        {id: 7, img: img, title: "img 7", call: call, location: location},
        {id: 8, img: img, title: "img 8", call: call, location: location}
    ]


    return (
        <div className={style.pagination}>
            <div className={style.container}>
                <div className={style.text}>Клиники</div>
                <div className={style.parent}>
                    <button  className={'.swiper-button-prev'} ref={navigationPrevRef}>
                        <img src={ArLeft} alt=""/>
                    </button>
                    <Swiper
                        className={style.inner}
                        modules={[Navigation, Scrollbar, Autoplay]}
                        autoplay={{delay: 2000 , disableOnInteraction: false}}
                        spaceBetween={24}
                        slidesPerView={3}
                        loop={true}
                        pagination={{clickable: true}}
                        onSwiper={(swiper) => {
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current
                                swiper.params.navigation.nextEl = navigationNextRef.current
                                swiper.navigation.destroy()
                                swiper.navigation.init()
                                swiper.navigation.update()
                            })}}
                    >
                        {visiblePhotos.map(i => <SwiperSlide
                            className={style.blocks} key={i.id}
                            >
                                <div className={style.forImg}>
                                    <img src={i.img} alt={i.title}/>
                                </div>
                                <h2>Медицинский центр Prime Clinic</h2>
                                <p>Современная и удобная клиника в центре Бишкека. Предоставляет приём пациентов по широкому
                                    профилю медицинских услуг.</p>
                                <div className={style.icons}>
                                    <div className={style.icon}>
                                        <img src={i.location} alt=""/>
                                        <span>Абдрахманова, 202</span>
                                    </div>
                                    <div className={style.icon}>
                                        <img src={i.call} alt=""/>
                                        <span>0 (312) 98-89-78</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <button ref={navigationNextRef} className={'.swiper-button-next'}>
                        <img src={ArRight} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slider;