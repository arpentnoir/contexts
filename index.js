import fs from 'fs';
export const context = JSON.parse(fs.readFileSync('person.json'), 'utf8')
console.log(context);