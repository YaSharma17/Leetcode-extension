document.getElementById('problems').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://leetcode.com/problemset/all/' });
  });
  
  document.getElementById('contests').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://leetcode.com/contest/' });
  });
  
  document.getElementById('discuss').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://leetcode.com/discuss/' });
  });
  
  document.getElementById('latest-problem').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://leetcode.com/problem-of-the-day/' });
  });
  