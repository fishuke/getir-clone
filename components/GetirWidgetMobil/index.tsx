import { FC } from 'react';

import styles from './mobilwidget.module.css';

export const GetirWidgetMobil: FC = () => {
    const classes = `flex justify-center ${styles.mobilbanner }`
    return(
        <div className={classes}>
            <img src="https://i.hizliresim.com/213hg5o.png" alt="" />
        </div>
    )
};