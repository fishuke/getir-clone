import { FC } from 'react';

import  './mobilwidget.module.scss';

export const GetirWidgetMobil: FC = () => {
    return(
        <div className='flex justify-center mobilbanner'>
            <img className='hidden lg:grid desktop-img' src="https://i.hizliresim.com/213hg5o.png" alt="" />
            <img className='lg:hidden rounded-none h-auto w-auto' src="https://cdn.getir.com/promos/6117ddb00536373660359720_banner_tr_1628954096460.jpeg" alt="" />
        </div>
    )
};