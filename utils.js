
function getActiveTab() {
  return browser.tabs.query({}).then(tabs => {
    return tabs.find(tab => tab.active);
  });
}
