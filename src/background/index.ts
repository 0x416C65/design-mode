import { setupContextMenu } from './context-menu';
import { setupAction } from './action';

chrome.runtime.onInstalled.addListener(() => {
  setupContextMenu();
  setupAction();
});
