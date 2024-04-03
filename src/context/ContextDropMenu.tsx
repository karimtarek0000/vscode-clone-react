import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { removeAllTabs, removeTabActive } from "../app/slices/fileTree";
import { useAppDispatch } from "../app/store";

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

const DropMenu = ({ children }: IDropMenu) => {
  const dispatch = useAppDispatch();
  const [position, setPosition] = useState({ x: 10, y: 10 });
  const [show, setShow] = useState<boolean>(false);
  const [idxActiveTab, setIdxActiveTab] = useState<number>(0);

  // ----------------- HANDLER -----------------
  const closeOneTab = () => dispatch(removeTabActive(idxActiveTab));
  const closeAllTabs = () => dispatch(removeAllTabs());

  // ----------------- LIFECYCLE HOOKS -----------------
  useEffect(() => {
    const clickedOutsideHandler = () => {
      setShow(false);
    };
    window.addEventListener("click", clickedOutsideHandler);

    return () =>
      window.removeEventListener("click", () => clickedOutsideHandler);
  }, []);

  return (
    <ContextDropMenu.Provider value={{ setPosition, setShow, setIdxActiveTab }}>
      <ul
        className="absolute z-30 *:block p-3 space-y-1 text-black bg-white rounded-md w-36 h-fit"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          display: show ? "block" : "none",
        }}
      >
        <button onClick={closeOneTab}>Close</button>
        <button onClick={closeAllTabs}>Close All</button>
      </ul>

      {children}
    </ContextDropMenu.Provider>
  );
};

export default DropMenu;
