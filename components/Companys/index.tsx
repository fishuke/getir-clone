import { FC } from 'react';
import styles from './companys.module.css';
export const Companys: FC = () => {
    const classes = `container ${styles.companys }`

    return(
        <div className={classes}>
            <p className={styles.companystext}> Kampanyalar</p>
            <div className='row'>
                <div className='col' >
                    <img width='400' src="https://cdn.getir.com/misc/5fb524d4c725f1530045cefc_banner_tr_1609343376255.jpeg" alt="" />
                </div>
                <div className='col'>
                    <img width='400' src="https://cdn.getir.com/misc/6069cee3f7be2b6472dc8b5f_banner_tr_1621926413356.jpeg" alt="" />
                </div>
                <div className='col'>
                    <img width='400' src="https://cdn.getir.com/promos/6117ddb00536373660359720_banner_tr_1628954096460.jpeg" alt="" />
                </div>
            </div>
        </div>
    )
};