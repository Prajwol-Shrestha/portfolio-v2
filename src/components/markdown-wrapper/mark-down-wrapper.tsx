import Markdown from "react-markdown";
import Typography from "../ui/Typography";
import remarkGfm from "remark-gfm";
import CodeBlock from "./code-block";

export default function MarkDownWrapper({ markdown }: { markdown: string }) {
  return (
    <Markdown
      children={markdown}
      remarkPlugins={[remarkGfm]} // <-- Add this
      components={{
        code: CodeBlock,
        h1: ({ children }) => (
          <Typography variant={"h5"} component="h1" className="font-bold my-4">
            {children}
          </Typography>
        ),
        h2: ({ children }) => (
          <Typography variant={"h5"} component="h2" className="font-bold my-4">
            {children}
          </Typography>
        ),
        h3: ({ children }) => (
          <Typography variant={"h5"} component="h3" className="font-bold my-4">
            {children}
          </Typography>
        ),
        h4: ({ children }) => (
          <Typography variant={"h6"} component="h4" className="font-bold my-4">
            {children}
          </Typography>
        ),
        h5: ({ children }) => (
          <Typography
            variant={"body1"}
            component="h5"
            className="font-bold my-4"
          >
            {children}
          </Typography>
        ),
        h6: ({ children }) => (
          <Typography
            variant={"body1"}
            component="h6"
            className="font-bold my-4"
          >
            {children}
          </Typography>
        ),
        p: ({ children }) => (
          <Typography variant={"body1"} component="p" className="my-4">
            {children}
          </Typography>
        ),
        table: ({ children }) => (
  <div className="overflow-x-auto my-6">
    <table className="min-w-full border-collapse border border-gray-300/30">
      {children}
    </table>
  </div>
),
th: ({ children }) => (
  <th className="border border-gray-300/30 px-4 py-2 font-semibold text-left">
    {children}
  </th>
),
td: ({ children }) => (
  <td className="border border-gray-300/30 px-4 py-2">
    {children}
  </td>
),
tr: ({ children }) => (
  <tr className="even:bg-gray-100/10">{children}</tr> // subtle zebra striping
),

      }}
    />
  );
}
