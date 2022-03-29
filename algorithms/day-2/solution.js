//plus minus


function plusMinus(arr) {
    // Write your code here
    let zeros = 0;
    let negatives = 0;
    let positives = 0;
    
    let zerosResponse = 0;
    let negativesResponse = 0;
    let positivesResponse = 0;
  
    if(!arr){
         console.log(`0 \n 0 \n 0`)
        return
    }
    if(arr.length == 0){
        console.log(`0 \n 0 \n 0`)
        return
    }
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < 0){ negatives++}
        if(arr[i] == 0){zeros++}
        if(arr[i] > 0) {positives++}
        else{}
    }
    if(positives == 0){positivesResponse = 0}else{
      positivesResponse = positives/arr.length   
    }
    if(negatives == 0){negativesResponse = 0}else{
        negativesResponse = negatives/arr.length  
    }
    if( zeros == 0){zerosResponse = 0}else{
       
        
       zerosResponse = zeros/arr.length
    }
    
    
     console.log(`${positivesResponse} \n ${negativesResponse} \n ${zerosResponse}`) 

}
