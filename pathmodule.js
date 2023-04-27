const path=require('path');
const a1=path.basename('C:\\temp\\myfile.html');
console.log(a1);
const a2=path.dirname('/foo/bar/baz/asdf/quux');
console.log(a2);
const a3=path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt'
  });
  console.log(a3);
  const a4=path.isAbsolute('/baz/..'); 
  console.log(a4);
  const a5=path.extname(__filename);
  console.log(__filename,a5);