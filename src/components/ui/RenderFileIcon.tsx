import RenderSVG from "./RenderSVG";

interface IRenderFileIcon {
  fileName: string;
}

const RenderFileIcon = ({ fileName }: IRenderFileIcon) => {
  const ext = () => fileName.split(".").pop() as string;

  return <RenderSVG name={ext()} size="1.5rem" />;
};

export default RenderFileIcon;
