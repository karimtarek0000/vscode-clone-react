import { useSelector } from "react-redux";
import { selectFileTree } from "../../../app/slices/fileTree";
import OpenedFileTab from "../OpenedFileTab";

const OpenedFilesBar = () => {
  // ----------------- STATE -----------------
  const { openedFiles } = useSelector(selectFileTree);

  return (
    <nav className="flex items-center text-xl">
      {openedFiles.map((file) => {
        return <OpenedFileTab key={file.id} file={file} />;
      })}
    </nav>
  );
};

export default OpenedFilesBar;
