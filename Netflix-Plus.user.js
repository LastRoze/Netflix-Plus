// ==UserScript==
// @name		DNA Netflix Plus
// @namespace	DNA Netflix Plus
// @version		3.0
// @author		Last Roze
// @description	Dominion With Domination
// @copyright	©2020 - Yoga Budiman
// @homepage	https://github.com/LastRoze/
// @homepageURL	https://github.com/LastRoze/
// @website		https://lastroze.github.io/
// @source		https://github.com/LastRoze/Netflix-Plus
// @icon		https://github.com/LastRoze/Netflix-Plus/blob/master/DNA.jpg?raw=true
// @iconURL		https://github.com/LastRoze/Netflix-Plus/blob/master/DNA.jpg?raw=true
// @defaulticon	https://github.com/LastRoze/Netflix-Plus/blob/master/DNA.jpg?raw=true
// @icon64		https://github.com/LastRoze/Netflix-Plus/blob/master/DNA.jpg?raw=true
// @icon64URL	https://github.com/LastRoze/Netflix-Plus/blob/master/DNA.jpg?raw=true
// @updateURL	https://github.com/LastRoze/Netflix-Plus/raw/master/Netflix-Plus.meta.js
// @downloadURL	https://github.com/LastRoze/Netflix-Plus/raw/master/Netflix-Plus.user.js
// @supportURL	https://lastroze.github.io/
// @match		*://www.netflix.com/*
// @grant		none
// ==/UserScript==

(function() { 'use strict';
	var DNA = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if(mutation.addedNodes.length > 0 && mutation.addedNodes[0].className && mutation.addedNodes[0].className.toString().match(/skip-credits/)) {
				var bT1 = document.querySelector('.nf-flat-button-text');
				bT1.click();
			} else if(mutation.addedNodes.length > 0 && mutation.addedNodes[0].className && mutation.addedNodes[0].className.toString().match(/main-hitzone-element-container/)) {
				var bT2 = document.querySelector('.button-nfplayerNextEpisode');
				bT2.click();
			}
		});
	});
DNA.observe(document.querySelector('body'), { childList: true, subtree: true });
})();
