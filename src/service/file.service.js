import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const folder = `uploads/`;
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder, { recursive: true });
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const folder = `uploads/${req.headers['x-uuid']}`;
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
      }
      cb(null, folder);
    },
    filename: (req, file, cb) => {  
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      cb(null, `${name}${ext}`);
    },
  });
  
export const upload = multer({ storage });
