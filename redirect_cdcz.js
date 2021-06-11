// ==UserScript==
// @name        Redirect cd.cz
// @namespace   Violentmonkey Scripts
// @match       https://www.cd.cz/default.htm
// @grant       none
// @version     1.0
// @author      Dominik Eitler
// @description redirect from czech to german site
// ==/UserScript==

(() => {
  window.location.href = '/de/default.htm';
})();
