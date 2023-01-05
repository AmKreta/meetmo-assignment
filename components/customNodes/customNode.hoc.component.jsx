import { useCallback } from "react";
import { Handle, useReactFlow, useStoreApi } from "reactflow";
import style from './customNode.hoc.module.css';


export default function (WrappedComponent) {
  return function ModifiedComponent({ id, data }) {

    const { setNodes } = useReactFlow();
    const store = useStoreApi();

    const deleteNode=()=>{
        const { nodeInternals } = store.getState();
        setNodes(Array.from(nodeInternals.values()).filter(node=>node.id!==id))
    }

    return (
      <div className={style.container}>
        <WrappedComponent />
        <Handle position="top" type='target' id={id + "-top-handle"} />
        <Handle position="bottom" id={id + "-bottom-handle"} />
        <div className={style.cross} onClick={deleteNode}/>
      </div>
    );
  };
}
