import postcss from "postcss";
import autoprefixer from "autoprefixer";
import { useEffect, useState } from "react";

// Workaround broken postcss to string
const formatError = ({ name, message, input }: any) => {
  let lines = input.source.split(/\r?\n/);
  let start = Math.max(input.line - 3, 0);
  let end = Math.min(input.line + 2, lines.length);
  let maxWidth = String(end).length;

  let code = lines
    .slice(start, end)
    .map((line: any, index: any) => {
      let number = start + 1 + index;
      let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
      if (number === input.line) {
        let spacing =
          gutter.replace(/\d/g, " ") + line.slice(0, input.column - 1).replace(/[^\t]/g, " ");
        return ">" + gutter + line + "\n " + spacing + "^";
      }
      return " " + gutter + line;
    })
    .join("\n");
  return name + ": " + message + "\n\n" + code + "\n";
};

export function useAutoprefixer(inputCss: string, browserList?: string) {
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>();

  async function runAutoprefixer() {
    const params = { browsers: browserList, grid: "autoplace" } as autoprefixer.Options;

    postcss([autoprefixer(params)])
      .process(inputCss)
      .then((result) => {
        setOutput(result.css);
        setError(undefined);
      })
      .catch((error) => setError(formatError(error)));
  }

  useEffect(() => {
    runAutoprefixer();
  }, [inputCss]);

  return [error, output];
}
