const fillSystem = require("fs");
const fillSystemPromis = require("fs/promises");
const pathSistem = require("path");

const { mkdir, readdir, writeFile, rmdir, unlink } = fillSystemPromis;

const users = [
  { firstName: "ela", lastName: "gad" },
  { firstName: "elad", lastName: "gadl" },
  { firstName: "elazar", lastName: "gadasi" },
  { firstName: "ayal", lastName: "bass" },
];

const removeFilesAndFolder = async () => {
  const users = await readdir(`${__dirname}/users`);
  const testArr1 = [];
  const testArr2 = [];
  try {
    for (i = 0; i < users.length; i++) {
      if (users[i].includes(".txt")) {
        testArr1.push(users[i]);
      } else {
        testArr2.push(users[i]);
      }
    }
    if (testArr1.length && !testArr2.length) {
      users.forEach(async (file) => await unlink(`${__dirname}/users/${file}`));

      rmdir(`${__dirname}/users`);
    } else {
      const filterUser = users.filter(
        (user) => user !== user.replace(/[a-z]+-[a-z]+.txt$/g)
      );

      filterUser.forEach(async (file) => {
        await unlink(`${__dirname}/users/${file}`);
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const makeAndRemoveFilesAndFolder = async () => {
  try {
    const chek = fillSystem.existsSync(`${__dirname}/users`);

    if (chek) return removeFilesAndFolder();
    await mkdir(`${__dirname}/users`);
    for (i = 0; i < 4; i++) {
      writeFile(
        `${__dirname}/users/${users[i].firstName}-${users[i].lastName}.txt`,
        `${users[i].firstName}-${users[i].lastName}`
      );
      writeFile(
        `${__dirname}/users/${users[i].firstName}-${users[i].lastName}.ptf`,
        `${users[i].firstName}-${users[i].lastName}`
      );
    }
  } catch (error) {
    console.log(error.message);
  }
};

makeAndRemoveFilesAndFolder();

setTimeout(removeFilesAndFolder, 5000);
