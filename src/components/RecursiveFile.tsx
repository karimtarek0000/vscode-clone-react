import { useState } from "react";
import { setClickedFile, setOpenedFiles } from "../app/slices/fileTree";
import { useAppDispatch } from "../app/store";
import { IFile } from "../interfaces";
import RenderFileIcon from "./ui/RenderFileIcon";
import RenderSVG from "./ui/RenderSVG";

const RecursiveFile = ({ fileTree }: { fileTree: IFile }) => {
  const { id, fileName, isFolder, children, fileContent } = fileTree;
  // ----------------- STATE -----------------
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  // ----------------- HANDLER -----------------
  const toggleHandler = () => setIsOpen((prev) => !prev);
  const setOpenedFilesHandler = () => {
    dispatch(setOpenedFiles(fileTree));
    dispatch(
      setClickedFile({
        id,
        fileName,
        fileContent,
      })
    );
  };

  return (
    <div className="flex flex-col gap-2 text-2xl ms-4">
      <div className="flex items-center gap-2">
        {isFolder ? (
          <button onClick={toggleHandler} className="flex items-center gap-x-2">
            <RenderSVG
              name={isOpen ? "arrow-down" : "arrow-right"}
              size="1rem"
            />
            <RenderFileIcon
              isOpen={isOpen}
              fileName={fileName}
              isFolder={isFolder}
            />
            <span>{fileName}</span>
          </button>
        ) : (
          <button
            onClick={setOpenedFilesHandler}
            className="flex items-center gap-x-1"
          >
            <RenderFileIcon fileName={fileName} />
            <span>{fileName}</span>
          </button>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file) => {
          return <RecursiveFile key={file.fileName} fileTree={file} />;
        })}
    </div>
  );
};

export default RecursiveFile;
