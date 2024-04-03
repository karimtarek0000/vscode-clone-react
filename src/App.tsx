import Explorer from "./components/Explorer";
import Preview from "./components/Preview";
import ResizePanal from "./components/ui/ResizePanal";

const App = () => {
  return (
    <main className="flex h-screen py-2 pt-3 whitespace-normal">
      <ResizePanal
        showLeftPanel={true}
        leftSide={<Explorer />}
        rightSide={<Preview />}
      />
    </main>
  );
};

export default App;
