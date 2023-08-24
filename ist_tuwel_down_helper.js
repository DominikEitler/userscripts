// ==UserScript==
// @name        IstTuwelOderTissDownHelper
// @namespace   Violentmonkey Scripts
// @match       https://isttuweldown.rueckgr.at/
// @match       https://isttissdown.rueckgr.at/
// @grant       none
// @version     1.0
// @author      Dominik Eitler
// @description queries isttuweldown.rueckgr.at/ or isttissdown.rueckgr.at/ and alerts if it's not down anymore
// ==/UserScript==

const page = window.location.href;

const interval = setInterval(async () => {
  const response = await fetch(page);
  const text = await response.text();
  const found = text.search("NEIN");
  if (found == -1) {
    console.log(new Date().toLocaleTimeString(), "- still down");
  } else {
    console.log(new Date().toLocaleTimeString(), "- IT'S BACK YAAY");
    alert("It's is back alive!");
    clearInterval(interval);
  }
}, 1000 * 5);
