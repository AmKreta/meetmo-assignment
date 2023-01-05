import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
import CanvasMainComponent from '../canvasMain/canvasMain.component';
import CanvasTopBarComponent from '../canvasTopBar/canvasTopBar.component';
import style from './canvas.module.css';

export default function Canvas () {
    return <div className={style.canvas}>
        <CanvasTopBarComponent />
        <ReactFlowProvider>
            <CanvasMainComponent />
        </ReactFlowProvider>
    </div>
}