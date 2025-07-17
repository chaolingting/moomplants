//let cat = 'moom'
//console.log(cat);
//const year = now.getFullYear();
//const month = String(now.getMonth() + 1).padStart(2, '0');
//const date = String(now.getDate()).padStart(2, '0');

    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
        const office = '<a href="https://moom.com.tw/" target="_blank">moom bookshop</a>'

      const timeString = `${office} ${hours}:${minutes}:${seconds}`;
      document.getElementById('clock').innerHTML= timeString;
    } 

    // 每秒更新一次
    setInterval(updateClock, 1000);
    // 頁面載入就顯示時間
    updateClock(); 