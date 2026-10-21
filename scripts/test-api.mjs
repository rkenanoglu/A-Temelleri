import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import assert from 'node:assert/strict';
const dir=path.resolve('.qa');fs.mkdirSync(dir,{recursive:true});
for(const name of ['course','questions']){
 const source=fs.readFileSync(`content/${name}.ts`,'utf8').replace("from './course'","from './course.mjs'");
 fs.writeFileSync(path.join(dir,name+'.mjs'),ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext}}).outputText);
}
let source=fs.readFileSync('app/api/chat/route.ts','utf8')
 .replace("from '../../../content/sources.json'","from '../content/sources.json' with {type:'json'}")
 .replace("from '../../../content/course'","from './course.mjs'")
 .replace("from '../../../content/questions'","from './questions.mjs'");
fs.writeFileSync(path.join(dir,'api.mjs'),ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext}}).outputText);
const{POST}=await import(pathToFileURL(path.join(dir,'api.mjs')));
let n=0;
function req(body,origin='https://example.test',ip=`test-${++n}`){return new Request('https://example.test/api/chat',{method:'POST',headers:{'Content-Type':'application/json',origin,'x-forwarded-for':ip},body:typeof body==='string'?body:JSON.stringify(body)})}
const originalFetch=globalThis.fetch;const originalKey=process.env.GEMINI_API_KEY;
let calls=0;
try{
 delete process.env.GEMINI_API_KEY;
 assert.equal((await POST(req({messages:[{role:'user',text:'OSI nedir?'}]}))).status,503);
 assert.equal((await POST(req({messages:[]},'https://elsewhere.test'))).status,403);
 assert.equal((await POST(req('{'))).status,400);
 assert.equal((await POST(req({messages:[]}))).status,400);
 assert.equal((await POST(req({messages:[{role:'assistant',text:'a'}]}))).status,400);
 assert.equal((await POST(req('a'.repeat(48001)))).status,413);
 process.env.GEMINI_API_KEY='test-only-placeholder';
 globalThis.fetch=async(url,init)=>{
  calls++;
  assert.ok(url.includes(':generateContent'));
  assert.equal(init.headers['x-goog-api-key'],'test-only-placeholder');
  const input=JSON.parse(init.body);
  assert.equal(input.contents[1].role,'model');
  assert.equal(input.contents[2].parts[0].text,'Bir örnek verir misin?');
  assert.ok(input.systemInstruction.parts[0].text.includes('OSI'));
  assert.ok(input.systemInstruction.parts[0].text.includes('Verinin anlamlandırılmış'));
  assert.ok(!('temperature' in input.generationConfig));
  return Response.json({candidates:[{content:{parts:[{text:'Kaynaklara dayalı test yanıtı.'}]}}]});
 };
 const response=await POST(req({messages:[{role:'user',text:'OSI nedir?'},{role:'assistant',text:'Yedi katmanlı bir başvuru modelidir.'},{role:'user',text:'Bir örnek verir misin?'}],week:6,wrong:['w1q1']}));
 assert.equal(response.status,200);assert.equal(response.headers.get('Cache-Control'),'no-store');
 const data=await response.json();assert.equal(data.reply,'Kaynaklara dayalı test yanıtı.');assert.ok(data.citations.length>0);assert.equal(calls,1);
 assert.ok(!JSON.stringify(data).includes('test-only-placeholder'));
 for(const status of [402,429,404,403]){
  globalThis.fetch=async()=>new Response('{}',{status});
  const r=await POST(req({messages:[{role:'user',text:'IP nedir?'}]}));assert.equal(r.status,502);const d=await r.json();assert.ok(d.error.length>20);assert.ok(!d.error.includes('test-only-placeholder'));
 }
 for(let i=0;i<12;i++)await POST(req({messages:[]},'https://example.test','rate-test'));
 assert.equal((await POST(req({messages:[]},'https://example.test','rate-test'))).status,429);
 console.log('PASS: origin validation, malformed/oversized requests, missing key, conversation history, source retrieval, personal context, provider errors, rate limit, secret isolation. No external API called.');
}finally{globalThis.fetch=originalFetch;if(originalKey===undefined)delete process.env.GEMINI_API_KEY;else process.env.GEMINI_API_KEY=originalKey;}
