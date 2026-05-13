import ExcelJS from "exceljs";
const workbook = new ExcelJS.Workbook();
import path from "path";
const filepath = path.resolve("../", "files-read", "exceldata.xlsx");

class common {
  constructor() {}

  async readEntireExcelData(sheetName) {
    await workbook.xlsx.readFile(filepath);
    const sheet = await workbook.getWorksheet(sheetName);
    await sheet.eachRow((row, rowNumber) => {
      row.eachCell((cell, colNumber) => {
        console.log(cell.value);
      });
    });
  }

  async readCellData(sheetName, row, col) {
    await workbook.xlsx.readFile(filepath);
    const sheet = await workbook.getWorksheet(sheetName);
    return sheet.getRow(row).getCell(col).value;
  }

  /////
  async writeExcelCellValue(filePath, sheetName, cellAddress, newValue) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    // Get the worksheet by name
    const worksheet = workbook.getWorksheet(sheetName);
    if (!worksheet) {
      throw new Error(`Worksheet "${sheetName}" not found.`);
    }

    // Access the specific cell by address (e.g. "E6")
    const cell = worksheet.getCell(cellAddress);

    // Replace the cell’s value
    cell.value = newValue;

    // Optionally keep formatting or formulas intact — ExcelJS handles this automatically

    await workbook.xlsx.writeFile(filePath);
    console.log(
      `Updated cell ${cellAddress} in "${sheetName}" with value: ${newValue}`
    );
  }

  async readExcelFile(worksheet, searchValue) {
    let output = { row: -1, col: -1 };
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell, colNumber) => {
        if (cell.value === searchValue) {
          output.row = rowNumber;
          output.col = colNumber;
        }
      });
    });
    return output;
  }
}

module.exports = common;
/*
const reader = new common();

let data = await reader.readCellData("regression", 1, 2);
console.log(data);
*/
