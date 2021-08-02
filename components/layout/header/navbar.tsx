import * as React from 'react';
import Box from '@material-ui/core/Box';
import Image from 'next/image'
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <Box sx={{height: '45px', backgroundColor: "primary.dark", overflow: 'hidden', paddingRight: "32px", paddingLeft: "32px"}}>
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
                </div>
            </div>
        </Box>
    );
}