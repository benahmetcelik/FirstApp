import { SendRequest } from '../helper';
import React, { useState } from 'react';

const FilmController =  () => {
    

  const list = async () => {
    try {
      const request = await SendRequest('films/list', 'get');
      if (request.status === true) {
        return request.data;
      }
    } catch (error) {
      console.error(error);
    }
    return false;
  };

    // Diğer bileşen kodları
    return {
      list,
    }
};

export default FilmController;
