import fs from 'fs';
import {parse} from 'csv-parse/sync';
import * as XLSX from 'xlsx';

export default class ReadFiles{

readJsonFile(jsonFilePath: string){
    return JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

}

readCsvFile(csvFilePath: string){
    return parse(fs.readFileSync(csvFilePath, 'utf-8'), {skip_empty_lines: true, columns: true});
}


readExcelFile(excelFilePath: string){

const workbook = XLSX.readFile(excelFilePath);
const sheetName = workbook.SheetNames[0];
const workSheet = workbook.Sheets[sheetName];

return XLSX.utils.sheet_to_json(workSheet);

}



}
