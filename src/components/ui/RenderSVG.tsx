import { CSSProperties } from "react";

import sprite from "../../assets/icons/sprite.svg";

type RenderSVGTypes = {
  name: string;
  size?: string;
  className?: string;
  style?: CSSProperties;
};

function RenderSVG({
  name,
  size = "2.5rem",
  className,
  style,
}: RenderSVGTypes): JSX.Element {
  return (
    <svg className={className} width={size} height={size} style={style}>
      <use xlinkHref={`${sprite}#${name}`}>
        <title>{name}</title>
      </use>
    </svg>
  );
}

export default RenderSVG;
