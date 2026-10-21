import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const dir=path.resolve('.qa');fs.mkdirSync(dir,{recursive:true});
for(const file of ['course','questions']){
 let source=fs.readFileSync(`content/${file}.ts`,'utf8').replace("from './course'","from './course.mjs'");
 fs.writeFileSync(path.join(dir,file+'.mjs'),ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext}}).outputText);
}
const{weeks}=await import('file:///'+dir.replaceAll('\\','/')+'/course.mjs');
const{questions,makeTest}=await import('file:///'+dir.replaceAll('\\','/')+'/questions.mjs');
assert.equal(weeks.length,12);assert.equal(questions.length,240);
assert.equal(new Set(questions.map(q=>q.id)).size,240);
assert.equal(new Set(questions.map(q=>q.prompt)).size,240);
for(const w of weeks){
 assert.equal(w.sections.length,4);assert.ok(w.activity.length>60);assert.ok(w.sources.length>0);
 const qs=makeTest(w.id);assert.equal(qs.length,20);
 assert.deepEqual([0,1,2,3].map(i=>qs.filter(q=>q.correct===i).length),[5,5,5,5]);
 for(const q of qs){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.ok(q.options[q.correct]);assert.ok(q.explanation.length>70);assert.ok(w.sections.find(s=>s.title===q.topic));}
}
for(const n of [3,6,9,12]){const qs=makeTest(n,true);assert.equal(qs.length,20);assert.equal(new Set(qs.map(q=>q.id)).size,20);assert.deepEqual([n-2,n-1,n].map(w=>qs.filter(q=>q.week===w).length),[7,7,6]);}
const sources=JSON.parse(fs.readFileSync('content/sources.json','utf8'));assert.equal(sources.length,20);
assert.ok(sources.every(d=>d.pages.length>0));
console.log(`PASS: 12 weeks, 240 unique questions, 16 tests of 20 questions, balanced weekly answers, 20 indexed sources.`);
