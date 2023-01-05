import Image from 'next/image';
import SliderWithLabelComponent from '../sliderWithLabel/sliderWithLabel.component';
import SwitchWithLabelComponent from '../switchWithLabel/switchWithLabel.component';
import TextInputComponent from '../textInput/textInput.component';
import VideoComponent from '../video/video.component';
import style from './rightToolbar.module.css';

export default function () {
    return <div className={style.rightToolbar}>
        <VideoComponent />
        <div className={style.button}>
            <div className={style.arrowImageContainer}>
                <Image src='/assets/cross.svg' height='16' width='16' alt='icon' />
            </div>
            <div className={style.buttonText}>
                <div className='text-text-white'>Repellat voluptates corrupti</div>
                <div className='text-text-white'>Magnam veniam voluptatem</div>
            </div>
            <Image src='/assets/toggleMenu.svg' height='14' width='14' alt='icon' />
        </div>
        <div className='px-4 flex flex-col gap-2'>
            <TextInputComponent placeholder='Node Name' />
            <TextInputComponent placeholder='Dicta Amet Consequatur' />
            <TextInputComponent placeholder='Eos Et Rem' />
            <div className='flex items-center justify-between gap-2'>
                <TextInputComponent placeholder='Sit Nihil Expedita' styleObj={{ flexGrow: 1 }} />
                <TextInputComponent placeholder='Rerum' styleObj={{ flexGrow: 1 }} />
            </div>
        </div>
        <SwitchWithLabelComponent label='sit nihil expedita'/>
        <SliderWithLabelComponent label='Earum dolorem' unit='mbps'/>
        <SliderWithLabelComponent label='est explicabo dolore' unit='ms'/>
        <SliderWithLabelComponent label='optio in quisquam' unit='ms'/>
    </div>
}