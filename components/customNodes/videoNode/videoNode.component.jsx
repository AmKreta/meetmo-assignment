import Image from 'next/image';
import React, { memo } from 'react';
import customNodeHocComponent from '../customNode.hoc.component';
import style from './videoNode.module.css';

function videoNode({ id, data }) {
  return (
   <div className={style.nodeContainer}> 
        <div className={style.iconContainer}>
            <Image src='/assets/video.svg' alt='video' fill/>
        </div>
        <div className={style.imageContainer}>
        <Image src='/assets/vidNodePreview.png' alt='video' fill/>
        </div>
    </div>
  );
}

export default memo(customNodeHocComponent(videoNode));
