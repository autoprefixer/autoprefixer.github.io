import { version as postcssVersion } from "postcss/package.json";
import { version as autoprefixerVersion } from "autoprefixer/package.json";

export const DEFAULT_BROWSERS = ["last 4 version"];
export const CSS_EXAMPLE = `.example {
    display: grid;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    transition: all .5s;
    user-select: none;
    background: linear-gradient(to bottom, white, black);
}`;
export const CSS_EXAMPLE2 = `.example {
    display: grid;
    transition: all .5s;
    user-select: none;
}`;

export const getComment = (browserList: string) => `/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v${postcssVersion},
* Autoprefixer: v${autoprefixerVersion}
* Browsers: ${browserList}
*/

`;
