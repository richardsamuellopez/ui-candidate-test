     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         return str.split("").reverse().join("");
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
		values.sort(function(a, b){return a-b});//Sort the array ascending and values[0] is the minimum

		var min=values[0];
		//Found a quicker way to do this
		/*for(var i=1; i<values.length;i++)
		{
			if(values[i]<min)
				min=values[i];
		}*/
				
		return min;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
		var outputArray = [];
		for(var i=0; i< values.length; i++)
		{
			if((jQuery.inArray(values[i], outputArray)) == -1)
			{
				outputArray.push(values[i]);
			}
		}
		return outputArray;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         for(var i=1; i<=100; i++)
         {
         	if(i%3==0 && i%5==0)
         		console.log("FizzBuzz");
         	else if(i%3==0)
         		console.log("Fizz");
         	else if(i%5==0)
         		console.log("Buzz");
         	else
         		console.log(i);
         }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
		for(var i=0; i< fruits.length; i++)
		{
			if((jQuery.inArray(fruits[i], fruitsToRemove)) >=0)
			{
				fruits.splice(i,1);
			}
		}
		return fruits;
		
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
		if(toPush instanceof Array)
		{
			array=array.concat(toPush);
		}
		else
		{
			array.push(toPush);
		}
		return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
		var array=[];
		if(sourceStr.length > 0)
			array=sourceStr.split(",");
		return array;
	}

     // Write a function that will take any number of arguments and return their sum
     function sum() {
     	var sum=0;
	 	for(var i=0;i<arguments.length;i++)
	 		sum=sum+arguments[i];
	 		
	 	return sum;
	 }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
		var valid=false;
		// Using a regular expression if there is anything other than whitespace
        if(/^\s*$/.test(sourceStr))
        {
         	valid=true;
        }
        return valid;
     }

     // write an example of a javascript closure
	 var makeCounter = function(){	
	 	var privateCounter = 0;
	 	function changeBy(val){
	 		privateCounter += val;
	 	}
	 	return{
	 		increment: function(){
	 			changeBy(1);
	 		},
	 		decrement: function(){
	 			changeBy(-1);
	 		},
	 		value: function(){
	 			return privateCounter;
	 		}
	 	}
	 };
	 
	 
     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     
	var collection={
		"people":[
	 		{
	 			"firstName":"Steve", 
	 			"lastName":"Rodgers", 
	 			"city":"New York City", 
	 			"state":"New York", 
	 			"zip":"91702", 
	 			"phoneNumbers":[
	 				{
	 					"type":"home",
	 					"number":"317 555-1945"
	 				},
	 				{
	 					"type":"cell",
	 					"number":"317 555-2014"
	 				}
	 			]
	 		},
	 		{
	 			"firstName":"Tony", 
	 			"lastName":"Stark", 
			 	"city":"Los Angeles", 
	 			"state":"California", 
			 	"zip":"78452", 
	 			"phoneNumbers":[
	 				{
	 					"type":"home",
	 					"number":"317 555-2353"
	 				},
	 				{
	 					"type":"cell",
	 					"number":"317 555-9381"
	 				}
	 			]
	 		}
	 	]
	 }

	 	
     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');
/*Not sure on this one*/

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
	 var div1 = document.getElementById("div1");
	 
	 var selectArray = ["Apple","Banana","Tomato"];
	 
	 var selectList = document.createElement("select");
	 selectList.id="fruitSelect";
	 
	 for(var i=0; i<selectArray.length; i++){
	 	var option = document.createElement("option");
	 	option.value=selectArray[i];
	 	option.text=selectArray[i];
	 	selectList.appendChild(option);
	 }
	 var fruitButton = document.createElement("Button");
	 fruitButton.innerHTML="Fruit Button";
	 fruitButton.onclick = function(){
	 	var element = document.getElementById("fruitSelect");
	 	var value = element.options[element.selectedIndex].value;
	 	var text =  element.options[element.selectedIndex].text;
	 	console.log("Value: " + value + " Text: "+ text);
	 };
	  div1.appendChild(selectList);
	
	 div1.appendChild(fruitButton);
	 
     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
/*     $(".link");
     $("#fizz").children();
     $(".buzz").children();
     $("a");
     $("a[href$='#']")
*/
     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
	 var characterArray = ["Mario", "Luigi", "Peach", "Yoshi", "Bowser"];
	 var list1 = document.getElementById("list1");
	 for(i=0;i<characterArray.length;i++){
	 	var listItem = document.createElement('li');
	 	listItem.innerHTML=characterArray[i];
	 	list1.appendChild(listItem);
	 }

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
	 var foobar = document.getElementById("foobar");
	 var checkBoxArray = ["Daily","Weekly","Monthly"];
	 for(i=0;i<checkBoxArray.length;i++){
		var newCheckBox = document.createElement('input');
		newCheckBox.type = 'checkbox';
		newCheckBox.id = checkBoxArray[i];
		newCheckBox.value = checkBoxArray[i];
		newCheckBox.tag="timeTag";
		var newLabel = document.createElement('label');
		newLabel.innerHTML=checkBoxArray[i]+"</br>";
		
		foobar.appendChild(newCheckBox);
		foobar.appendChild(newLabel);
		
	 }
	 var link1 = document.createElement('a');
	 var link1Text = document.createTextNode("Check All");
	 var link2 = document.createElement('a');
 	 var link2Text = document.createTextNode("Uncheck All");

	 link1.href="#";
	 link1.appendChild(link1Text);
	 link1.onclick = function () {
	 console.log("HELLO");
	 	var boxes = document.getElementsByTagName('input');
	 	for(var i=0; i<boxes.length;i++){
			if(boxes[i].type=='checkbox')
		 		boxes[i].checked=true;
	 	}

	 };
	 
 	 link2.href="#";
	 link2.appendChild(link2Text);

	 link2.onclick = function () {
	 	var boxes = document.getElementsByTagName('input');
	 	for(var i=0; i<boxes.length;i++){
			if(boxes[i].type=='checkbox')		
		 		boxes[i].checked=false;
	 	}	 
	 };	 
	 
	 foobar.appendChild(link1);
	 var br = document.createElement("br");
	 foobar.appendChild(br);
 	 foobar.appendChild(link2);
	 