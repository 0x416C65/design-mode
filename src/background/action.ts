import { toggleDesignMode } from './design-mode';

export const setupAction = () => {
  chrome.action.onClicked.addListener((tab) => {
    toggleDesignMode(tab);
  });
};
