// ==UserScript==
// @name        SkipStudienbeitragreminder
// @namespace   Violentmonkey Scripts
// @match       https://tiss.tuwien.ac.at/main/student
// @grant       none
// @version     1.0
// @author      Dominik Eitler
// @description skips reminder to pay tuition fee / ÖH Beitrag in TISS
// ==/UserScript==

(() => {
  document
    .querySelector("#contentInner .spalte_links .secondaryButton")
    .click();
})();
