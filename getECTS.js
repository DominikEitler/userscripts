// ==UserScript==
// @name        Get ECTS
// @namespace   Violentmonkey Scripts
// @match       https://tiss.tuwien.ac.at/education/favorites.xhtml
// @grant       none
// @version     1.0
// @author      Dominik Eitler
// @description 03/09/2022, 15:08:04
// ==/UserScript==

const getECTS = (selector) => {
  const semesters = Array.from(
    document.querySelectorAll(".subscriptionGroupHead"),
  );
  const selectedSemesters = Array.from(semesters).filter((e) =>
    e.querySelector("h3").innerHTML.includes(selector),
  );
  return Array.from(selectedSemesters)
    .map((e) => +e.nextSibling.querySelector("tfoot .favoritesECTS").innerText)
    .reduce((acc, curr) => acc + curr, 0);
};

document.getECTS = getECTS;
