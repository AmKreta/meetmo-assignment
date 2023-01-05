import { useState } from 'react';
import style from './leftToolbar.module.css';
import Image from 'next/image';

const images=[
    '/assets/graphql.svg',
    '/assets/folder.svg',
    '/assets/cube.svg',
    '/assets/people.svg',
    '/assets/play.svg',
    '/assets/thumbsup.svg',
    '/assets/equilize.svg',
    '/assets/person.svg'
];

export default function(){

    const [activeTool, setActiveTool]=useState(1);

    const clickHandler=function(e){
        const clickedIndex=parseInt(e.currentTarget.dataset['index']);
        setActiveTool(clickedIndex);
    }

    return <div className={style.leftToolbar}>
        {
            images.map((src, index)=><div 
                className={`${style.imageContainer} ${activeTool===index?style.active:null}`} 
                data-index={index}
                key={index}
                onClick={clickHandler}>
                    <Image src={src} key={index} alt='tools' width='25' height='25'/>
            </div>)
        }
    </div>
}