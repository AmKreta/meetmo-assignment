import Image from 'next/image';
import style from './canvasTopBar.module.css';


const images=[
    '/assets/graphqlWhite.svg',
    '/assets/pointer.svg',
    '/assets/pan.svg',
    '/assets/connectionPlus.svg'
];

export default function(){
    return <div className={style.topBarContainer}>
        {
            images.map((src,index)=><div key={index} className='flex items-center gap-1.5 hover:cursor-pointer'>
                <Image src={src} alt='icon' height='20' width='20' />
                <Image src='/assets/expandMore.svg' alt='icon' height='10' width='10' />    
            </div>)
        }
    </div>
}