import Swiper from 'swiper/bundle';
import 'swiper/css';
const option = {
  loop: true,
  autoplay: true,
};
export const slider = () => {
  const swiper = new Swiper('.swiper', option);
};
