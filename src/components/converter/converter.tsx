import cn from "classnames";
import { diffTrimmedLines } from "diff";
import { useAutoprefixer } from "./autoprefixer";
import { CodeEditor, splitLines } from "../codeEditor";
import { CSS_EXAMPLE, getComment } from "./config";
import styles from "./converter.module.scss";
import { useState } from "react";
import { formatDiff } from "./formatDiff";

type Props = {
  className?: string;
};

export const Converter = ({ className, ...rest }: Props) => {
  const [input, updateInput] = useState(CSS_EXAMPLE);
  const [error, prefixed] = useAutoprefixer(input, "");
  const [filter, updateFilter] = useState("last 4 version");
  const commentText = getComment(filter);

  const output = String(error ? error.toString() : commentText + prefixed);

  const { addedLines, deletedLines } = formatDiff(
    diffTrimmedLines(input, output),
    splitLines(commentText).length,
  );

  return (
    <div className={cn(styles.root, className)} {...rest}>
      <CodeEditor
        className={styles.input}
        value={input}
        deletedLines={deletedLines}
        onChange={updateInput}
      />
      <CodeEditor className={styles.output} value={output} addedLines={addedLines} readOnly />
    </div>
  );
};
