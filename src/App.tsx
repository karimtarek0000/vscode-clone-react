import RecursiveFile from "./components/RecursiveFile";
import OpenedFilesBar from "./components/ui/OpenedFilesBar";
import { files } from "./constans";

const App = () => {
  return (
    <main className="flex pt-3 ">
      <aside>
        {files.map((file) => {
          return <RecursiveFile key={file.fileName} fileTree={file} />;
        })}
      </aside>

      <section>
        <OpenedFilesBar />
      </section>
    </main>
  );
};

export default App;
