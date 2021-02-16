// ==UserScript==
// @name        IstTuwelDownHelper
// @namespace   Violentmonkey Scripts
// @match       https://isttuweldown.rueckgr.at/
// @grant       none
// @version     1.0
// @author      Dominik Eitler
// @description queries isttuweldown.rueckgr.at/ and alerts if it's not down anymore
// ==/UserScript==

const isItDown = () => {
  fetch("https://isttuweldown.rueckgr.at/")
    .then((x) => x.text())
    .then((x) => x.search("NEIN"))
    .then((x) => {
      if (x >= 0) {
        console.log(new Date().toLocaleTimeString(), "- IT'S BACK YAAY");
        alert("TUWEL is back alive!");
      } else {
        console.log(new Date().toLocaleTimeString(), "- still down");
      }
    });
};

(() => {
  setInterval(isItDown, 1000 * 10);
})();
