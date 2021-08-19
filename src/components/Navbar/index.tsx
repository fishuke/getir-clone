import type { FC } from 'react';
import { Box } from '@material-ui/core';
import Image from 'next/image';
import'./navbar.module.scss';
const links={
    home:'/',
    yemek:'/yemek'
}
export interface ILayoutProps {
    img: string;
}
export const Navbar: FC<ILayoutProps> = ({ children,img }) => {
    
    return (
        <>
            <Box
                sx={{
                    height: '45px',
                    backgroundColor: 'primary.dark',
                    overflow: 'hidden',
                    paddingRight: '32px',
                    paddingLeft: '32px',
                }}
            >
                <div className='container'>
                    <div className='nav-list'>
                        <div className='nav-item'>
                            <a href={links.home}>
                                <Image
                                    src="/images/getir.svg"
                                    alt="getir logo"
                                    width={'36px'}
                                    height={16}
                                />
                            </a>
                           
                        </div>
                        <div className='nav-item'>
                            <a href={links.yemek}>
                                <Image
                                    src="/images/getir-yemek.svg"
                                    alt="getir yemek"
                                    width={'87px'}
                                    height={16}
                                />
                            </a>
                            
                        </div>
                        <div className='nav-item'>
                            <Image
                                src="/images/getir-su.svg"
                                alt="getir su"
                                width={'87px'}
                                height={16}
                            />
                        </div>
                        <div className='nav-item'>
                            <Image
                                src="/images/getir-buyuk.svg"
                                alt="getir büyük"
                                width={'87px'}
                                height={16}
                            />
                        </div>
                    </div>
                </div>
            </Box>
            <Box className='lg:hidden' sx={{ height: '55px', backgroundColor: 'primary.main' }}>
                <img className=' getir-mobile-logo' src={img} alt=""/>
            </Box>
        </>
    );
};
