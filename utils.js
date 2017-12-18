
function getActiveTab(currentWindow = true) {
  var opts = {};
  if (currentWindow) opts = {currentWindow: true};
  return browser.tabs.query(opts).then(tabs => {
    return tabs.find(tab => tab.active);
  });
}
