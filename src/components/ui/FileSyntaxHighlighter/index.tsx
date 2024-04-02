import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IFileSyntaxHighlighter {
  content: string;
}

const FileSyntaxHighlighter = ({
  content,
}: {
  content: IFileSyntaxHighlighter;
}) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "100vh",
        msOverflowX: "auto",
        fontSize: "1.5rem",
      }}
      showLineNumbers
    >
      {content && String(content)}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
