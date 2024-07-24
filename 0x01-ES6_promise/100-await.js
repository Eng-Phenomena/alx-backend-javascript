import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let reserve = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    reserve = { photo, user };
  } catch (err) {
    reserve = { photo: null, user: null };
  }
  return reserve;
}
