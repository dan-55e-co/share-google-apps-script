const helloWorld = () => {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Sheet1");
  ws.getRange("A1").setValue("Hello world!");
};
