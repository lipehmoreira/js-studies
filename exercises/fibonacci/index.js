function fibonacciGenerator (n) {
    var result = []
    
    if (n === 1){
            result = [0]
        }else if (n == 2){
            result = [0,1]
        }else{
            result = [0, 1]

            for (var i = 0; i < n-2; i ++){                
                result.push(result[i] + result[i+1])
                   
            }
        }
    return result
}



fibonacciGenerator(10)