// ==UserScript==
// @name        FocusWikipediaSearch
// @namespace   Violentmonkey Scripts
// @match       https://en.wikipedia.org/wiki/Main_Page
// @match       https://de.wikipedia.org/wiki/Wikipedia:Hauptseite
// @grant       none
// @version     1.0
// @author      Dominik Eitler
// @description Just focuses the search bar on the main wiki page ffs
// ==/UserScript==

document.querySelector("input[name=search]").focus();
