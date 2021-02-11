// Temporarily disabling due to known bug: https://github.com/eugenehp/react-native-uuid/issues/11
// import { v4 as uuid } from 'react-native-uuid';
// export const getId = () => uuid();

export const getId = (length = 30) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};
