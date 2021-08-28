import {useState, useEffect,FC} from 'react'
import Slider from "react-slick";
import Banners from '../../api/banners.json'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import './companys.module.scss';

type Props = {
  onClick: MouseEventHandler,
  className: string
}

const NextButton : FC = ({ onClick,className }: Props) => {
	return (
		<button className={`${className} text-purple-700`} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}

const PrevButton : FC  = ({ onClick,className }: Props) => {
	return (
		<button className={`${className} text-purple-700`} onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}


export const Companys: FC = () => {

    const [banners, setBanners] = useState([])

	useEffect(() => {
		setBanners(Banners)
	}, [])

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
        responsive: [
        {
  breakpoint: 568,
    settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
  }
      ]
	};

    return(
        <>
			<div className="md:mt-8 m-3 lg:mx-60">
				<h3 className="font-semibold text-sm mb-3">Kampanyalar</h3>
				<Slider className="-mx-2 relative" {...settings}>
					{banners && banners.map(banner => (
						<div key={banner.id} className="px-2">
							<img src={banner.image} className="w-full rounded-lg" />
						</div>
					))}
				</Slider>
			</div>
		</>
        )
        
};