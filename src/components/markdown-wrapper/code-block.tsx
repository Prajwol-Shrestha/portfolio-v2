import cn from "@/utils/cn";
import { CopyCheck, LucideCopy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "../ui/button";

interface CodeBlockProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function CodeBlock({
  inline,
  className,
  children,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // If it's inline code, render plain <code>
  if (inline) {
    return (
      <code className="bg-gray-500/50 px-1 py-[2px] rounded inline">
        {children}
      </code>
    );
  }

  const match = /language-(\w+)/.exec(className || "");
  const code = String(children).replace(/\n$/, "");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <span
      className={cn("relative", {
        "my-4": !inline,
      })}
    >
      {match ? (
        <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" showLineNumbers={true}>
          {code}
        </SyntaxHighlighter>
      ) : (
        <code className="bg-gray-500/50 px-1 py-[2px] rounded">{children}</code>
      )}

      {/* Copy button only for code blocks */}
      {match && (
        <Button
          size="sm"
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-gray-800 text-white  text-sm rounded flex items-center gap-1 hover:bg-gray-700 transition cursor-pointer"
        >
          <span>{copied ? <CopyCheck /> : <LucideCopy />}</span>
          {copied ? "Copied" : "Copy"}
        </Button>
      )}
    </span>
  );
}
