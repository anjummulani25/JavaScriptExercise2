function aditionofarrayelement()
{
    let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log(sum);
}

function LargestNumberInArraymethod1()
{
    const numbers=[1,4,6,90,3,432,44,45];
    console.log(Math.max.apply(null,numbers));
}

function LargestNumberInArraymethod2()
{
    let array1=[10,20,30,60,300,5];
    let max=array1[0];
for(let i=1;i<array1.length;i++)
{
  if(array1[i]>max)
  {
    max=array1[i];
  }
}
console.log(max);
}


function reverseno()
{
    let array2=[10,20,30,60,300,5,"anjum","bilkis"]; 
    var Reversearray = [];
    var length1=array2.length;
    console.log(array2.length);
    for (var i = 0; i<=length1-1; i++){
        Reversearray.push(array2.pop());
    }
    console.log(Reversearray);
    
  }

function EvenNumbers()
{
  

  const numbers2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  //var evennumbers=numbers2.filter((number)=>number%2==0);
  var evennumbers=numbers2.filter(function(number){return number%2==0;});
  
  console.log("even number="+evennumbers);
 
  console.log(evennumbers);
  
}

function Rotatearray()
{
  let array3 = [ 1, 2, 3, 4, 5, 6, 7 ];
let numberOfElement = array3.length;
let position=2;
	let p = 1;
		while (p <= position) {
			let last = array3[0];
			for (let i = 0; i < numberOfElement - 1; i++) {
				array3[i] = array3[i + 1];
			}
			array3[numberOfElement - 1] = last;
			p++;
		}

		for (let i = 0; i < numberOfElement; i++) {
			console.log(array3[i] + " ");
		}
}
 
function ArrayFlatnning()
{
  const arr= [
    [1, 2],
    [3, 4],
    [5, 6],[7, 8, 9],
    [10, 11, 12, 13, 14, 15]
];
 console.log( arr.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []));
}


function arrayIntersection()
{
let first_array = [1, 3, 5, 7, 9,55];
let second_array = [2, 3, 4, 5, 6, 9,55];


	let new_array = [];
	for (let i = 0; i < first_array.length; i++) {
		for (let j = 0; j < second_array.length; j++) {
			if (first_array[i] === second_array[j]) {
		new_array.push(first_array[i]);
			}
		}
	}
  for(let k=0;k<new_array.length;k++)
  {
    console.log(new_array[k]);
  }

}


function pairsCount()
{
 const arr=[1,-1,7,5,4,2,3,3,6];
    let count = 0; 
    let sum=6;
    let n=arr.length;
    for (let i = 0; i < n; i++)
       { for (let j = i + 1; j < n; j++)
         {  if (arr[i] + arr[j] == sum)
              {  count++;
 
              }
            }
          }
          console.log(count);
}


function duplicate()
{
  
  //let arr = [89, 89, 11, 2, 3, 4, 2, 4, 5, 7];
  let arr=['arif','tahir','arif','anjum','tahir','taimoor'];


    let len = arr.length,
      output = [],
      count = {};
  
    for (let i = 0; i < len; i++) {
      let item = arr[i];
      count[item] = count[item] <= 1? count[item]+1 : 1;
      if (count[item] != 2) {
        output.push(item);
      }
    }
    console.log(" Unique Values: " + output);
  }
  


  function splitIntoChunk()
   {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const chunk = 3;
    
    for (i=0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        console.log(tempArray);
    }

}

function AssendingOrder()
{
  const array4=[20,49,08,76,2,8];
  console.log("assending order:"+ array4.sort(function(a,b){ return a-b;}));
  const decarray=array4.reverse(array4.sort(function(a,b){ return a-b;}));
  console.log("decending order:"+ decarray);
  
}
function removeDuplicateElement()
{
  const Arraydup=[1,2,3,4,2,4,5,2,5,6,2,5,7];
  console.log("Array Element:"+Arraydup);
  const newset=new Set(Arraydup);
console.log("After Removing Duplicate Element:");
  console.log(newset);
}


function MissingNumber()
{
     const array5=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20];
     const n=array5.length;
    console.log("Array Element:"+array5);
      for (let index = 1; index<= n+1; index++) {
        if (array5.indexOf(index) === -1) 
          {
            console.log("Missing Number:"+index);
          }
      }
    }
     
    function OccuranceOfArrayElement()
    {
      
const array6 = ['a', 'b', 'a', 'a', 'c', 'c'];

const count = {};

for (let index = 0; index < array6.length; index++) 
{
  const element = array6[index];

  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);
    }
    


    function UpparcaseString()
    {
      var array7 = ["watermelon","banana","apple","orange","lemon","grapes","kiwi","chikku"];
      console.log("Orignal Array:"+array7);
array7 = array7.map(function(x){ return x.toUpperCase(); });
console.log("Converted Array:"+array7);
    }
    








  

 
