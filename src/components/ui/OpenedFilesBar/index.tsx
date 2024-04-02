import { useSelector } from "react-redux";
import { selectFileTree } from "../../../app/slices/fileTree";
import DropMenu from "../../../context/ContextDropMenu";
import OpenedFileTab from "../OpenedFileTab";

const OpenedFilesBar = () => {
  // ----------------- STATE -----------------
  const { openedFiles } = useSelector(selectFileTree);

  return (
    <DropMenu>
      <nav className="flex items-center text-xl">
        {openedFiles.map((file, idx) => {
          return <OpenedFileTab key={file.id} file={file} idx={idx} />;
        })}
      </nav>
    </DropMenu>
  );
};

export default OpenedFilesBar;
