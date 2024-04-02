import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IResizePanal {
  defaultLayout?: [number, number];
  leftSide: ReactNode;
  rightSide: ReactNode;
  showLeftPanel: boolean;
}
const ResizePanal = ({
  defaultLayout = [30, 70],
  leftSide,
  rightSide,
  showLeftPanel,
}: IResizePanal) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSaveId="condition"
    >
      {showLeftPanel && (
        <>
          <Panel defaultSize={defaultLayout[0]} collapsible minSize={10}>
            {leftSide}
          </Panel>
          <PanelResizeHandle className="w-1 bg-white/10" />
        </>
      )}

      <Panel defaultSize={defaultLayout[1]}>{rightSide}</Panel>
    </PanelGroup>
  );
};

export default ResizePanal;
