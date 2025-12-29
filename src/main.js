// 1. 匯入全域樣式（包含 Bootstrap 和您的客製化 CSS）
import './styles.scss';

// 2. 匯入 Bootstrap 的所有 JavaScript 功能
import * as bootstrap from 'bootstrap';

// 3. 匯入 AOS 動畫套件及其 CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * 初始化 AOS 動畫
 * duration: 動畫持續時間（毫秒），1000 = 1秒
 * once: 是否只執行一次。設定為 false 則每次捲動到該區塊都會有動畫
 * offset: 距離元素多少像素時觸發動畫
 */
AOS.init({
  duration: 1000,
  once: false,
  offset: 120,
  easing: 'ease-in-out',
});

// 4. (選填) 如果您需要對導覽列做捲動監聽或其他互動，可以在這裡編寫
console.log("文藻小咖啡網站已成功啟動！");