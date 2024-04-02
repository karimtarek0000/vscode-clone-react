import { useSelector } from "react-redux";
import { selectFileTree } from "../app/slices/fileTree";

import FileSyntaxHighlighter from "./ui/FileSyntaxHighlighter";
import OpenedFilesBar from "./ui/OpenedFilesBar";
import WelcomePreview from "./WelcomePreview";

const Preview = () => {
  const { clickedFile, openedFiles } = useSelector(selectFileTree);

  if (!openedFiles.length) return <WelcomePreview />;

  return (
    <section>
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={clickedFile.fileContent} />
    </section>
  );
};

export default Preview;
