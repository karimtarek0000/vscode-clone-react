import { useSelector } from "react-redux";
import { selectFileTree, setClickedFile } from "../../../app/slices/fileTree";
import { useAppDispatch } from "../../../app/store";
import { IFile } from "../../../interfaces";
import RenderFileIcon from "../RenderFileIcon";
import RenderSVG from "../RenderSVG";
import Style from "./style.module.css";

const { tab, tabClose } = Style;

const OpenedFileTab = ({ file }: { file: IFile }) => {
  const { id, fileName, fileContent } = file;

  // ----------------- STATE -----------------
  const { clickedFile } = useSelector(selectFileTree);
  const dispatch = useAppDispatch();

  // ----------------- HANDLER -----------------
  const closeTabHandler = (e: MouseEvent<HTMLButtonElement, any>) => {
    e.stopPropagation();
  };
  const setClickedTabHandler = () => {
    dispatch(
      setClickedFile({
        id,
        fileName,
        fileContent,
      })
    );
  };
  const classActiveTab = () => {
    return clickedFile.id === id ? "border-white/40" : "border-transparent";
  };

  return (
    <li
      className={`${tab} border-t ${classActiveTab()}`}
      onClick={setClickedTabHandler}
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
