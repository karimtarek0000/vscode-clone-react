import Coding from "./components/Coding";
import Explorer from "./components/Explorer";
import ResizePanal from "./components/ui/ResizePanal";

const App = () => {
  return (
    <main className="flex h-screen pt-3">
      <ResizePanal
        showLeftPanel={true}
        leftSide={<Explorer />}
        rightSide={<Coding />}
      />
    </main>
  );
};

export default App;
