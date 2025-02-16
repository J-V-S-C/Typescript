import { createServer } from 'http';
import { task } from './classes/task';
import { task2 } from './classes/task2';
import { task3 } from './classes/task3';
import { task4 } from './classes/task4';
import { task5 } from './classes/task5';
import { task6 } from './classes/task6';
import { task7 } from './classes/task7';
import { task8 } from './classes/task8';
import { task9 } from './classes/task9';
import { task10 } from './classes/task10';
import { task11 } from './classes/task11';
import { task12 } from './classes/task12';
import { task13 } from './classes/task13';
import { task14 } from './classes/task14';
import { task15 } from './classes/task15';
import { task16 } from './classes/task16';
import { task17 } from './classes/task17';
import { task18 } from './classes/task18';
import { task19 } from './classes/task19';
import { task20 } from './classes/task20';
import { task21 } from './classes/task21';
import { task22 } from './classes/task22';
import { task23 } from './classes/task23';
import { task24 } from './classes/task24';
import { task25 } from './classes/task25';
import { task26 } from './classes/task26';
import { task27 } from './classes/task27';
import { task28 } from './classes/task28';
import { task29 } from './classes/task29';
import { task30 } from './classes/task30';
import { task31 } from './classes/task31';
import { task32 } from './classes/task32';
import { task33 } from './classes/task33';
import { task34 } from './classes/task34';
import { task35 } from './classes/task35';
import { task36 } from './classes/task36';
import { task37 } from './classes/task37';
import { task38 } from './classes/task38';
import { task39 } from './classes/task39';
import { task40 } from './classes/task40';

const port = 3333;

const tasks = [
  task,
  task2,
  task3,
  task4,
  task5,
  task6,
  task7,
  task8,
  task9,
  task10,
  task11,
  task12,
  task13,
  task14,
  task15,
  task16,
  task17,
  task18,
  task19,
  task20,
  task21,
  task22,
  task23,
  task24,
  task25,
  task26,
  task27,
  task28,
  task29,
  task30,
  task31,
  task32,
  task33,
  task34,
  task35,
  task36,
  task37,
  task38,
  task39,
  task40,
];

function showClass(func: Function, i: number) {
  console.log(`\nTask ${i + 1}:`);
  func();
}
const responses = () => {
  console.log(
    `\n\n\nHey friend, this is the list of responses from the classes:`
  );
  tasks.forEach((func, i) => {
    showClass(func, i);
  });
};

const server = createServer((req, res) => {});

server.listen(port, () => {
  return console.log(responses());
});
