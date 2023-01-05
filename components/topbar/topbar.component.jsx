import Image from 'next/image';
import { useState } from 'react';
import style from './topbar.module.css';

const leftToolsImages = [
    '/assets/connection.svg',
    '/assets/pin.svg',
    '/assets/window.svg'
]

export default function () {
    const [activeLeftTool, setActiveLeftTool] = useState(0);

    const onLeftToolItemClick = function (e) {
        const clickedIndex = parseInt(e.currentTarget.dataset['index']);
        setActiveLeftTool(clickedIndex);
    }

    return (<div className={style.topbar}>
        <div className={style.leftTools}>
            {leftToolsImages.map((src, index) => <div
                key={index}
                className={`${style.leftToolIconContainer} ${activeLeftTool === index ? style.activeLeftTool : null}`}
                data-index={index}
                onClick={onLeftToolItemClick}
            >
                <Image src={src} key={index} alt='tools' height='25' width='25' />
            </div>)}
        </div>
        <div className={style.newProject}>
            <span className='mr-2 text-text-white'>New project</span>
            <Image src='/assets/expandMore.svg' alt='icon' height='10' width='10' />
        </div>
        <div className='flex items-center gap-4'>
            <div className={style.publishButton}>
                <Image src='/assets/plus.svg' alt='icon' height='25' width='25' />
                <span>Publish</span>
            </div>
            <Image src='/assets/notification.svg' alt='icon' height='30' width='30' />
            <div className={style.profileButton}>
                <Image src='/assets/dp.png' alt='icon' height='35' width='35' />
                <span>John Remoro</span>
                <Image src='/assets/expandMore.svg' alt='icon' height='10' width='10' />
            </div>
        </div>
    </div>);
}