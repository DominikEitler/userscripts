// ==UserScript==
// @name        Skip Studienbeitrag reminder
// @namespace   Violentmonkey Scripts
// @match       https://tiss.tuwien.ac.at/main/student
// @grant       none
// @version     1.0
// @author      Dominik Eitler
// @description skips reminder to pay tuition fee / ÖH Beitrag in TISS
// ==/UserScript==

(() => {
  'use strict';
  document.querySelector('#contentInner .spalte_links .secondaryButton').click();
})();

