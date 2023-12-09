const fs = require("fs"); // использую этот модуль для получения доступа к чтению и написанию данных в файловой системе. Возвращает объект с множетсвом функций, которые используются в дальнейшем

// Синхронная версия функции для чтения файлов. Принимает два аргумента. Первый с путём до файла, который необходимо прочитать и Второй кодировку этого файла
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

// Теперь запишем файл
const textOut = `This is waht we know about avokado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");

// "readFileSync" - синхронная версия.
// "readFile" - асинхронная версия

/*

const fs = require("fs")

// Non-blocking code
fs.readFile("input.txt", "utf-8", (err,data)=>{
    console.log(data);
});
console.log("Reading file...");

*/
