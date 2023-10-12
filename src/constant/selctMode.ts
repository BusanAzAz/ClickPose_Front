import Gesture from '../asset/gesture.svg';
import Palette from '../asset/palette.svg';

export const SELECT_MODE = {
  one: {
    url: '/personal',
    img: Palette,
    person: '한 명',
    mode: '퍼스널 컬러',
    firstLine: '한 명이라면 나에게 맞는 퍼스널 컬러를 진단하고,',
    secondLine: '맞춤화된 예쁜 사진을 찍어 봐요.',
  },
  more: {
    url: '/photo',
    img: Gesture,
    person: '여러 명',
    mode: '포즈 추천',
    firstLine: '여러 명이라면 포즈를 추천해 드릴게요!',
    secondLine: '다양한 포즈로 막힘 없이 사진을 찍어 봐요.',
  },
};
