var isPossible = function(i,temp, len,map,dp)
{
      if(i === len)
        return true;
    if(dp[i] !== undefined)
      return dp[i];
   
    for(var j = i; j < len; j++)
    {      
      var x = temp.substring(i,j+1)
      dp[i] = map.has(x) && isPossible(j+1,temp,len,map,dp)
       if(dp[i] == true)
        return true
    }
    return false
}
let scramble_word = function(input,map) { 
console.time("Time taken to process result")  
   var result1 = ""
  var result2 = ""
for(var i = 0; i < input.length; i++)
{
    map.delete(input[i]);
    var temp = input[i];
    var dp  = []
    var p = 0;
    var flag = isPossible(p,temp,temp.length,map,dp)
    if(flag == true)
    {
        if(temp.length > result1.length)
        {
            var t = result1;
            result1 = temp;
            result2 = t;
        }
        else 
        {
            if(temp.length > result2.length)
            {
                result2 = temp;
            }
        }
          
    }
    map.set(input[i],i);
}
console.log("Longest Compound Word: "+result1)
console.log("Second Longest Compound Word: "+ result2)
console.timeEnd("Time taken to process result")
return [result1,result2]
}  
module.exports = {scramble_word}