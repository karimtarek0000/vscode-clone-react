import { files } from "../data";
import RecursiveFile from "./RecursiveFile";

const Explorer = () => {
  return (
    <aside className="w-fit">
      {files.map((file) => {
        return <RecursiveFile key={file.fileName} fileTree={file} />;
      })}
    </aside>
  );
};

export default Explorer;
