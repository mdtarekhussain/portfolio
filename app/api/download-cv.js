import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'assets', 'cv', 'tarek-cv.pdf');
  const fileBuffer = fs.readFileSync(filePath);
  
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=tarek-cv.pdf');
  res.send(fileBuffer);
}