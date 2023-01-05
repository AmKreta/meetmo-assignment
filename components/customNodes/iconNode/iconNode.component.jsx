import Image from 'next/image';
import React, { memo } from 'react';
import CustomNodeHocComponent from '../customNode.hoc.component';
import style from './iconNode.module.css';

function IconNode({ id, data }) {
    return (
        <div className={style.nodeContainer}>
            <div className={style.iconContainer}>
                <Image src='/assets/cross.svg' alt='icon' fill/>
            </div>
        </div>
    );
}

export default memo(CustomNodeHocComponent(IconNode));
