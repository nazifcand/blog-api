import { unlinkSync } from 'fs';

export default path => {
  try {

    if (path !== 'public/uploads/default-post-thumbnail.jpg') {
      unlinkSync(path);
    }
  } catch (error) { }
}