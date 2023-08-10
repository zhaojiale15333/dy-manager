import fs from 'fs';
import path from 'path';
// 写入JSON文件
export function writeJSONFile(data: any, filePath: string) {
  const jsonString = JSON.stringify(data, null, 2);
  const resolvedPath = path.resolve(filePath);

  fs.writeFileSync(resolvedPath, jsonString);

  console.log(`JSON data written to ${resolvedPath}`);
}
// 读取JSON文件
export function readJSONFile(filePath: string) {
  const resolvedPath = path.resolve(filePath);

  try {
    const jsonData = fs.readFileSync(resolvedPath, 'utf8');
    const data = JSON.parse(jsonData);

    return data;
  } catch (error) {
    console.error(`Error reading JSON file: ${error}`);
    return null;
  }
}
