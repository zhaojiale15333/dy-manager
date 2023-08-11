import fs from 'fs';
import path from 'path';
// 写入JSON文件
export function writeJSONFile(data: any, fileName: string) {
  const jsonString = JSON.stringify(data, null, 2);
  const filePath = path.join(process.cwd(), 'public', fileName);

  fs.writeFileSync(filePath, jsonString);
}
// 读取JSON文件
export function readJSONFile(filePath: string) {
  const resolvedPath =path.join(process.cwd(), 'public', filePath);
  try {
    const jsonData = fs.readFileSync(resolvedPath, 'utf8');
    const data = JSON.parse(jsonData);
    return data;
  } catch (error) {
    console.error(`Error reading JSON file: ${error}`);
    return null;
  }
}
