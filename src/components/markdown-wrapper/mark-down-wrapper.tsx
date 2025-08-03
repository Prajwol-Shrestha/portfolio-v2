import Markdown from "react-markdown";
import Typography from "../ui/Typography";

export default function MarkDownWrapper({ markdown }: { markdown: string }) {
  return (
    <Markdown
      children={markdown}
      components={{
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
          <Typography variant={"body1"} component="h5" className="font-bold my-4">
            {children}
          </Typography>
        ),
        h6: ({ children }) => (
          <Typography variant={"body1"} component="h6" className="font-bold my-4">
            {children}
          </Typography>
        ),
        p: ({ children }) => (
          <Typography variant={"body1"} component="p" className="my-4">
            {children}
          </Typography>
        ),
      }}
    />
  );
}
