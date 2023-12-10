const fs = require("fs"); // использую этот модуль для получения доступа к чтению и написанию данных в файловой системе. Возвращает объект с множетсвом функций, которые используются в дальнейшем

// Синхронная версия функции для чтения файлов. Принимает два аргумента. Первый с путём до файла, который необходимо прочитать и Второй кодировку этого файла
/*
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
*/
/*
// Блокирующий синхронный код
// Теперь запишем файл
const textOut = `This is waht we know about avokado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");

*/
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

// Не блокирующий ансихронный код
// Callback Hell!
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR");

  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      // Создаю новый файл "final.txt", в нем объединяю данные data2 и data3
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has been written!!!");
      });
    });
  });
});
console.log("Will read file!");
