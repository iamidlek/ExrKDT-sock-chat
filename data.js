const fs = require('fs');

module.exports = (filePath) => {
  dataToRead = fs.readFileSync(
    filePath,
    {encoding:"utf-8"}
  );
  
  const rowsData = [];
  
  const rows = dataToRead.split('\n');
  const headers = rows[0].split(',');

  rows.slice(1).forEach(row => {
    rowData = {};

    for (let headerIndex=0; headerIndex < headers.length; headerIndex++){
      const header = headers[headerIndex];
      rowData[headerIndex] = row.split(',')[headerIndex];
    }

    rowsData.push(rowData);
  });
  return rowsData
};
