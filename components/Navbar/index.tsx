import type { FC } from 'react';
import { Box } from '@material-ui/core';
import Image from 'next/image';
import styles from './navbar.module.css';

export const Navbar: FC = () => {
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
                <div className={styles.container}>
                    <div className={styles['nav-list']}>
                        <div className={styles['nav-item']}>
                            <Image
                                src="/images/getir.svg"
                                alt="getir logo"
                                width={'36px'}
                                height={16}
                            />
                        </div>
                        <div className={styles['nav-item']}>
                            <Image
                                src="/images/getir-yemek.svg"
                                alt="getir yemek"
                                width={'87px'}
                                height={16}
                            />
                        </div>
                        <div className={styles['nav-item']}>
                            <Image
                                src="/images/getir-su.svg"
                                alt="getir su"
                                width={'87px'}
                                height={16}
                            />
                        </div>
                        <div className={styles['nav-item']}>
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
            {/* <Box sx={{ height: '75px', backgroundColor: 'primary.main' }}></Box> */}
        </>
    );
};
