import { useState, useCallback, useMemo, useRef } from 'react';
import 'reactflow/dist/style.css';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    useReactFlow,
} from 'reactflow';
import ContextMenuComponent from '../contextMenu/contextMenu.component';
import videoNodeComponent from '../customNodes/videoNode/videoNode.component';
import iconNodeComponent from '../customNodes/iconNode/iconNode.component';

const nodeTypes = {
    videoNode: videoNodeComponent,
    iconNode: iconNodeComponent
}

const defaultEdgeOptions = {
    style: { strokeWidth: 2, stroke:'var(--blue-light)' },
};


export default function () {

    const [contextMenu, setContaxteMenu] = useState({ x: 0, y: 0, show: false });
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const connectionSource=useRef(null);


    const { project } = useReactFlow();

    const onConnect = useCallback((params) => {
        setEdges((eds) => addEdge(params, eds))
    }, []);

    const onContextMenu = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        const el = e.currentTarget;
        const { top, left } = el.getBoundingClientRect()
        const x = e.clientX - left;
        const y = e.clientY - top;
        setContaxteMenu({ x, y, show: true });
    }, [])

    const contextMenuItems = useMemo(function () {
        const position = project({ x: contextMenu.x, y: contextMenu.y });
        const id = `${Math.random()}`.slice(2);
        const res = [];
        res.push({
            title: 'add video node',
            onClick: () => setNodes(prevState => [...prevState, {
                id, type: 'videoNode', position, data: { label: 'amk' }
            }])
        });
        res.push({
            title: 'add icon node',
            onClick: () => setNodes(prevState => [...prevState, {
                id, type: 'iconNode', position, data: { label: 'amk' }
            }])
        });
        return res;
    }, [contextMenu]);

    const closeContextMenu = useCallback(function () {
        setContaxteMenu(prevState => ({ ...prevState, show: false }));
    }, []);

    return <div className='flex-1 relative' onContextMenu={onContextMenu} style={{width:'100%', height:'100%'}}>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition="top-right"
            nodeTypes={nodeTypes}
            defaultEdgeOptions={defaultEdgeOptions}
        >
            <MiniMap style={{ background: '#303640' }} />
            <Controls />
            <Background />
        </ReactFlow>
        {
            contextMenu.show
                ? <ContextMenuComponent
                    x={contextMenu.x}
                    y={contextMenu.y}
                    menuItems={contextMenuItems}
                    closeContextMenu={closeContextMenu}
                />
                : null
        }
    </div>
}