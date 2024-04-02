import { useSelector } from "react-redux";
import { selectFileTree } from "../app/slices/fileTree";
import vscodeImg from "../assets/vscode.svg";
import FileSyntaxHighlighter from "./ui/FileSyntaxHighlighter";
import OpenedFilesBar from "./ui/OpenedFilesBar";

const Coding = () => {
  const { clickedFile, openedFiles } = useSelector(selectFileTree);

  if (!openedFiles.length) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={vscodeImg} className="max-w-md" alt="" />
      </div>
    );
  }

  return (
    <section>
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={clickedFile.fileContent} />
    </section>
  );
};

export default Coding;
