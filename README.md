app.js consists of core logic which will find the longest and second longest compound word and return to word.test.js.
Compound word is calculated using Dynamic programming and Map for better efficiency
util.js read the input data from the file (Input_00, Input_01, Input_02) and send to word.test.js file
Word.test.js located in tests will run the test cases. It takes the input from util.js and pass to app.js using assertion
Run command: 
npm init
npm test
NOTE:
If dictionay doesn't contain longest or second longest it will return emtpy string
