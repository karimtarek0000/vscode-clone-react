import { useState } from "react";
import { IFile } from "../interfaces";
import RenderFileIcon from "./ui/RenderFileIcon";
import RenderSVG from "./ui/RenderSVG";

const RecursiveFile = ({
  fileTree: { fileName, isFolder, children },
}: {
  fileTree: IFile;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleHandler = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col gap-2 text-2xl ms-5">
      <div className="flex items-center gap-2">
        {isFolder ? (
          <button onClick={toggleHandler} className="flex items-center gap-x-2">
            <RenderSVG
              name={isOpen ? "arrow-down" : "arrow-right"}
              size="1rem"
            />
            <RenderSVG name="folder" size="1.5rem" />
            <span>{fileName}</span>
          </button>
        ) : (
          <button className="flex items-center gap-x-1">
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
