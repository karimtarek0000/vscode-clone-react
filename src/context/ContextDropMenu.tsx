import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IContextDropMenu {
  setShow: Dispatch<SetStateAction<boolean>>;
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
}

export const ContextDropMenu = createContext<IContextDropMenu>(
  {} as IContextDropMenu
);

interface IDropMenu {
  children: ReactNode;
}

const DropMenu = ({ children }: IDropMenu) => {
  const [position, setPosition] = useState({ x: 10, y: 10 });
  const [show, setShow] = useState<boolean>(false);

  return (
    <ContextDropMenu.Provider value={{ setPosition, setShow }}>
      <ul
        className="absolute z-30 *:block p-3 space-y-1 text-black bg-white rounded-md w-36 h-fit"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          display: show ? "block" : "none",
        }}
      >
        <button>Close</button>
        <button>Close All</button>
      </ul>

      {children}
    </ContextDropMenu.Provider>
  );
};

export default DropMenu;
