import { FC } from 'react';
import './companys.module.scss';
export const Companys: FC = () => {
    return(
        <div>
<p className='companystext hidden lg:grid'> Kampanyalar</p>
<div className='flex justify-center companys'>

            <div className='container'>
                <div className='hidden lg:grid grid-cols-3'>
                    <div className='' >
                        <img width='400' src="https://cdn.getir.com/misc/5fb524d4c725f1530045cefc_banner_tr_1609343376255.jpeg" alt="" />
                    </div>
                    <div className=''>
                        <img width='400' src="https://cdn.getir.com/misc/6069cee3f7be2b6472dc8b5f_banner_tr_1621926413356.jpeg" alt="" />
                    </div>
                    <div className=''>
                        <img width='400' src="https://cdn.getir.com/promos/6117ddb00536373660359720_banner_tr_1628954096460.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    
        </div>
        )
        
};