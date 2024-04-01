import { extFiles, extFolders } from "../../constans";
import { IRenderFileIcon } from "../../interfaces";
import RenderSVG from "./RenderSVG";

const RenderFileIcon = ({
  fileName,
  isFolder = false,
  isOpen,
}: IRenderFileIcon) => {
  const ext = (() => fileName.split(".").pop() as string)();

  // For files
  if (!isFolder)
    return (
      <RenderSVG name={extFiles.includes(ext) ? ext : "file"} size="1.5rem" />
    );

  // For folders
  if (ext && extFolders.has(ext)) {
    return isOpen ? (
      <RenderSVG name={`${ext}-open`} size="1.5rem" />
    ) : (
      <RenderSVG name={ext} size="1.5rem" />
    );
  }

  // For folder default
  return isOpen ? (
    <RenderSVG name="folder-open" size="1.5rem" />
  ) : (
    <RenderSVG name="folder" size="1.5rem" />
  );
};

export default RenderFileIcon;
