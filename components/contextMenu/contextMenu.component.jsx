import style from "./contextMenu.module.css";
import { createPortal } from "react-dom";

//{icon:ReactIcon, title:'', onClick:function}[]
export default function ({ menuItems, x, y, closeContextMenu }) {

  const clickHandler=function(e){
    const el=e.currentTarget;
    const clickedIndex=parseInt(el.dataset['index']);
    const clickedItem=menuItems[clickedIndex];
    clickedItem.onClick();
    closeContextMenu();
  }

  return (
    <>
      <div style={{ top: y, left: x }} className={style.contextMenuContainer}>
        {menuItems.map((item, index) => (
          <div key={index} onClick={clickHandler} data-index={index}>
            {item.icon ? <item.icon /> : null}
            <div className={style.contextMenuItems}>{item.title}</div>
          </div>
        ))}
      </div>
      {createPortal(<div onClick={closeContextMenu} className={style.overlay}/>, document.body)}
    </>
  );
}
