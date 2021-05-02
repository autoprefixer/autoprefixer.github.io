import { Change } from "diff";

export const formatDiff = (diff: Change[], skipHeadLines = 0) => {
  let inputLineNumber = 0;
  let outputLineNumber = 0;
  let addedLines: number[] = [];
  let deletedLines: number[] = [];

  diff.forEach(({ count, added, removed }) => {
    if (!count)
      return;

    for (let i = 0; i < count; i++) {
      if (added) {
        if (outputLineNumber >= skipHeadLines)
          addedLines.push(outputLineNumber);
        outputLineNumber += 1;
      } else if (removed) {
        deletedLines.push(inputLineNumber);
        inputLineNumber += 1;
      } else {
        inputLineNumber += 1;
        outputLineNumber += 1;
      }
    }
  });

  return { addedLines, deletedLines };
};
