import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { removeAllTabs, removeTabActive } from "../app/slices/fileTree";
import { useAppDispatch } from "../app/store";
import Style from "./style.module.css";
import { Provider } from "react-redux";

interface IContextDropMenu {
  setShow: Dispatch<SetStateAction<boolean>>;
  setIdxActiveTab: Dispatch<SetStateAction<number>>;
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
}

export const ContextDropMenu = createContext<IContextDropMenu>(
  {} as IContextDropMenu
);

interface IDropMenu {
  children: ReactNode;
}

const { contextMenuWrapper, btn } = Style;

const DropMenu = ({ children }: IDropMenu) => {
  const dispatch = useAppDispatch();
  const [position, setPosition] = useState({ x: 10, y: 10 });
  const [show, setShow] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const [idxActiveTab, setIdxActiveTab] = useState<number>(0);

  // ----------------- HANDLER -----------------
  const closeOneTab = () => dispatch(removeTabActive(idxActiveTab));
  const closeAllTabs = () => dispatch(removeAllTabs());

  // ----------------- LIFECYCLE HOOKS -----------------
  useEffect(() => {
    const clickedOutsideHandler = () => setShow(false);

    window.addEventListener("click", () => {
      if (menuRef.current?.style.display === "block") {
        clickedOutsideHandler();
      }
    });

    return () =>
      window.removeEventListener("click", () => clickedOutsideHandler);
  }, []);

  return (
    <ContextDropMenu.Provider value={{ setPosition, setShow, setIdxActiveTab }}>
      <ul
        ref={menuRef}
        className={contextMenuWrapper}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          display: show ? "block" : "none",
        }}
      >
        <button className={btn} onClick={closeOneTab}>
          Close
        </button>
        <button className={btn} onClick={closeAllTabs}>
          Close All
        </button>
      </ul>

      {children}
    </ContextDropMenu.Provider>
  );
};

export default DropMenu;
