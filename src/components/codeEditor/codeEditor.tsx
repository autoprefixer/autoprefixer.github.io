import cn from "classnames";
import "highlight.js/styles/monokai-sublime.css";

// @ts-ignore
import hljs from "highlight.js/lib/core";
// @ts-ignore
import css from "highlight.js/lib/languages/css";
import { noop } from "../../../shared/utils";
import styles from "./codeEditor.module.scss";

hljs.registerLanguage("css", css);

type Props = {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  addedLines?: number[];
  deletedLines?: number[];
  className?: string;
  minLinesCount?: number;
};

export const splitLines = (value: string) => value.split(/\r?\n/);

export const CodeEditor = ({
  className,
  value,
  addedLines = [],
  deletedLines = [],
  onChange = noop,
  minLinesCount = 1,
  readOnly = false,
}: Props) => {
  const linesCount = Math.max(splitLines(value).length, minLinesCount);
  const linesArr = Array(linesCount).fill("");
  const highlightedSyntax = hljs.highlight("css", value).value;
  const highlighted = splitLines(highlightedSyntax).reduce((acc, line, lineNumber) => {
    if (addedLines.includes(lineNumber)) acc += `<div class="added">${line}</div>`
    else if (deletedLines.includes(lineNumber)) acc += `<div class="deleted">${line}</div>`
    else {
      const prevLineDiv = addedLines.includes(lineNumber - 1) || deletedLines.includes(lineNumber - 1);
      acc += `${prevLineDiv ? "" : "\n"}${line}`;
    }
    return acc;
  });

  // console.info(`# [splitLines(highlightedSyntax)]`, splitLines(highlightedSyntax))
  // console.info(`# [highlighted]`, highlighted)

  return (
    <div className={cn(styles.root, className, "hljs")}>
      <div className={styles.holder}>
        <div className={styles.lineNumbers}>
          {linesArr.map((_, index) => (
            <div
              key={index}
              className={styles.lineNumber}
              data-added={addedLines.includes(index)}
              data-deleted={deletedLines.includes(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className={styles.codeArea}>
          <pre className={styles.pre} dangerouslySetInnerHTML={{ __html: highlighted }}></pre>
          <div className={styles.textareaWrapper}>
            <textarea
              value={value}
              className={styles.textarea}
              readOnly={readOnly}
              onChange={readOnly ? noop : ({ target }) => onChange(target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
