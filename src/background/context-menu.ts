import { toggleDesignMode } from './design-mode';

export const setupContextMenu = () => {
  chrome.contextMenus.create({
    id: 'toggle-design-mode',
    title: chrome.i18n.getMessage('toggle_design_mode'),
    contexts: ['all']
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'toggle-design-mode') {
      toggleDesignMode(tab);
    }
  });
};
