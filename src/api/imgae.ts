import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

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
  return useMutation(response);
};
