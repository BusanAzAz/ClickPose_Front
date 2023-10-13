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
    mode: '오늘의 분위기',
    firstLine: '‘심플한’, ‘귀여운’ 등 오늘의 분위기에 맞는',
    secondLine: '배경 색상을 추천해 줄게요!',
  },
};
