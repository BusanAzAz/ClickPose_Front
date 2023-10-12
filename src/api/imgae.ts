import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError, isAxiosError } from 'axios';
import test from '../asset/eeeeee.png';

export const PostImage = () => {
  const URL = 'http://192.168.7.132:8000/api/image';

  const response = async (params: any) => {
    const file = new File([params], 'file.png', {
      type: 'image/png',
    });
    const formData = new FormData();
    formData.append('image', file);

    return axios.post(URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  return useMutation(response, {
    onError: (e: AxiosError) => {
      if (isAxiosError(e)) {
        alert(e.response?.data);
        console.log(e.response?.data);
      } else {
        alert(e);
      }
    },
    onSuccess: (e) => {
      alert(e);
    },
  });
};
