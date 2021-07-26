const HOME_PAGE_LANG = "en";
const userBrowserLang = navigator.language || navigator.userLanguage;
const userLang = userBrowserLang.split("-")[0].toLowerCase() || HOME_PAGE_LANG;
const pathLang = location.pathname.replace(/\//g, "") || HOME_PAGE_LANG;

export default () => {
  if (!sessionStorage) return;
  if (sessionStorage.redirected) return;

  const ruPreffered =
    userLang === "ru" || userLang === "rus" || userLang === "by" || userLang === "uk";
  sessionStorage.redirected = true;

  if (pathLang !== "ru" && ruPreffered) {
    location.pathname = "/ru/";
    return true;
  }
  if (pathLang !== "en" && !ruPreffered) {
    location.pathname = "/";
    return true;
  }
};
