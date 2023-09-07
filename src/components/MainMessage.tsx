import React from 'react';
import styles from './MainMessage.module.css';
import { ArrowDownward } from '@mui/icons-material';

const MainMessage = () => {
    return (
        <div className={styles.mainMessage}>
            <div>
                <ArrowDownward color='primary' />
            </div>
            <div>Sigan al top 3</div>
            <div>
                <ArrowDownward color='primary' />
            </div>
        </div>
    )
};

export default MainMessage;
