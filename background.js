
browser.commands.onCommand.addListener(command => closeTabs(command));

// ----------------------------------------------------

async function closeTabs(commandId) {
  var tabs = await browser.tabs.query({currentWindow: true});
  var activeTab = await getActiveTab();
  
  var removeIds = [];
  
  switch(commandId) {
    case 'close-other-tabs':
      removeIds = tabs.filter(tab => !tab.active).map(tab => tab.id);
      break;
    case 'close-left-tabs':
      removeIds = tabs.filter(tab => tab.index < activeTab.index).map(tab => tab.id);
      break;
    case 'close-right-tabs':
      removeIds = tabs.filter(tab => tab.index > activeTab.index).map(tab => tab.id);
      break;
  }
  
  browser.tabs.remove(removeIds);
}
