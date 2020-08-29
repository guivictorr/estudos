const fs = require('fs').promises;

async function main() {
  const salesFiles = await findSalesFiles("stores")
  console.log(salesFiles)
}

async function findSalesFiles(folderName) {
  let salesFiles = [];
  
  async function findFiles(folderName) {
    const items = await fs.readdir(folderName, { withFileTypes: true });

    for (item of items) {
      item.isDirectory() 
      ? await findFiles(`${folderName}/${item.name}`) 
      : salesFiles.push(`${folderName}/${item.name}`)
    }
  }
  await findFiles(folderName)
  return salesFiles
}

main()