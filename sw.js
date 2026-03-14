self.addEventListener('install', (e) => {
  console.log('PWA Service Worker 已安裝');
});

self.addEventListener('fetch', (e) => {
  // 暫時不處理快取，確保資料都是最新的
});
