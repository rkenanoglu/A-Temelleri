import {weeks,type Question} from '../content/course';
export type Result={key:string;label:string;score:number;total:number;date:string;wrong:string[];weeks:number[]};
export function studySections(wrong:Question[]){
 return [...new Set(wrong.map(q=>q.week))].map(id=>({week:weeks[id-1],wrong:wrong.filter(q=>q.week===id)}));
}
