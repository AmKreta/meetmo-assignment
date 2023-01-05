import styles from './home.module.css';
import LeftToolbarComponent from "../leftToolbar/leftToolbar.component";
import TopbarComponent from '../topbar/topbar.component';
import RightToolbarComponent from '../rightToolbar/rightToolbar.component';
import CanvasComponent from '../canvas/canvas.component';

export default function Home(){
    return <div className={styles.homeComponent}>
        <LeftToolbarComponent />
        <TopbarComponent />
        <CanvasComponent />
        <RightToolbarComponent />
    </div>
}