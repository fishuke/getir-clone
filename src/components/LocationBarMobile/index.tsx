import { FC } from 'react';
import Image from 'next/image';

export const LocationBarMobile: FC = () => {
    return (
        <div className='flex lg:hidden rounded-none'>
            <div className='flex-initial -ml-6 mt-2 mb-2'>
                <Image src='/images/pin.svg' 
                className='top-6'
                alt="getir su"
                width={'87px'}
                height={20}
                />
            </div>
            <div className='-ml-6 flex-initial mt-2 mb-2'>
                <p>Teslimat Adresi Belirle</p>
            </div>
        </div>
    );
};