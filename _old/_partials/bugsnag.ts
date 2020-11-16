export const bugsnag = ({ id }: { id: string }) => `
  <script src="//d2wy8f7a9ursnm.cloudfront.net/v4/bugsnag.min.js"></script>
  <script>window.bugsnagClient = bugsnag("${id}");</script>`;
