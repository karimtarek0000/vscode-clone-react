import { useSelector } from "react-redux";
import { selectFileTree } from "./app/slices/fileTree";
import RecursiveFile from "./components/RecursiveFile";
import FileSyntaxHighlighter from "./components/ui/FileSyntaxHighlighter";
import OpenedFilesBar from "./components/ui/OpenedFilesBar";
import { files } from "./constans";

const App = () => {
  const { clickedFile } = useSelector(selectFileTree);

  return (
    <main className="flex pt-3 ">
      <aside>
        {files.map((file) => {
          return <RecursiveFile key={file.fileName} fileTree={file} />;
        })}
      </aside>

      <section>
        <OpenedFilesBar />

        {/* Code */}
        <FileSyntaxHighlighter content={clickedFile.fileContent} />
      </section>
    </main>
  );
};

export default App;
