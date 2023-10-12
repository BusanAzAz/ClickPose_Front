import Palette from '../asset/palette.svg';
import Balloon from '../asset/balloon.svg';

export const SELECT_MODE = {
  one: {
    url: '/select-person',
    img: Palette,
    mode: '퍼스널 컬러',
    firstLine: '간단하게 나에게 맞는 퍼스널 컬러를 진단하고,',
    secondLine: '더 화사하고 밝은 사진을 찍어 봐요!',
  },
  more: {
    url: '/select-frame',
    img: Balloon,
    mode: '테마 배경',
    firstLine: '놀이 공원, 해리포터 마법 학교 등...',
    secondLine: '원하는 테마 안으로 들어가 다이나믹한 사진을 찍어 봐요!',
  },
};
