import './styles.scss';
import * as bootstrap from 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 初始化 AOS
AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
  offset: 0 // 針對首頁，offset 設為 0 比較保險
});

// 關鍵修正：當視窗完全載入（包括圖片）後，強制 AOS 重新偵測位置
window.addEventListener('load', () => {
  AOS.refresh();
});