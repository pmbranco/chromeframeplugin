// content.js
var height = '60px';
var iframe = document.createElement('iframe');
iframe.src = chrome.extension.getURL('toolbar.html');
iframe.style.height = height;
iframe.style.width = '100%';
iframe.style.position = 'fixed';
iframe.style.top = '0';
iframe.style.left = '0';
iframe.style.zIndex = '9999999'; // Some high value
//Inject some styles
var bodyStyle = document.body.style;
var cssTransform = 'transform' in bodyStyle ? 'transform' : 'webkitTransform';
//Adjust body height to inserted bar at top
bodyStyle[cssTransform] = 'translateY(' + height + ')';
// Add Frame to Page
document.documentElement.appendChild(iframe);


