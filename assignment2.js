//My CallBack functions:
//Q1 CallBack
function myForEachCallBack(elem,idx, ary){
    console.log(elem);
}
//Q2 CallBack
function myMapCallBack(elem, idx, ary){
    console.log(elem*2);
}
//Q3 CallBack
function myFilterCallBack(elem, idx, ary){
    //Checks the condition of the array, and pushes if the condition to remove is not met.
    if(elem.length<=7){
        
}
else{
    ary.push(elem);
}
}
//Q4 CallBack
function mySomeCallBack(elem, idx, ary){

    if(elem==4){
        return true;
    }
}

//Q5 CallBack
function myEveryCallBack(elem, idx, ary){
    let count=0;
  
    for(let i=0; i<ary.length; i++){
        if(ary[i]<6){
            count++;
        }
    }
    if(count==ary.length){
        return true;
    }
    else{
        return false;
    }
    //If all the elements pass the test then return true
}

//Q6 CallBack
function myReduceCallBack(elem, idx, ary){
    let count=0;
    for(let i=0;i<ary.length;i++){
        //Loops throught the array paramter and adds all the values together. Not entirely pertfect
        //since a potential error may occur if the array contains a value that is not numeric.
        //Or my produce some weird output due to type coersion.
        count+=ary[i];
    }
    return count;
}


//Testing array
const ary=[1, 2, 3,4 ,5]

//ary.forEach(element=>console.log(element));

//####Q1
//myForEach
console.log("Question 1")
function myForEach(ary,call){  
    for(let i=0; i<ary.length; i++){
   //console.log(ary[i]);
   call(ary[i], i, ary); //callback function

}

}   
//Passing through a array, and a callback function
//myForEach(ary, element=>console.log(element));
//NOTE:When passing a function as a paramater, do not include ()
myForEach(ary, myForEachCallBack); 
//console.log(myForEach(ary));

//####Q2 myMap
console.log("\n Question 2")
function myMap(ary, call){ 
    for(let i=0; i<ary.length; i++){
     call(ary[i],i,ary);
}
}
myMap(ary, myMapCallBack);

//####Q3 filter
console.log("\n Question 3")
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words);

function filtering(ary, call){
    let filterAry = [];
     
   //Passes in the element to be checked and the filterAry so that it can recieve the values that passes the condition
    for(let i=0;i<ary.length;i++){
        call(ary[i],i,filterAry);
        }
    //Returns the filtered array
    return filterAry;
    }

//console.log(words[0].length);
console.log(filtering(words, myFilterCallBack));


//####Q4 some
console.log("Question 4");
function SOME(ary, call){
    for(let i=0;i<ary.length;i++){
        
       if( call(ary[i],i,ary)==true){
        return true;
       }
        
    }
    return false;
}

console.log(SOME(ary,mySomeCallBack));

//######5 myEvery
console.log("Question 5");
function myEvery(ary, call){
   //Returns the boolean value that the myEveryCallBack produces
    for(let i=0; i<ary.length; i++){
       return call(ary[i],i,ary);
    }
 
}

console.log(myEvery(ary, myEveryCallBack));


//####6 myReduce
//reduce() is to return the sum of all the elements in an array:
console.log("Question 6");
function myReduce(ary, call){
    for(let i=0; i<ary.length; i++){
       return call(ary[i],i,ary);
    }
    
}
console.log(myReduce(ary, myReduceCallBack));


//####7 Includes
//NOTE: This function does not use a calback function to execute.
console.log("Question 7");
function myIncludes(ary, inc){
    for(let i=0; i<ary.length; i++){
        if(ary[i]==inc){
            return true;
        }
    }
    return false;
}
console.log(myIncludes(ary,7));

//####8 Index of
//NOTE: This function does not execute a calback function.
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log("Question 8");
function myIndexOf(ary, inx){
    for(let i=0; i<ary.length;i++){
        if(ary[i]==inx){
           return i;
        }
    }

    return -1;
}

console.log(myIndexOf(ary, 3));

//####9 push
//The push() method adds the specified elements to the end of an array and returns the new length of the array.
//Takes the array and value to be added at the end.
console.log("Question 9");
 function myPush(ary, val){
    let ar3 =[ary.length + 1];
    ar3[ary.length]=val;
    for(let i=0; i<ary.length; i++){
        ar3[i]=ary[i];
    }

    return ar3;
 }

 console.log(myPush(ary, 189));

 //10 lastindexof
 console.log("Question 10");
 function myLastIndexOf(ary, search){
    counts=-1;
    for(let i=0; i<ary.length;i++){
        if(ary[i]==search){
            counts=i;
        }

    }
    return counts;
 }
 console.log(myLastIndexOf(ary, 4));

//11 grabKeys
let testObj={
    key1:"Value1",
    key2:"Value2",
    key3:"Values3",
    key4:"Value4",
};
console.log("Question 11");
function grabKeys(obj){
//Loops through all the items in the object and outputs the keys
    for (let key in obj) {
        console.log(key);
      }
}

console.log(grabKeys(testObj));

//12 grabValues
console.log("Question 12");
function grabValues(obj){
    //Loops through all the items in an object and outputs all the values.
    for (let key in obj) {
        console.log(obj[key]);
      }
}
console.log(grabValues(testObj));


let numsary=[0,1,0,3, 12, 24, 55, 0, 5, 9 ,0, 10, 0];
//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

   
function moveZeros(nums) {
    let i = 0; // Pointer for non-zero elements
    
    // Iterate through the array
    //What this loop is doing is instead of looking for zeros it will just push all the non zeros to the front
    //of the array, leaving the zeros at the back of the array
    for (let j = 0; j < nums.length; j++) {
      // If the current element is non-zero
      if (nums[j] !== 0) {
        // Swap the non-zero element with the element at the non-zero pointer
        //swaps the non-zero element with the first element in the array and incremnts i so that 
        //it swaps with the second element then third and so on until all the non zeros are at the front.
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++; // Move the non-zero pointer forward
      }
    }
    return nums;
  }

console.log(moveZeros(numsary));
