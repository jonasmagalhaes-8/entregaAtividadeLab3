import { TPair } from './type';
import { insertionSort } from './func';

let precosNotebooksEquivalentes: TPair<string, Number>[] = [
   {
      key: 'HP Spectre x360 14',
      value: 10500
   },
   {
      key: 'Dell XPS 13 (9310)',
      value: 10000
   },
   {
      key: 'Asus ZenBook 13 (UX325EA)',
      value: 8500
   },
   {
      key: 'Lenovo ThinkPad X1 Carbon (9ª geração)',
      value: 11000
   },
   {
      key: 'Acer Swift 3 (SF314-59)',
      value: 7000
   }
];
console.log(insertionSort(precosNotebooksEquivalentes))