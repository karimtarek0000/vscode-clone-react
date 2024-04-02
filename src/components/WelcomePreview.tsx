import vscodeLogo from "../assets/vscode.svg";

const WelcomePreview = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={vscodeLogo} className="max-w-md opacity-5" alt="vscode-logo" />
    </div>
  );
};

export default WelcomePreview;
