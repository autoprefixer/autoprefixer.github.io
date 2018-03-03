const HOME_PAGE_LANG = 'en';
const PATHES = { ru: '/ru/', en: '/' };

const userBrowserLang = navigator.language || navigator.userLanguage;
const userLang = userBrowserLang.split('-')[0].toLowerCase() || HOME_PAGE_LANG;
const path = location.pathname.replace(/\//g, '') || HOME_PAGE_LANG;

export default () => {
  if (userLang === path) return;
  if (!sessionStorage) return;
  if (sessionStorage.redirected) return;
  if (!PATHES[userLang]) return;

  sessionStorage.redirected = true;
  location.pathname = PATHES[userLang];
  return true;
};
