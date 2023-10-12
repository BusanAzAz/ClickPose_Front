import { useState } from 'react';

export const renderPhoto = (url: string) => {
  const [image, setImage] = useState('');
  const blob = new Blob([url], )
  const reader = new FileReader();
  reader.readAsDataURL(file as File);
  reader.onloadend = () => {
    setImage(reader.result as string);
    console.log(reader.result);
  };
  if (image) return image;
};
