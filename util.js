const fs = require('fs')
var readfile0 = function() {
    var map0 = new Map();
    var input0 = fs.readFileSync('Input_00.txt').toString().split("\n");
    for( w in input0)
           {
            input0[w]= input0[w].replace(/\r/g, "");
            map0.set(input0[w],w)
           }
           return [input0,map0]
        }


var readfile1 = function() {
    var map1 = new Map();
    var input1 = fs.readFileSync('Input_01.txt').toString().split("\n");
    for( w in input1)
           {
            input1[w]= input1[w].replace(/\r/g, "");
            map1.set(input1[w],w)
           }
           return [input1,map1]
        }

var readfile2 = function() 
{
            
            var map2 = new Map();
            var input2 = fs.readFileSync('Input_02.txt').toString().split("\n");
            for( w in input2)
                   {
                    input2[w]= input2[w].replace(/\r/g, "");
                    map2.set(input2[w],w)
                   }
                   return [input2,map2]
}
module.exports = {readfile0,readfile1,readfile2}