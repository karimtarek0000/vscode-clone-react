import { useSelector } from "react-redux";
import { selectFileTree, setClickedFile } from "../../../app/slices/fileTree";
import { useAppDispatch } from "../../../app/store";
import RenderFileIcon from "../RenderFileIcon";
import RenderSVG from "../RenderSVG";
import Style from "./style.module.css";

const { tabsWrapper, tab, tabClose } = Style;

const OpenedFilesBar = () => {
  // ----------------- STATE -----------------
  const { openedFiles } = useSelector(selectFileTree);
  const dispatch = useAppDispatch();

  // ----------------- HANDLER -----------------
  const closeTabHandler = (e: MouseEvent<HTMLButtonElement, any>) => {
    e.stopPropagation();
  };

  return (
    <nav className={tabsWrapper}>
      {openedFiles.map((file) => {
        return (
          <li
            key={file.id}
            className={tab}
            onClick={() => dispatch(setClickedFile(file))}
          >
            <RenderFileIcon fileName={file.fileName} />
            <span>{file.fileName}</span>
            <button onClick={closeTabHandler} className={tabClose}>
              <RenderSVG name="close" size="1rem" />
            </button>
          </li>
        );
      })}
    </nav>
  );
};

export default OpenedFilesBar;
