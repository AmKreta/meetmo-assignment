import Image from 'next/image';
import style from './video.module.css';

const iconSize = 14;

export default function () {
    return <div className={style.videoContainer}>
        <div className={style.video}>
            <Image src='/assets/3dVidPreview.png' alt='preview' fill />
        </div>
        <div className={style.controller}>
            <div className='flex items-center gap-4'>
                <div className=' flex items-center gap-3'>
                    <Image src='/assets/shuffle.svg' alt='shuffle' height={iconSize} width={iconSize} />
                    <Image src='/assets/vidSpeed.svg' alt='vidSpeed' height={iconSize} width={iconSize} />
                    <Image src='/assets/volume.svg' alt='vol' height={iconSize} width={iconSize} />
                </div>
                <div className=' flex items-center gap-2'>
                    <Image src='/assets/backward.svg' alt='backward' height={iconSize} width={iconSize} />
                    <Image src='/assets/prev.svg' alt='prev' height={iconSize} width={iconSize} />
                    <Image src='/assets/arrowBack.svg' alt='arrowBack' height={iconSize - 4} width={iconSize - 4} />
                    <span className=' text-text-white text-xs'>00:00:27:09</span>
                    <Image src='/assets/arrowFront.svg' alt='arrowFront' height={iconSize - 4} width={iconSize - 4} />
                    <Image src='/assets/next.svg' alt='next' height={iconSize} width={iconSize} />
                    <Image src='/assets/forward.svg' alt='forward' height={iconSize} width={iconSize} />
                </div>
            </div>
            <Image src='/assets/fullScreen.svg' alt='fullScreen' height={iconSize} width={iconSize} />
        </div>
    </div>
}