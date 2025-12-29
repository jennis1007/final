import './styles.scss'; 
import * as bootstrap from 'bootstrap'; 

// 1. 引入 AOS 的 CSS 樣式
import 'aos/dist/aos.css'; 
// 2. 引入 AOS 的 JavaScript 核心
import AOS from 'aos';

// 3. 初始化 AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000, // 動畫持續時間 (毫秒)
        once: false,    // 是否只執行一次（設定為 false 則每次捲動都會觸發）
        offset: 100,    // 距離元素多少像素時觸發動畫
        easing: 'ease-in-out', // 動畫曲線
    });
});