const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./typescript--neTRIcj.js","./vendor-CzgEMu88.js"])))=>i.map(i=>d[i]);
import{r as p,b as D,N,O as W,u as z,L as S,d as H,e as U,f as _,h as T,R as F,H as G}from"./vendor-CzgEMu88.js";import{F as V}from"./monaco-BwyFYBO9.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var $={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y=p,K=Symbol.for("react.element"),Z=Symbol.for("react.fragment"),X=Object.prototype.hasOwnProperty,Q=Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ee={key:!0,ref:!0,__self:!0,__source:!0};function O(t,a,n){var s,r={},i=null,o=null;n!==void 0&&(i=""+n),a.key!==void 0&&(i=""+a.key),a.ref!==void 0&&(o=a.ref);for(s in a)X.call(a,s)&&!ee.hasOwnProperty(s)&&(r[s]=a[s]);if(t&&t.defaultProps)for(s in a=t.defaultProps,a)r[s]===void 0&&(r[s]=a[s]);return{$$typeof:K,type:t,key:i,ref:o,props:r,_owner:Q.current}}j.Fragment=Z;j.jsx=O;j.jsxs=O;$.exports=j;var e=$.exports,M={},L=D;M.createRoot=L.createRoot,M.hydrateRoot=L.hydrateRoot;/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P=(...t)=>t.filter((a,n,s)=>!!a&&s.indexOf(a)===n).join(" ");/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ae={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=p.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:r="",children:i,iconNode:o,...l},c)=>p.createElement("svg",{ref:c,...ae,width:a,height:a,stroke:t,strokeWidth:s?Number(n)*24/Number(a):n,className:P("lucide",r),...l},[...o.map(([d,f])=>p.createElement(d,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(t,a)=>{const n=p.forwardRef(({className:s,...r},i)=>p.createElement(ne,{ref:i,iconNode:a,className:P(`lucide-${te(t)}`,s),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=h("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=h("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=h("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=h("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=h("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=h("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=h("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=h("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=h("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=h("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=h("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=h("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=h("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=h("SquareFunction",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=h("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=h("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=h("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=h("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),xe={slug:"getting-started",order:1,title:"Getting Started",level:"Beginner",icon:"Rocket",summary:"What TypeScript is, why it exists, and how the compiler turns your types into plain JavaScript.",sections:[{heading:"What is TypeScript?",paragraphs:["TypeScript is JavaScript with an extra layer: a type system. It's a superset of JavaScript, meaning every valid JavaScript file is already valid TypeScript. You add type annotations on top, and the TypeScript compiler (tsc) checks your code for mistakes before it ever runs.","Browsers and Node.js don't understand TypeScript directly. The compiler strips away the types and produces plain JavaScript that runs anywhere JavaScript runs."],example:{title:"TypeScript in, JavaScript out",code:`// TypeScript catches this mistake while you type,
// long before you run the code.
function greet(name: string) {
  return "Hello, " + name.toUpperCase();
}

console.log(greet("Manjunath"));

// Try uncommenting the next line — the editor
// (and Run) will flag a type error immediately:
// console.log(greet(42));
`}},{heading:"Why add types to JavaScript?",paragraphs:["JavaScript is dynamically typed — a variable can hold a string today and a number tomorrow, and you only find out about a mistake when the buggy line actually executes. TypeScript adds static typing: your editor and the compiler check types while you write code."],bullets:["Catches bugs early — typos, wrong argument types, missing properties — right in your editor.","Gives you real autocomplete, because the tool knows the exact shape of your data.","Makes refactoring safer: rename or restructure something and TypeScript shows every place that breaks.","Acts as living documentation — types describe what a function expects and returns."]},{heading:"The compiler and tsconfig.json",paragraphs:["The TypeScript compiler is configured with a tsconfig.json file at the root of a project. It controls things like which JavaScript version to target, how strict type checking should be, and which files to include."],example:{title:"A typical tsconfig.json",code:`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "outDir": "dist"
  },
  "include": ["src"]
}

// This isn't runnable TS/JS — it's the config file
// that tells "tsc" how to compile your project.
// "strict": true turns on the full family of strict
// type-checking flags, which is recommended for
// every new project.
console.log("Config files use JSON, not TS syntax.");
`}}],quiz:[{question:"What does the TypeScript compiler (tsc) ultimately produce?",options:["A binary executable","Plain JavaScript","WebAssembly","A browser extension"],correctIndex:1,explanation:"tsc strips out type annotations and emits plain JavaScript that any JS runtime can execute."},{question:"Which statement about TypeScript is true?",options:["Every valid JavaScript file is also valid TypeScript","TypeScript and JavaScript are unrelated languages","TypeScript replaces JavaScript at runtime","You must rewrite all your JS to use TypeScript"],correctIndex:0,explanation:"TypeScript is a strict superset of JavaScript — .js code is already valid .ts code."}]},ve={slug:"basic-types",order:2,title:"Basic Types",level:"Beginner",icon:"Type",summary:"The building blocks: string, number, boolean, arrays, tuples, and TypeScript's special types.",sections:[{heading:"Primitives",paragraphs:["TypeScript's basic types mirror JavaScript's runtime types. You annotate a variable with a colon followed by the type."],example:{title:"Primitive type annotations",code:`let username: string = "manju_r";
let age: number = 28;
let isMaster: boolean = false;

// TypeScript infers types even without annotations,
// so this works too:
let inferred = "TypeScript figured this out"; // string

console.log(username, age, isMaster, inferred);
`}},{heading:"Arrays and tuples",paragraphs:["Arrays are typed as Type[] (or Array<Type>). Tuples are fixed-length arrays where each position has a known, specific type — useful for things like coordinate pairs or [key, value] entries."],example:{title:"Arrays vs. tuples",code:`let scores: number[] = [95, 88, 72];
let names: Array<string> = ["Alice", "Bob"];

// A tuple: exactly two elements, string then number
let entry: [string, number] = ["level", 3];

scores.push(100);
// entry.push("nope"); // tuples still guard element types

console.log(scores, names, entry);
`}},{heading:"any, unknown, never, and void",paragraphs:["These four special types trip up beginners the most. any opts out of type checking entirely — use it sparingly. unknown is the type-safe alternative: you must narrow it before using it. void marks a function that returns nothing meaningful. never marks a value or return type that can't logically occur (like a function that always throws)."],bullets:["any — disables checking. Avoid unless migrating legacy JS.","unknown — safe 'any'; forces you to check the type before using the value.","void — a function's return value is intentionally ignored.","never — a value that can never happen (an infinite loop, a thrown error)."],example:{title:"unknown forces a check",code:`function process(value: unknown) {
  // value.toUpperCase(); // Error: value is 'unknown'

  if (typeof value === "string") {
    // Inside this block, TypeScript knows value is a string
    console.log(value.toUpperCase());
  } else {
    console.log("Not a string:", value);
  }
}

process("typescript");
process(42);
`}},{heading:"null, undefined, and strictNullChecks",paragraphs:["With strict mode on (recommended), null and undefined are distinct types that must be handled explicitly — a huge source of TypeScript's bug-catching power, since 'cannot read property of undefined' is one of JavaScript's most common runtime errors."],example:{title:"Handling possibly-missing values",code:`function getLength(text: string | undefined): number {
  // text might be undefined, so guard first
  if (text === undefined) {
    return 0;
  }
  return text.length;
}

console.log(getLength("hello"));
console.log(getLength(undefined));
`}}],quiz:[{question:"Which type should you prefer over 'any' when a value's type is not yet known?",options:["never","void","unknown","null"],correctIndex:2,explanation:"unknown is type-safe: you must narrow it (e.g. with typeof) before you can use it, unlike any."},{question:"What is a tuple in TypeScript?",options:["A type-safe key-value map","A fixed-length array with a known type for each position","A synonym for 'any[]'","A class that implements an interface"],correctIndex:1,explanation:"Tuples like [string, number] describe an array of fixed length where each slot has its own type."}]},we={slug:"functions",order:3,title:"Functions",level:"Beginner",icon:"FunctionSquare",summary:"Typing parameters and return values, optional and default parameters, rest params, and function types.",sections:[{heading:"Typed parameters and return values",paragraphs:["You can annotate each parameter and the return type. TypeScript will usually infer the return type for you, but writing it explicitly documents intent and catches mistakes if the function body changes."],example:{title:"A fully typed function",code:`function add(a: number, b: number): number {
  return a + b;
}

// Arrow function equivalent
const multiply = (a: number, b: number): number => a * b;

console.log(add(2, 3), multiply(2, 3));
`}},{heading:"Optional and default parameters",paragraphs:["Add a ? to make a parameter optional. Give a parameter a default value and TypeScript infers its type and makes it optional automatically. Optional and default parameters must come after required ones."],example:{title:"Optional vs default parameters",code:`function greet(name: string, title?: string): string {
  return title ? \`Hello, \${title} \${name}\` : \`Hello, \${name}\`;
}

function power(base: number, exponent: number = 2): number {
  return base ** exponent;
}

console.log(greet("Rao"));
console.log(greet("Rao", "Dr."));
console.log(power(3));
console.log(power(3, 3));
`}},{heading:"Rest parameters",paragraphs:["Use ...name: Type[] to accept an arbitrary number of arguments of the same type."],example:{title:"Summing any number of values",code:`function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
`}},{heading:"Function types",paragraphs:["You can describe the *shape* of a function — its parameters and return type — as its own type, which is handy for callbacks and higher-order functions."],example:{title:"A callback with a function type",code:`type MathOperation = (a: number, b: number) => number;

function calculate(a: number, b: number, op: MathOperation): number {
  return op(a, b);
}

const subtract: MathOperation = (a, b) => a - b;

console.log(calculate(10, 4, subtract));
console.log(calculate(10, 4, (a, b) => a + b));
`}}],quiz:[{question:"Where must optional parameters appear in a function's parameter list?",options:["Anywhere, order doesn't matter","Before all required parameters","After all required parameters","TypeScript doesn't support optional parameters"],correctIndex:2,explanation:"Required parameters must come first; optional (?) and default-valued parameters follow them."},{question:"What does '...numbers: number[]' represent in a function signature?",options:["An array parameter that must be named 'numbers'","A rest parameter collecting any number of number arguments","A tuple of exactly two numbers","An optional single number"],correctIndex:1,explanation:"The rest syntax (...) gathers all remaining arguments into an array of the given type."}]},ke={slug:"interfaces-types",order:4,title:"Interfaces & Type Aliases",level:"Beginner",icon:"Layout",summary:"Describe the shape of objects with interfaces and type aliases — readonly and optional props, extending, and when to use which.",sections:[{heading:"Describing object shapes",paragraphs:["An interface declares the shape an object must have: which properties, and their types. Any object matching that shape satisfies the interface — TypeScript uses structural typing, not names."],example:{title:"Your first interface",code:`interface User {
  id: number;
  name: string;
  email: string;
}

function printUser(user: User) {
  console.log(\`#\${user.id} \${user.name} <\${user.email}>\`);
}

printUser({ id: 1, name: "Angela Davis", email: "a@example.com" });
`}},{heading:"Optional and readonly properties",paragraphs:["Mark a property optional with ? and immutable with readonly. readonly only prevents reassignment after the object is created — it's a compile-time guarantee, not a runtime freeze."],example:{title:"Optional & readonly in action",code:`interface Account {
  readonly id: number;
  displayName: string;
  nickname?: string;
}

const acc: Account = { id: 1, displayName: "Manju" };
acc.displayName = "Manjunath"; // fine
// acc.id = 2; // Error: id is readonly

console.log(acc.nickname ?? "no nickname set");
`}},{heading:"Type aliases",paragraphs:["A type alias (type Name = ...) can describe an object shape just like an interface, but it can also name any other type: unions, tuples, primitives. Interfaces can be re-opened and extended; type aliases cannot be re-opened, but they're more flexible for non-object types."],example:{title:"type vs interface",code:`type Point = { x: number; y: number };
type ID = string | number; // type aliases can name unions too

interface Shape {
  area(): number;
}

interface Circle extends Shape {
  radius: number;
}

const c: Circle = {
  radius: 4,
  area() {
    return Math.PI * this.radius ** 2;
  },
};

console.log(c.area().toFixed(2));
const id: ID = "user_42";
console.log(id);
`}},{heading:"Which one should you use?",paragraphs:["In practice: reach for interface when describing an object or class shape (especially in public APIs, since they can be extended by consumers). Reach for type when you need unions, tuples, mapped types, or other constructs interfaces can't express. Many teams default to interface for objects and type for everything else."]}],quiz:[{question:"How does TypeScript decide if an object satisfies an interface?",options:["By checking the object's class name","By structural typing — matching the shape of properties","By checking a special __interface__ property","Interfaces cannot be satisfied by plain objects"],correctIndex:1,explanation:"TypeScript uses structural typing: if an object has the required properties with compatible types, it satisfies the interface, regardless of name."},{question:"Which of these can ONLY be done with a type alias, not an interface?",options:["Describing an object with a 'name: string' property","Naming a union type like 'string | number'","Making a property optional","Making a property readonly"],correctIndex:1,explanation:"type aliases can name unions, tuples, and other non-object types; interfaces are limited to object-like shapes."}]},Se={slug:"union-narrowing",order:5,title:"Unions, Intersections & Narrowing",level:"Intermediate",icon:"GitBranch",summary:"Combine types with | and &, then use narrowing to safely work with each possibility.",sections:[{heading:"Union types",paragraphs:["A union type (A | B) means a value can be one of several types. Unions are everywhere in real code: a function might accept a string or a number, or a variable might be a specific set of string literals."],example:{title:"A value that can be one of several types",code:`function formatId(id: string | number): string {
  return \`ID-\${id}\`;
}

console.log(formatId(42));
console.log(formatId("abc123"));
`}},{heading:"Narrowing with typeof and in",paragraphs:["Once a variable has a union type, TypeScript won't let you call type-specific methods until you 'narrow' the type — proving to the compiler which branch you're in, usually with typeof, in, or instanceof checks."],example:{title:"Narrowing a union safely",code:`function describe(value: string | number | string[]) {
  if (typeof value === "string") {
    return \`text of length \${value.length}\`;
  }
  if (typeof value === "number") {
    return \`a number: \${value.toFixed(2)}\`;
  }
  // TypeScript now knows value is string[]
  return \`a list with \${value.length} items\`;
}

console.log(describe("hello"));
console.log(describe(3.14159));
console.log(describe(["a", "b", "c"]));
`}},{heading:"Discriminated unions",paragraphs:["A powerful pattern: give every variant of a union a shared literal property (a 'discriminant', often called kind or type). Switching on that property lets TypeScript narrow perfectly, with no casts."],example:{title:"Discriminated union for shapes",code:`interface Circle {
  kind: "circle";
  radius: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
type Shape = Circle | Rectangle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

console.log(area({ kind: "circle", radius: 2 }).toFixed(2));
console.log(area({ kind: "rectangle", width: 3, height: 4 }));
`}},{heading:"Intersection types",paragraphs:["An intersection type (A & B) combines multiple types into one — the result has every member of every type combined. Common for mixing in shared fields like metadata or timestamps."],example:{title:"Combining types with &",code:`interface Timestamped {
  createdAt: Date;
}
interface Named {
  name: string;
}

type Event = Timestamped & Named & { id: number };

const launch: Event = {
  id: 1,
  name: "Product Launch",
  createdAt: new Date(),
};

console.log(launch.name, launch.id);
`}}],quiz:[{question:"What is a 'discriminated union'?",options:["A union type with only two members","A union where each member shares a common literal property used to distinguish variants","A type that cannot be narrowed","Another name for an intersection type"],correctIndex:1,explanation:"A shared literal 'discriminant' property (like kind: 'circle') lets TypeScript narrow a union precisely via switch/if checks."},{question:"What does the intersection type 'A & B' represent?",options:["A value that is either A or B","A value that has all the members of both A and B","A generic constraint","An array of A and B"],correctIndex:1,explanation:"Intersections merge types together — the resulting type must satisfy every combined type at once."}]},Te={slug:"classes",order:6,title:"Classes & OOP",level:"Intermediate",icon:"Box",summary:"Properties, constructors, access modifiers, readonly fields, abstract classes, and interfaces with classes.",sections:[{heading:"Classes with typed properties",paragraphs:["TypeScript classes look like JavaScript classes, but every property gets a type. The shorthand of declaring and assigning constructor parameters together is one of TypeScript's most-loved features."],example:{title:"A typed class with constructor shorthand",code:`class Player {
  // public/private/readonly here declares AND assigns
  // the property in one step
  constructor(
    public name: string,
    public level: number = 1,
  ) {}

  levelUp() {
    this.level += 1;
  }
}

const hero = new Player("Ada");
hero.levelUp();
hero.levelUp();
console.log(\`\${hero.name} is level \${hero.level}\`);
`}},{heading:"Access modifiers: public, private, protected",paragraphs:["public (the default) is accessible anywhere. private is only accessible inside the class itself. protected is accessible inside the class and its subclasses. These are compile-time checks — for true runtime privacy, use JavaScript's native #field syntax."],example:{title:"Encapsulating state",code:`class BankAccount {
  private balance: number;

  constructor(startingBalance: number) {
    this.balance = startingBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const acc = new BankAccount(100);
acc.deposit(50);
// acc.balance; // Error: 'balance' is private
console.log(acc.getBalance());
`}},{heading:"Implementing interfaces & abstract classes",paragraphs:["A class can implement an interface, guaranteeing it provides certain methods/properties. An abstract class can't be instantiated directly — it's a base class that defines some behavior and leaves the rest (abstract methods) for subclasses to implement."],example:{title:"Abstract base class",code:`abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): string;

  describe(): string {
    return \`\${this.name} says \${this.makeSound()}\`;
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof!";
  }
}

// const a = new Animal("?"); // Error: cannot instantiate abstract class
const dog = new Dog("Rex");
console.log(dog.describe());
`}}],quiz:[{question:"What does marking a class property 'private' do?",options:["Hides it from the compiler entirely","Prevents access from outside the class at compile time","Makes the property readonly","Removes it from the compiled JavaScript"],correctIndex:1,explanation:"private is a compile-time visibility check enforced by TypeScript; it's still present in the emitted JS unless you use native #private fields."},{question:"Can you create an instance of an abstract class directly (new AbstractClass())?",options:["Yes, always","No — abstract classes must be subclassed and their abstract members implemented","Only if it has no constructor","Only in strict mode"],correctIndex:1,explanation:"Abstract classes exist to be extended. TypeScript raises a compile error if you try to instantiate one directly."}]},je={slug:"enums-literals",order:7,title:"Enums & Literal Types",level:"Intermediate",icon:"ListOrdered",summary:"Named sets of constants with enums, and precise 'only these exact values' typing with literals.",sections:[{heading:"String and numeric enums",paragraphs:["An enum defines a named set of constants. Numeric enums auto-increment from 0 by default; string enums require each member to have an explicit string value and are usually easier to debug, since logging a value shows the label instead of a number."],example:{title:"Numeric vs string enums",code:`enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

enum Status {
  Active = "ACTIVE",
  Paused = "PAUSED",
  Done = "DONE",
}

function move(dir: Direction) {
  console.log("Moving:", Direction[dir]);
}

move(Direction.Up);
console.log(Status.Active);
`}},{heading:"Literal types",paragraphs:["A literal type narrows a primitive down to one exact value. Combined with unions, literal types give you a lightweight, zero-runtime-cost alternative to enums — this is an extremely common pattern in real-world TypeScript."],example:{title:"Literal unions instead of an enum",code:`type Direction = "up" | "down" | "left" | "right";

function move(dir: Direction) {
  console.log("Moving:", dir);
}

move("up");
// move("north"); // Error: not assignable to type 'Direction'

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
function request(url: string, method: HttpMethod = "GET") {
  console.log(\`\${method} \${url}\`);
}
request("/users", "POST");
`}},{heading:"Template literal types",paragraphs:["TypeScript can build literal types out of string templates, letting you describe patterns like CSS units or event names precisely."],example:{title:"Pattern-shaped string types",code:`type Size = "small" | "medium" | "large";
type CSSClass = \`btn-\${Size}\`;

const valid: CSSClass = "btn-medium";
// const invalid: CSSClass = "btn-huge"; // Error

type EventName = \`on\${Capitalize<"click" | "hover">}\`;
// EventName is "onClick" | "onHover"
const handler: EventName = "onClick";

console.log(valid, handler);
`}}],quiz:[{question:"By default, what value does the first member of a numeric enum get?",options:["1","0","undefined","It must be set explicitly"],correctIndex:1,explanation:"Numeric enums start at 0 by default and auto-increment for each subsequent member, unless you assign values explicitly."},{question:"What is a common lightweight alternative to enums in modern TypeScript?",options:["Abstract classes","A union of string literal types","The 'any' type","Namespaces"],correctIndex:1,explanation:'A union like "up" | "down" | "left" | "right" gives similar safety to an enum with zero runtime overhead.'}]},Ne={slug:"generics",order:8,title:"Generics",level:"Advanced",icon:"Boxes",summary:"Write reusable, type-safe functions, interfaces, and classes that work over many types instead of just one.",sections:[{heading:"Why generics?",paragraphs:["Without generics, you'd either write one function per type, or use 'any' and lose type safety. Generics let a function, interface, or class declare a placeholder type — filled in each time it's used — while preserving full type checking."],example:{title:"A generic identity function",code:`function firstElement<T>(arr: T[]): T {
  return arr[0];
}

// T is inferred from the argument each time
const num = firstElement([1, 2, 3]); // T = number
const str = firstElement(["a", "b"]); // T = string

console.log(num, str);
`}},{heading:"Generic interfaces and classes",paragraphs:["Interfaces and classes can also be generic, which is how collection types like Array<T> and Map<K, V> are defined in TypeScript's own standard library."],example:{title:"A generic Box container",code:`interface Box<T> {
  value: T;
}

class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberBox: Box<number> = { value: 42 };
const stack = new Stack<string>();
stack.push("first");
stack.push("second");

console.log(numberBox.value, stack.pop());
`}},{heading:"Constraints with extends",paragraphs:["Sometimes a generic type needs to guarantee it has certain properties. Use extends to constrain it — the function can then safely access anything guaranteed by the constraint."],example:{title:"Constraining a generic type",code:`interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): T {
  console.log("Length:", item.length);
  return item;
}

logLength("hello");        // strings have .length
logLength([1, 2, 3]);      // arrays have .length
// logLength(42);           // Error: number has no .length
`}},{heading:"Default type parameters",paragraphs:["Like default function parameters, a generic can have a default type, used when the caller doesn't specify one explicitly."],example:{title:"Default generic parameter",code:`interface ApiResponse<T = unknown> {
  data: T;
  status: number;
}

const response: ApiResponse<{ id: number }> = {
  data: { id: 1 },
  status: 200,
};

console.log(response.data.id, response.status);
`}}],quiz:[{question:"What problem do generics solve compared to using 'any'?",options:["They make code run faster at runtime","They preserve type safety while still supporting many different types","They remove the need for interfaces","They are required for all functions"],correctIndex:1,explanation:"Generics let you write flexible, reusable code without giving up compile-time type checking, unlike 'any'."},{question:"What does 'function f<T extends HasLength>(x: T)' mean?",options:["T must be exactly the HasLength type","T can be any type, HasLength is ignored","T can be any type that includes at least the members of HasLength","This is invalid TypeScript syntax"],correctIndex:2,explanation:"'extends' as a generic constraint means T must be a type that is compatible with (has at least the shape of) HasLength."}]},Ae={slug:"advanced-types",order:9,title:"Advanced Types",level:"Advanced",icon:"Sparkles",summary:"Utility types, mapped types, and conditional types — the tools TypeScript power users reach for daily.",sections:[{heading:"Built-in utility types",paragraphs:["TypeScript ships a set of generic 'utility types' that transform other types. They're used constantly in real codebases, so knowing them well pays off immediately."],bullets:["Partial<T> — makes every property optional","Required<T> — makes every property required","Readonly<T> — makes every property readonly","Pick<T, Keys> — keeps only the listed properties","Omit<T, Keys> — removes the listed properties","Record<Keys, Value> — builds an object type from a set of keys to a value type"],example:{title:"Utility types in action",code:`interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// Only title/done are editable
type TodoEdit = Partial<Pick<Todo, "title" | "done">>;

function updateTodo(todo: Todo, edits: TodoEdit): Todo {
  return { ...todo, ...edits };
}

const todo: Todo = { id: 1, title: "Learn TS", done: false };
const updated = updateTodo(todo, { done: true });

console.log(updated);

type Roles = "admin" | "editor" | "viewer";
const permissions: Record<Roles, string[]> = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};
console.log(permissions.editor);
`}},{heading:"Mapped types",paragraphs:["A mapped type builds a new type by transforming every property of an existing type. This is exactly how Partial<T> and Readonly<T> are implemented under the hood — and you can write your own."],example:{title:"Writing your own mapped type",code:`interface Flags {
  darkMode: boolean;
  betaFeatures: boolean;
}

// A custom mapped type: turn every boolean flag into a
// function that toggles it
type Toggles<T> = {
  [K in keyof T]: () => void;
};

const toggles: Toggles<Flags> = {
  darkMode: () => console.log("toggled dark mode"),
  betaFeatures: () => console.log("toggled beta features"),
};

toggles.darkMode();
`}},{heading:"Conditional types & infer",paragraphs:["A conditional type picks between two types based on a condition, using syntax that mirrors a ternary: T extends U ? X : Y. Combined with infer, you can extract a type from inside another type — this is how utilities like ReturnType<T> work."],example:{title:"Extracting a function's return type",code:`type MyReturnType<T> = T extends (...args: any[]) => infer R
  ? R
  : never;

function createUser() {
  return { id: 1, name: "Ada" };
}

// Equivalent to the built-in ReturnType<typeof createUser>
type User = MyReturnType<typeof createUser>;

const u: User = { id: 2, name: "Grace" };
console.log(u);
`}}],quiz:[{question:'What does Pick<Todo, "title" | "done"> produce?',options:["A type with only the title and done properties from Todo","A type with every property except title and done","An array of Todo objects","A type where title and done are optional"],correctIndex:0,explanation:"Pick<T, Keys> selects a subset of properties from T, keeping only the ones listed."},{question:"What does the 'infer' keyword do inside a conditional type?",options:["Marks a property as inferred (optional)","Declares a new type variable to capture part of a matched type","Disables type checking for that branch","Converts a type to 'any'"],correctIndex:1,explanation:"infer introduces a placeholder type variable that TypeScript fills in based on what actually matches in the conditional type."}]},Ce={slug:"modules",order:10,title:"Modules & Organizing Code",level:"Advanced",icon:"FolderTree",summary:"import/export syntax, default vs. named exports, and how TypeScript projects are typically organized.",sections:[{heading:"Named and default exports",paragraphs:["Any file with a top-level import or export is treated as a module — its variables aren't global. Named exports let you export multiple things per file; a default export marks one 'main' thing."],example:{title:"Exporting from a module (conceptual — normally split across files)",code:`// --- math.ts ---
export function add(a: number, b: number) {
  return a + b;
}
export const PI = 3.14159;

export default class Calculator {
  history: number[] = [];
  compute(a: number, b: number) {
    const result = add(a, b);
    this.history.push(result);
    return result;
  }
}

// --- app.ts ---
// import Calculator, { add, PI } from "./math";

const calc = new Calculator();
console.log(calc.compute(2, 3));
console.log(add(PI, 1));
`}},{heading:"Type-only imports and exports",paragraphs:["When you're importing something purely for its type (not its runtime value), TypeScript lets you mark that explicitly with 'import type'. This helps bundlers strip type-only imports cleanly and makes intent obvious."],example:{title:"import type",code:`interface Config {
  apiUrl: string;
  retries: number;
}

// import type { Config } from "./config";
// (shown inline here since this playground is a single file)

function loadConfig(): Config {
  return { apiUrl: "https://api.example.com", retries: 3 };
}

console.log(loadConfig());
`}},{heading:"Organizing a real project",paragraphs:["Most TypeScript projects group code by feature: types.ts for shared interfaces, one file per component/module, and an index.ts that re-exports the public surface of a folder. Keeping types close to where they're used (and sharing only what needs to be shared) keeps large codebases navigable."]}],quiz:[{question:"How many default exports can a single module have?",options:["Unlimited","Exactly one","Zero, only named exports are allowed","Two"],correctIndex:1,explanation:"A module can have at most one default export, but as many named exports as you like."},{question:"What is 'import type' used for?",options:["Importing a value at runtime","Importing something purely for its type, with no runtime footprint","Importing a whole npm package","It's not valid TypeScript syntax"],correctIndex:1,explanation:"import type signals that the import is type-only and can be safely erased when compiling to JavaScript."}]},Me={slug:"decorators",order:11,title:"Decorators",level:"Advanced",icon:"Wand2",summary:"Annotate and modify classes and their members declaratively — the pattern behind Angular, NestJS, and more.",sections:[{heading:"What decorators are",paragraphs:["A decorator is a function that can observe, modify, or replace a class, method, accessor, property, or parameter. They're written with an @ prefix directly above the thing they decorate. TypeScript 5 implements the new, now-standardized (Stage 3) ECMAScript decorators proposal."],example:{title:"A simple logging method decorator",code:`function logCall(target: any, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);
  return function (this: any, ...args: any[]) {
    console.log(\`Calling \${methodName} with\`, args);
    return target.apply(this, args);
  };
}

class Calculator {
  @logCall
  add(a: number, b: number) {
    return a + b;
  }
}

const calc = new Calculator();
console.log("Result:", calc.add(2, 3));
`}},{heading:"Class decorators",paragraphs:["A class decorator receives the class itself and can add behavior or even return a new class. Frameworks like Angular use class decorators (@Component, @Injectable) to attach metadata that their runtime reads later."],example:{title:"Adding metadata with a class decorator",code:`function Entity(tableName: string) {
  return function <T extends { new (...args: any[]): {} }>(target: T) {
    return class extends target {
      tableName = tableName;
    };
  };
}

@Entity("users")
class User {
  constructor(public name: string) {}
}

const u = new User("Ada") as User & { tableName: string };
console.log(u.name, u.tableName);
`}},{heading:"When you'll actually use decorators",paragraphs:["Most application code doesn't write custom decorators day to day — but frameworks like Angular, NestJS, and TypeORM rely on them heavily for dependency injection, routing, and ORM mapping. Understanding how they work helps you read those frameworks' internals, and enable them in tsconfig.json with the 'experimentalDecorators' setting for the older, widely-deployed decorator syntax if a library requires it."]}],quiz:[{question:"What is a decorator used for in TypeScript?",options:["Adding CSS styles to a component","Observing, modifying, or replacing a class or its members declaratively with an @ syntax","Declaring a variable's type","Importing a module"],correctIndex:1,explanation:"Decorators are functions applied with @ syntax that can add behavior or metadata to classes, methods, and other class members."},{question:"Which popular frameworks make heavy use of decorators?",options:["jQuery and Lodash","Angular and NestJS","Webpack and Babel","ESLint and Prettier"],correctIndex:1,explanation:"Angular and NestJS use decorators extensively for dependency injection, routing, and component/module metadata."}]},Ee={slug:"real-world",order:12,title:"Real-World TypeScript",level:"Advanced",icon:"Trophy",summary:"Strictness settings, working with untyped JS libraries, and where to go next on your path to mastery.",sections:[{heading:"Turn strict mode on — and keep it on",paragraphs:['The single highest-leverage setting in any TypeScript project is "strict": true in tsconfig.json. It bundles together strictNullChecks, noImplicitAny, strictFunctionTypes, and more. Projects that start strict stay far more maintainable than projects that try to add strictness later.'],example:{title:"noImplicitAny catches missing types",code:`// With "noImplicitAny": true, a parameter with no
// annotation and no inferable type is an error:
//
// function double(x) {   // Error: x implicitly has an 'any' type
//   return x * 2;
// }

function double(x: number): number {
  return x * 2;
}

console.log(double(21));
`}},{heading:"Working with JavaScript libraries",paragraphs:["Most popular JS libraries ship type declarations (.d.ts files), either bundled or via the community-maintained @types packages (e.g. npm install -D @types/lodash). Declaration files describe a library's shape without containing any implementation — letting TypeScript type-check code that calls into plain JavaScript."],example:{title:"A minimal hand-written declaration file (conceptual)",code:`// Normally this would live in a separate "my-lib.d.ts" file
declare module "my-lib" {
  export function greet(name: string): string;
}

// Elsewhere in your app, after "import { greet } from 'my-lib'":
// TypeScript now knows greet's signature even though
// my-lib itself is plain, untyped JavaScript.

interface Greeter {
  greet(name: string): string;
}
const fakeLib: Greeter = { greet: (n) => \`Hi \${n}\` };
console.log(fakeLib.greet("world"));
`}},{heading:"Type assertions — use sparingly",paragraphs:["Sometimes you know more about a value's type than TypeScript can infer. The 'as' keyword asserts a type without changing runtime behavior — but it bypasses safety checks, so prefer narrowing (typeof/in/instanceof) whenever possible."],example:{title:"as, and the safer alternative",code:`const input = document.createElement("input"); // HTMLInputElement
const el = input as HTMLElement; // widening assertion, always safe

// Risky: asserting something the compiler can't verify
const value = "42" as unknown as number; // avoid this pattern!

// Prefer parsing/checking instead:
const safeValue = Number("42");
console.log(el.tagName, safeValue);
`}},{heading:"You've covered the fundamentals — where next?",paragraphs:["You now know the full arc: basic types, functions, interfaces, unions, classes, generics, and the advanced type system. From here, the fastest way to actually master TypeScript is to use it — convert a small JavaScript project, turn on strict mode, and let the compiler guide you. The official Playground and Handbook (linked below) are excellent for exploring anything this course didn't cover in depth."],bullets:["TypeScript Handbook — the canonical, in-depth reference: typescriptlang.org/docs/handbook/intro.html","TypeScript Playground — experiment with any snippet, share links: typescriptlang.org/play","Try converting one real JS file in a personal project to .ts this week."]}],quiz:[{question:"What is the recommended setting to enable in tsconfig.json for new projects?",options:['"loose": true','"strict": true','"any": true','"legacy": true'],correctIndex:1,explanation:'"strict": true enables the full family of strict type-checking flags and is recommended for all new TypeScript projects.'},{question:"What do .d.ts declaration files contain?",options:["Compiled JavaScript output","Type information describing a library's shape, without implementation","Test cases for a library","CSS styles"],correctIndex:1,explanation:"Declaration files describe types only — no runtime code — so TypeScript can check code that uses a plain-JS library."}]},x=[xe,ve,we,ke,Se,Te,je,Ne,Ae,Ce,Me,Ee].sort((t,a)=>t.order-a.order);function qe(t){return x.find(a=>a.slug===t)}function Ie(t){const a=x.findIndex(n=>n.slug===t);return{prev:a>0?x[a-1]:null,next:a>=0&&a<x.length-1?x[a+1]:null}}const Le={Rocket:he,Type:ge,FunctionSquare:me,Layout:ue,GitBranch:le,Box:se,ListOrdered:pe,Boxes:oe,Sparkles:B,FolderTree:ie,Wand2:fe,Trophy:ye};function I({name:t,...a}){const n=Le[t]??B;return e.jsx(n,{...a})}function Re({progress:t,onNavigate:a}){return e.jsxs("nav",{className:"sidebar","aria-label":"Course modules",children:[e.jsxs(N,{to:"/",className:"sidebar-brand",onClick:a,end:!0,children:[e.jsx("span",{className:"sidebar-brand-badge",children:"TS"}),e.jsx("span",{children:"TS Master"})]}),e.jsxs("div",{className:"sidebar-progress",children:[e.jsxs("div",{className:"sidebar-progress-label",children:[e.jsx("span",{children:"Your progress"}),e.jsxs("span",{children:[t.percent,"%"]})]}),e.jsx("div",{className:"progress-track",children:e.jsx("div",{className:"progress-fill",style:{width:`${t.percent}%`}})})]}),e.jsxs(N,{to:"/",className:"sidebar-link",onClick:a,end:!0,children:[e.jsx(ce,{size:16}),e.jsx("span",{children:"Home"})]}),e.jsx("div",{className:"sidebar-section-label",children:"Modules"}),e.jsx("ul",{className:"sidebar-list",children:x.map(n=>e.jsx("li",{children:e.jsxs(N,{to:`/module/${n.slug}`,onClick:a,className:({isActive:s})=>`sidebar-link ${s?"sidebar-link-active":""}`,children:[e.jsx(I,{name:n.icon,size:16}),e.jsxs("span",{className:"sidebar-link-text",children:[n.order,". ",n.title]}),t.isComplete(n.slug)&&e.jsx(q,{size:14,className:"sidebar-check","aria-label":"Completed"})]})},n.slug))}),e.jsx("a",{className:"sidebar-footer-link",href:"https://www.typescriptlang.org/play",target:"_blank",rel:"noreferrer",children:"Open the official Playground ↗"})]})}const J="ts-master:completed-modules";function ze(){try{const t=localStorage.getItem(J);if(!t)return new Set;const a=JSON.parse(t);return new Set(a)}catch{return new Set}}function $e(t){try{localStorage.setItem(J,JSON.stringify(Array.from(t)))}catch{}}function Oe(){const[t,a]=p.useState(()=>ze());p.useEffect(()=>{$e(t)},[t]);const n=p.useCallback(o=>{a(l=>{if(l.has(o))return l;const c=new Set(l);return c.add(o),c})},[]),s=p.useCallback(o=>{a(l=>{const c=new Set(l);return c.has(o)?c.delete(o):c.add(o),c})},[]),r=p.useCallback(o=>t.has(o),[t]),i=Math.round(t.size/x.length*100);return{completed:t,markComplete:n,toggleComplete:s,isComplete:r,percent:i}}function Pe(){const t=Oe(),[a,n]=p.useState(!1);return e.jsxs("div",{className:"app-shell",children:[e.jsx("button",{type:"button",className:"mobile-menu-btn",onClick:()=>n(s=>!s),"aria-label":"Toggle navigation",children:a?e.jsx(be,{size:20}):e.jsx(de,{size:20})}),e.jsx("div",{className:`sidebar-wrap ${a?"sidebar-wrap-open":""}`,children:e.jsx(Re,{progress:t,onNavigate:()=>n(!1)})}),e.jsx("main",{className:"main-content",children:e.jsx(W,{context:t})})]})}function Be(){const t=z(),n=x.find(s=>!t.isComplete(s.slug))??x[0];return e.jsxs("div",{className:"page-content",children:[e.jsxs("section",{className:"hero",children:[e.jsx("p",{className:"hero-eyebrow",children:"Zero to master, one module at a time"}),e.jsxs("h1",{className:"hero-title",children:["Learn ",e.jsx("span",{className:"hero-accent",children:"TypeScript"})," by actually writing it."]}),e.jsx("p",{className:"hero-subtitle",children:"Twelve bite-sized modules covering everything from your first type annotation to conditional types and decorators — every concept paired with a live, editable playground so you learn by doing, not just reading."}),e.jsxs("div",{className:"hero-actions",children:[e.jsxs(S,{to:`/module/${n.slug}`,className:"btn btn-primary btn-lg",children:[t.percent>0?"Continue learning":"Start learning",e.jsx(E,{size:18})]}),e.jsx("a",{href:"https://www.typescriptlang.org/play",target:"_blank",rel:"noreferrer",className:"btn btn-ghost btn-lg",children:"Official Playground ↗"})]}),t.percent>0&&e.jsxs("div",{className:"hero-progress",children:[e.jsx("div",{className:"progress-track",children:e.jsx("div",{className:"progress-fill",style:{width:`${t.percent}%`}})}),e.jsxs("span",{children:[t.percent,"% complete"]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"section-heading",children:"Course modules"}),e.jsx("div",{className:"module-grid",children:x.map(s=>{const r=t.isComplete(s.slug);return e.jsxs(S,{to:`/module/${s.slug}`,className:"module-card",children:[e.jsxs("div",{className:"module-card-top",children:[e.jsx("span",{className:`module-card-icon level-${s.level.toLowerCase()}`,children:e.jsx(I,{name:s.icon,size:20})}),r&&e.jsxs("span",{className:"module-card-done",children:[e.jsx(q,{size:14})," Done"]})]}),e.jsxs("div",{className:"module-card-number",children:["Module ",s.order]}),e.jsx("h3",{className:"module-card-title",children:s.title}),e.jsx("p",{className:"module-card-summary",children:s.summary}),e.jsx("span",{className:`level-badge level-badge-${s.level.toLowerCase()}`,children:s.level})]},s.slug)})})]}),e.jsx("section",{className:"about-strip",children:e.jsxs("p",{children:["Inspired by"," ",e.jsx("a",{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noreferrer",children:"typescriptlang.org"})," ","— TypeScript is JavaScript with syntax for types, built and maintained by Microsoft. This site is an independent, open-source study companion with hands-on playgrounds for every topic."]})})]})}const Je="modulepreload",De=function(t,a){return new URL(t,a).href},R={},We=function(a,n,s){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=Promise.allSettled(n.map(d=>{if(d=De(d,s),d in R)return;R[d]=!0;const f=d.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(!!s)for(let v=o.length-1;v>=0;v--){const b=o[v];if(b.href===d&&(!f||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${m}`))return;const y=document.createElement("link");if(y.rel=f?"stylesheet":Je,f||(y.as="script"),y.crossOrigin="",y.href=d,c&&y.setAttribute("nonce",c),document.head.appendChild(y),f)return new Promise((v,b)=>{y.addEventListener("load",v),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return a().catch(i)})};function A(t){if(typeof t=="string")return t;if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t,null,2)??String(t)}catch{return String(t)}}function He(t){const a=[],n={log:console.log,error:console.error,warn:console.warn};console.log=(...r)=>a.push(r.map(A).join(" ")),console.error=(...r)=>a.push("✕ "+r.map(A).join(" ")),console.warn=(...r)=>a.push("⚠ "+r.map(A).join(" "));let s=null;try{new Function(t)()}catch(r){s=r instanceof Error?`${r.name}: ${r.message}`:String(r)}finally{console.log=n.log,console.error=n.error,console.warn=n.warn}return{logs:a,error:s}}let Ue=0,C=null;function _e(){return C||(C=We(()=>import("./typescript--neTRIcj.js").then(t=>t.t),__vite__mapDeps([0,1]),import.meta.url)),C}function Fe({title:t,code:a}){const[n,s]=p.useState(a),[r,i]=p.useState([]),[o,l]=p.useState(null),[c,d]=p.useState(!1),[f,m]=p.useState(!1),g=p.useRef(`playground-${Ue++}`),y=u=>{u.updateOptions({minimap:{enabled:!1}})};async function v(){d(!0),m(!0);try{const u=await _e(),w=u.transpileModule(n,{compilerOptions:{target:u.ScriptTarget.ES2022,module:u.ModuleKind.None,jsx:u.JsxEmit.None},reportDiagnostics:!1}),k=He(w.outputText);i(k.logs),l(k.error)}catch(u){i([]),l(u instanceof Error?u.message:String(u))}finally{m(!1)}}function b(){s(a),i([]),l(null),d(!1)}return e.jsxs("div",{className:"playground",id:g.current,children:[e.jsxs("div",{className:"playground-header",children:[e.jsx("span",{className:"playground-title",children:t}),e.jsxs("div",{className:"playground-actions",children:[e.jsx("button",{type:"button",className:"btn btn-ghost",onClick:b,children:"Reset"}),e.jsx("button",{type:"button",className:"btn btn-primary",onClick:v,disabled:f,children:f?"Running…":"▶ Run"})]})]}),e.jsx("div",{className:"playground-editor",children:e.jsx(V,{height:"260px",defaultLanguage:"typescript",value:n,theme:"vs-dark",onChange:u=>s(u??""),onMount:y,options:{fontSize:13,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,padding:{top:12}}})}),c&&e.jsxs("div",{className:"playground-output",children:[e.jsx("div",{className:"playground-output-label",children:"Console output"}),o&&e.jsxs("div",{className:"output-line output-error",children:["✕ ",o]}),!o&&r.length===0&&e.jsx("div",{className:"output-line output-muted",children:"(no console output)"}),r.map((u,w)=>e.jsx("div",{className:"output-line",children:u},w))]})]})}function Ge({questions:t,onPass:a}){const[n,s]=p.useState({}),[r,i]=p.useState(!1),o=t.every((m,g)=>n[g]!==void 0),l=t.filter((m,g)=>n[g]===m.correctIndex).length,c=r&&l===t.length;function d(m,g){r||s(y=>({...y,[m]:g}))}function f(){i(!0),l===t.length&&a()}return e.jsxs("div",{className:"quiz",children:[e.jsx("h3",{className:"quiz-title",children:"Check your understanding"}),t.map((m,g)=>{const y=n[g];return e.jsxs("div",{className:"quiz-question",children:[e.jsxs("p",{className:"quiz-question-text",children:[g+1,". ",m.question]}),e.jsx("div",{className:"quiz-options",children:m.options.map((v,b)=>{const u=y===b,w=b===m.correctIndex;let k="";return r&&u&&w?k="quiz-option-correct":r&&u&&!w?k="quiz-option-wrong":r&&w&&(k="quiz-option-correct-muted"),e.jsx("button",{type:"button",className:`quiz-option ${u?"quiz-option-selected":""} ${k}`,onClick:()=>d(g,b),disabled:r,children:v},b)})}),r&&e.jsx("p",{className:"quiz-explanation",children:m.explanation})]},g)}),!r&&e.jsx("button",{type:"button",className:"btn btn-primary",disabled:!o,onClick:f,children:"Submit answers"}),r&&e.jsx("div",{className:`quiz-result ${c?"quiz-result-pass":"quiz-result-fail"}`,children:c?`Nice work — ${l}/${t.length} correct. Module marked complete!`:`You got ${l}/${t.length}. Review the explanations above, then try the next module — you can always revisit this one.`})]})}function Ve(){const{slug:t}=H(),a=z(),n=t?qe(t):void 0;if(p.useEffect(()=>{window.scrollTo({top:0})},[t]),!n)return e.jsx(U,{to:"/",replace:!0});const{prev:s,next:r}=Ie(n.slug),i=a.isComplete(n.slug);return e.jsxs("div",{className:"page-content module-page",children:[e.jsxs("div",{className:"module-header",children:[e.jsx("span",{className:`module-card-icon level-${n.level.toLowerCase()}`,children:e.jsx(I,{name:n.icon,size:22})}),e.jsxs("div",{children:[e.jsxs("div",{className:"module-header-meta",children:[e.jsx("span",{className:`level-badge level-badge-${n.level.toLowerCase()}`,children:n.level}),e.jsxs("span",{className:"module-header-order",children:["Module ",n.order," of 12"]})]}),e.jsx("h1",{className:"module-header-title",children:n.title}),e.jsx("p",{className:"module-header-summary",children:n.summary})]}),e.jsxs("button",{type:"button",className:`btn ${i?"btn-done":"btn-ghost"} mark-complete-btn`,onClick:()=>a.toggleComplete(n.slug),children:[e.jsx(q,{size:16}),i?"Completed":"Mark as complete"]})]}),n.sections.map((o,l)=>e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{className:"lesson-heading",children:o.heading}),o.paragraphs.map((c,d)=>e.jsx("p",{className:"lesson-paragraph",children:c},d)),o.bullets&&e.jsx("ul",{className:"lesson-bullets",children:o.bullets.map((c,d)=>e.jsx("li",{children:c},d))}),o.example&&e.jsx(Fe,{title:o.example.title,code:o.example.code})]},l)),e.jsx("section",{className:"lesson-section",children:e.jsx(Ge,{questions:n.quiz,onPass:()=>a.markComplete(n.slug)})}),e.jsxs("nav",{className:"module-pager",children:[s?e.jsxs(S,{to:`/module/${s.slug}`,className:"pager-link pager-prev",children:[e.jsx(re,{size:16}),e.jsxs("span",{children:[e.jsx("span",{className:"pager-label",children:"Previous"}),e.jsx("span",{className:"pager-title",children:s.title})]})]}):e.jsx("span",{}),r?e.jsxs(S,{to:`/module/${r.slug}`,className:"pager-link pager-next",children:[e.jsxs("span",{children:[e.jsx("span",{className:"pager-label",children:"Next"}),e.jsx("span",{className:"pager-title",children:r.title})]}),e.jsx(E,{size:16})]}):e.jsxs(S,{to:"/",className:"pager-link pager-next",children:[e.jsxs("span",{children:[e.jsx("span",{className:"pager-label",children:"Finished!"}),e.jsx("span",{className:"pager-title",children:"Back to overview"})]}),e.jsx(E,{size:16})]})]})]},n.slug)}function Ye(){return e.jsxs("div",{className:"page-content",children:[e.jsx("h1",{children:"Page not found"}),e.jsx("p",{children:"That page doesn't exist."}),e.jsx(S,{to:"/",className:"btn btn-primary",children:"Back home"})]})}function Ke(){return e.jsx(_,{children:e.jsxs(T,{element:e.jsx(Pe,{}),children:[e.jsx(T,{path:"/",element:e.jsx(Be,{})}),e.jsx(T,{path:"/module/:slug",element:e.jsx(Ve,{})}),e.jsx(T,{path:"*",element:e.jsx(Ye,{})})]})})}M.createRoot(document.getElementById("root")).render(e.jsx(F.StrictMode,{children:e.jsx(G,{children:e.jsx(Ke,{})})}));
