import { fs } from '@tauri-apps/api'
import * as xlsx from 'xlsx';



export const handleFile = async (file: File) => {
  const start = Date.now()
  const data = await file.arrayBuffer()
  const workbook = xlsx.read(data)
  const sheet = workbook.Sheets[workbook.SheetNames[0]]
  const json = xlsx.utils.sheet_to_json(sheet)
  const end = Date.now()
  console.log(`Parsed ${json.length} rows in ${end - start}ms`)
  console.log(json)
  return json
}

