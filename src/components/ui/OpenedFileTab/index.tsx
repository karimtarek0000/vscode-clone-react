import { useContext } from "react";
import { useSelector } from "react-redux";
import {
  removeTabActive,
  selectFileTree,
  setClickedFile,
} from "../../../app/slices/fileTree";
import { useAppDispatch } from "../../../app/store";
import { ContextDropMenu } from "../../../context/ContextDropMenu";
import { IOpenedFileTab } from "../../../interfaces";
import RenderFileIcon from "../RenderFileIcon";
import RenderSVG from "../RenderSVG";
import Style from "./style.module.css";

const { tab, tabClose } = Style;

const OpenedFileTab = ({ file, idx }: IOpenedFileTab) => {
  const { id, fileName, fileContent } = file;

  // ----------------- STATE -----------------
  const { clickedFile } = useSelector(selectFileTree);
  const dispatch = useAppDispatch();

  // ----------------- CONTEXT -----------------
  const { setPosition, setShow, setIdxActiveTab } = useContext(ContextDropMenu);

  // ----------------- HANDLER -----------------
  const closeTabHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    dispatch(removeTabActive(idx));
  };
  const setClickedTabHandler = () => {
    dispatch(
      setClickedFile({
        id,
        fileName,
        fileContent,
      })
    );
    setIdxActiveTab(idx);
  };
  const contextMenuHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShow(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const classActiveTab = () => {
    return clickedFile.id === id ? "border-white/40" : "border-transparent";
  };

  return (
    <li
      className={`${tab} border-t ${classActiveTab()}`}
      onClick={setClickedTabHandler}
      onContextMenu={contextMenuHandler}
    >
      <RenderFileIcon fileName={file.fileName} />
      <span>{file.fileName}</span>
      <button onClick={closeTabHandler} className={tabClose}>
        <RenderSVG name="close" size="1rem" />
      </button>
    </li>
  );
};

export default OpenedFileTab;
