import { useSelector } from "react-redux";
import { selectFileTree } from "../../../app/slices/fileTree";
import OpenedFileTab from "../OpenedFileTab";

const OpenedFilesBar = () => {
  // ----------------- STATE -----------------
  const { openedFiles } = useSelector(selectFileTree);

  return (
    <nav className="flex items-center text-xl">
      {openedFiles.map((file, idx) => {
        return <OpenedFileTab key={file.id} file={file} idx={idx} />;
      })}
    </nav>
  );
};

export default OpenedFilesBar;
