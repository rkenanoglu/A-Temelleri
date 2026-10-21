import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const roots=['app','content','lib','public','scripts','.github'];
const keyPattern=new RegExp('A'+'Q\\.[A-Za-z0-9_-]{30,}|A'+'Iza[A-Za-z0-9_-]{25,}');
const files=[];
for(const root of roots)if(fs.existsSync(root))for(const entry of fs.readdirSync(root,{recursive:true})){const file=path.join(root,entry);if(fs.statSync(file).isFile())files.push(file);}
for(const file of files){assert.ok(!keyPattern.test(fs.readFileSync(file,'utf8')),`Possible credential in ${file}`);}
assert.ok(!fs.existsSync('.openai/hosting.json'),'Site identity must not be part of the portable repository.');
const clientRoot='.next/static';assert.ok(fs.existsSync(clientRoot),'Run the production build first.');
let count=0;
for(const entry of fs.readdirSync(clientRoot,{recursive:true})){const f=path.join(clientRoot,entry);if(fs.statSync(f).isFile()&&f.endsWith('.js')){const data=fs.readFileSync(f,'utf8');assert.ok(!data.includes('GEMINI_API_KEY'),`Server-only secret name found in ${f}`);assert.ok(!keyPattern.test(data),`Possible credential found in ${f}`);count++;}}
assert.ok(count>0);console.log(`PASS: ${files.length} source files and ${count} client bundles checked; no provider keys or hosting identity.`);
