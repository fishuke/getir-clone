import { FC } from 'react';
import  './homeslider.module.css';

import {RegisterCard} from '../RegisterCard'
export const HomeSlider: FC = () => {
    return(
        <div>
        <img className='hidden md:block lg:absolute  z-11' src="https://i.hizliresim.com/9p2ol9v.png" width='100%' alt="" />
        <img className='lg:hidden xs:visible ' src="https://cdn.getir.com/misc/611e4a50c270af509cd486b5_banner_tr_1629375115516.jpeg" alt="" />
        <RegisterCard></RegisterCard>
        {/* <img className={styles.getirslidelogo} src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" /> */}
    </div>
    )
   
};
