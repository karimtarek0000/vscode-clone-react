import RecursiveFile from "./components/RecursiveFile";
import { files } from "./data";

const App = () => {
  return (
    <>
      {files.map((file) => {
        return <RecursiveFile key={file.fileName} fileTree={file} />;
      })}
    </>
  );
};

export default App;
