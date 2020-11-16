export const icons = ({ maskColor, titleColor, themeColor, version = "1" }: any) => `
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=${version}">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=${version}">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=${version}">
  <link rel="manifest" href="/site.webmanifest?v=${version}">
  <link rel="mask-icon" href="/safari-pinned-tab.svg?v=${version}" color="${maskColor}">
  <meta name="msapplication-TileColor" content="${titleColor}">
  <meta name="theme-color" content="${themeColor}">`;
