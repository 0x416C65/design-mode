export const toggleDesignMode = (tab: chrome.tabs.Tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: switchDesignMode
  });
};

const switchDesignMode = () => {
  const designModeIsOn = document.designMode === 'on';
  document.designMode = designModeIsOn ? 'off' : 'on';
  document.body.spellcheck = designModeIsOn ? false : true;
  return document.designMode;
};
