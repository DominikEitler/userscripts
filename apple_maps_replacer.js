// ==UserScript==
// @name        Apple Maps Replacer
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      Dominik Eitler
// @description Replace apple maps links with google maps links
// ==/UserScript==

const appleMapsLinkMatch = /maps\.apple\.com\/\?q=.*&ll=.*,.*/;
const adressMatch = /q=.*?(&|$)/;
const llMatch = /ll=.*?(&|$)/;

const links = document.querySelectorAll("a");
const appleMapsLinks = Array.from(links).filter(
  (l) => !!l.href.match(appleMapsLinkMatch),
);

appleMapsLinks.forEach((link) => {
  const address = link.href
    .match(adressMatch)[0]
    .replace("&", "")
    .replace("q=", "");
  const ll = link.href.match(llMatch)[0].replace("&", "").replace("ll=", "");

  link.href = `https://www.google.com/maps/place/${address}/@${ll}`;
});
