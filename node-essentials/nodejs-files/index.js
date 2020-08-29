const fs = require('fs').promises;
const path = require('path');

async function main() {
  const salesDir = path.join(__dirname, "stores")
  const salesTotalsDir = path.join(__dirname, "salesTotals")

  try{
    await fs.mkdir(salesTotalsDir);
  } catch {
    console.log(`${salesTotalsDir} already exists.`);
  }

  const salesFiles = await findSalesFiles(salesDir);
  await fs.writeFile(path.join(salesTotalsDir, "total.txt"), String())

}

async function findSalesFiles(folderName) {
  let salesFiles = [];
  
  async function findFiles(folderName) {
    const items = await fs.readdir(folderName, { withFileTypes: true });

    for (item of items) {
      path.extname(item.name) === '.json'
      ? await findFiles(path.join(folderName, item.name)) 
      : salesFiles.push(path.join(folderName, item.name))
    }
  }
  await findFiles(folderName)
  return salesFiles
}

main()