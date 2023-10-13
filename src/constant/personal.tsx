import { useState } from 'react';

export const getPersonal = () => {
  const [personal, setPersonal] = useState([]);
  return { personal, setPersonal };
};
export const getImage = () => {
  const [image, setImage] = useState([]);
  return { image, setImage };
};

export const getFrame = () => {
  const [frame, setFrame] = useState(0);
  return { frame, setFrame };
};

export const random = () => {
  return Math.floor(Math.random() * 3);
};

export const PERSONALCOLOR = [
  { title: '봄 웜톤', color: ['#FFEDCF', '#FBDBC4', '#F8A980', '#90D7EB'] },
  { title: '여름 쿨톤', color: ['#91A5C0', '#FBCAD0', '#AFBDE0', '#B3DDD3'] },
  { title: '가을 웜톤', color: ['#D3C191', '#8EB161', '#EBA188', '#A48B53'] },
  { title: '겨울 쿨톤', color: ['#003060', '#FFF9AF', '#BDBEC0', '#42429C'] },
];
