const fs = require('fs')

// this writefile create new file and write content
fs.writeFile('fswrite.txt' , 'hey i am just learning nodejs methods' , function(err){
    // if(err) console.log(err);
    // else console.log("done");  
})


// this appendFile add content in existing file
fs.appendFile('fswrite.txt' , '/ni am checking appendFile method to check this text append in this file or not' , function(err){
    // if(err) console.log(err);
    // else console.log('done');
    
    
})

// this rename the file name
fs.rename('fswrite.txt' , 'fs.txt' , function(err){
    // if(err) console.log(err);
    // else console.log("done");
    
    
})


// this copyfile creates file copy of an existing file in a given path

fs.copyFile('fs.txt' , './fscopy/fscopy.txt' , function(err){
    // if(err) console.log(err);
    // else console.log('done');
})

// this unlink delete the file

fs.unlink('delete.txt' , function(err){
    // if(err) console.log(err);
    // else console.log('removed');   
    
})

//this rmdir used to delete the empty folder
fs.rmdir('./rmdir', function(err){
    // if(err) console.log(err);
    // else console.log("done");
})

// this rm used to delete the filled folder

fs.rm('./rmdir', {recursive:true} , function(err){
    // if(err) console.log(err);
    // else console.log("done");
    
    
})

// this readFile used to read the file content and utf8 convert bytes data to readable data

fs.readFile('notes.txt', 'utf8' , function(err , data){
    // if(err) console.log(err);
    // else console.log("file is read and here it is info of file : " , data);

})

