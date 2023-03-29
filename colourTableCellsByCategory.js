// ==UserScript==
// @name          Coloured Categories
// @description   Adds category colours to Category column sb.ltn.fi
// @version       1.0
// @author        ChatGPT, AcesFullOfKings
// @grant         none
// @match         https://sb.ltn.fi/*
// @updateURL     https://raw.githubusercontent.com/theonefoster/SponsorBlock-UserScripts/main/colourTableCellsByCategory.js
// @downloadURL   https://raw.githubusercontent.com/theonefoster/SponsorBlock-UserScripts/main/colourTableCellsByCategory.js
// ==/UserScript==

/* eslint-disable no-multi-spaces */

(function() {
  'use strict';

  const COLOURS = {
    filler: '#7300FF',          // lilac
    sponsor: '#00d400',         // light green
    selfpromo: '#ffff00',       // yellow
    interaction: '#cc00ff',     // pink
    outro: '#0202ed',           // dark blue
    intro: '#00ffff',           // light blue
    preview: '#008fd6',         // middle blue
    poi_highlight: '#ff1684',   // kinda salmon-y pink idk
    exclusive_access: '#008a5c',// kinda murky greeny grey ish
  };

  const table = document.querySelector('.table');
  const headerRow = table.querySelector('thead tr');
  const headerCells = headerRow.querySelectorAll('th');

  // The columns aren't always in a fixed order, e.g. they're different on user pages vs video pages
  // And also the order can be changed with userscripts etc. So instead of using column 7 (the default on video pages),
  // we find the correct column number from the table header:

  var columnNumber = 0;
  var found = false;

  headerCells.forEach((cell) => {
      if (!found){
          if (cell.innerText == "Category") {
              found = true;
          } else {
              columnNumber += 1;
          }
      }
  });

  const rows = table.querySelectorAll('tbody tr'); // a list of the table rows

  rows.forEach((row) => {
    const categoryCell = row.querySelectorAll('td')[columnNumber]; // select the correct column
    const category = categoryCell.innerText.split("\n")[0]; // sometimes userscripts add a line below the category text, e.g. for a button

    if (category in COLOURS) {
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "■"; // lil squarey boi
      newSpan.setAttribute('style', 'color:' + COLOURS[category]);
      categoryCell.prepend(newSpan); // add to beginning of cell
    }
  });
})();
