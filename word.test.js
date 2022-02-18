const {readfile0,readfile1, readfile2} = require('../util.js')
const {scramble_word} = require('../app.js')

test('Reading and Calculating the result of file 0 -->',() =>  { 
    console.log("About File 0")
    let data = readfile0()
    var expected = ["technologiesrockspledge", "impledge"]
    var result = scramble_word(data[0],data[1])
    expect(result).toEqual(expected)
}
)
test('Reading and Calculating the result of file 1 -->',() =>  { 
    console.log("About File 1")
    let data = readfile1()
    var expected = ["ratcatdogcat", "catsdogcats"]
    var result = scramble_word(data[0],data[1])
    expect(result).toEqual(expected)
}
)

test('Reading and Calculating the result of file 2 -->',() =>  { 
console.log("About File 2")
let data = readfile2()
var expected = ["ethylenediaminetetraacetates", "electroencephalographically"]
var result = scramble_word(data[0],data[1])
expect(result).toEqual(expected)
}
)
