import * as xlsx from 'xlsx';
import { fs } from '@tauri-apps/api';
import { BaseDirectory } from '@tauri-apps/api/fs';
import { Sheet_Header } from './sheets';

// default data path
const DATA_PATH = BaseDirectory.Download

// process excel file and return json
export const processExcelFile = async (file: File) => {
  // timing
  const start = Date.now()
  const data = await file.arrayBuffer() // read file as array buffer
  const workbook = xlsx.read(data) // parse array buffer
  const sheet = workbook.Sheets[workbook.SheetNames[0]] // get first sheet
  const json = xlsx.utils.sheet_to_json(sheet) // convert sheet to json
  const Heading = Sheet_Header.en
  const processed_sheet = json.map((row: any, i) => {
    const values = Object.values(row)
    const keys = Object.keys(row)
    if (keys.length === Heading.length) {
      let new_row: { [key: string]: any } = {}
      for (let x = 0; x < Heading.length; x++) {
        new_row[Heading[x]] = values[x]
      }
      return new_row
    }
    return row
  })
  const end = Date.now()  // end timing
  console.log(`Parsed ${json.length} rows in ${end - start}ms`) // log timing
  console.log('Processed : ', processed_sheet) // log json
  await fs.writeFile('employees.json', JSON.stringify(processed_sheet), { dir: DATA_PATH }) // write json to file in data directory
  return processed_sheet // return json
}


// get data from file in data directory
export const importData = async () => {}


// export data
export const exportData = async () => {}


// load data from file in data directory
export const loadData = async () =>
  JSON.parse(await fs.readTextFile('employees.json', { dir: DATA_PATH }))

