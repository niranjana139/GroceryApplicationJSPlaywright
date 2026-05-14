const ExcelJS = require('exceljs');

class ExcelUtility {

    static async getWorkbook(filePath) {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        return workbook;
    }

    // ✅ equivalent of getStringData(int a, int b, String sheet)
    static async getStringData(rowNum, colNum, sheetName, filePath) {

        const workbook = await this.getWorkbook(filePath);
        const sheet = workbook.getWorksheet(sheetName);

        const row = sheet.getRow(rowNum);
        const cell = row.getCell(colNum);

        return cell.value ? String(cell.value) : "";
    }

    // ✅ equivalent of getIntegerData(int a, int b, String sheet)
    static async getIntegerData(rowNum, colNum, sheetName, filePath) {

        const workbook = await this.getWorkbook(filePath);
        const sheet = workbook.getWorksheet(sheetName);

        const row = sheet.getRow(rowNum);
        const cell = row.getCell(colNum);

        const num = Number(cell.value);

        return isNaN(num) ? null : num.toString();
    }
}

module.exports = ExcelUtility;