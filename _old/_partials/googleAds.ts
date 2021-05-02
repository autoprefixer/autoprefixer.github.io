export const googleAds = ({ client = "ca-pub-6430039911615607", slot = "4852376176" } = {}) => `
  <ins
    class="adsbygoogle"
    style="display: block;"
    data-ad-client="${client}"
    data-ad-slot="${slot}"
    data-ad-format="auto"></ins>`;

export const googleAdsInit = () => `
  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script>(adsbygoogle = window.adsbygoogle || []).push({})</script>`;
