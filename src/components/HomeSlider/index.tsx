import {FC} from 'react'
import Slider from 'react-slick';
import {RegisterCard} from '../RegisterCard'

export const HomeSlider: FC = () => {
    

	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: 'linear',
		arrows: false,
	};

	
    return(
        <div>
             <img className='lg:hidden xs:visible ' src="https://cdn.getir.com/misc/611e4a50c270af509cd486b5_banner_tr_1629375115516.jpeg" alt="" />
             <div
			className="hidden md:block  h-[500px] bg-purple-500 relative before:bg-gradient-to-r before:from-purple-600 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
			<Slider className="h-full" {...settings}>
				<div>
					<div className="h-[500px] bg-center bg-no-repeat bg-cover bg-img_1"></div>
				</div>
				<div>
					<div className="h-[500px] bg-center bg-no-repeat bg-cover bg-img_2"></div>
				</div>
			</Slider>
			<div className="absolute inset-0 px-8 z-[40] flex items-center">
				<div className="container flex mx-auto justify-between items-center">
					<div className="flex gap-y-10 flex-col">
						<img height={180} width={180}
						     src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
						     alt=""/>
						<h3 className="text-4xl font-semibold tracking-tighter	 text-white">
							Dakikalar içinde <br/> kapınızda
						</h3>
					</div>
					<RegisterCard/>
				</div>
			</div>
		</div>
        <div className='lg:hidden'>
        <RegisterCard/>
        </div>
        </div>
        
        
    )
   
};
