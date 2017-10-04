$(document).ready(function(){

	//	Pertinent Variables
	var lastNumber = 0;
	var output = "";
	var screenNum="";
	var cont = true;
	var numbers = [];
	var symbols = [];
	var mixArray  = [];
	var i = 0;
	var j;
	var tmp = "";
	var limit = 0;
	var dotCounter =  0;


	// Reset All the pertinent values
	function resetAll(){
		 lastNumber = 0;
		 screenNum="";
		 cont = true;
		 numbers = [];
		 symbols = [];
		 mixArray = [];
		 i = 0;
		 tmp = "";
		 dotCounter = 0;
	}
	// Clean empty strings in NUmbers for the funcion Delete
	function cleanWhite(ele){
		return ele != "";
	}

	function mainTrigger(n, final){
			mixArray.push(n);
			limit++;
			if(limit > 12){
				limit = 12;
				return;
			}
			else{
			if(typeof n == "number" || n == "."){
					if(n == "." && dotCounter == 1){
						return;
					}
					tmp = tmp + "" + n ;
					if(n == "." && dotCounter == 0){
						dotCounter = 1;
					}
			}
			else{
				symbols.push(n);
				numbers.push(tmp);
				tmp = "";
				i++;
			}
			lastNumber = n;
			screenNum = screenNum+""+n;

		    output = result.html(screenNum).hide().show(1000);
			return output;	

			}
		
	};

	var result = $("#result");

	// Function  to put first the × and /

	function  sortSymbols(old,numbers){
		for(j = 0; j < old.length;j++){
			if(old[j] == "×"){
				old.splice(j,1);
				old.unshift("×");

			}
			if(old[j] == "÷"){
				old.splice(j,1);
				old.unshift("÷");
			}
		}

		return old;
	}

	// Equal operator function

	$("#equal").click(function(){
		numbers = numbers.filter(cleanWhite);
		console.log(numbers);
		mainTrigger("=",output)
		var cont = 0;
		limit =  0;

		//  Put first the multiplications and division
		sortSymbols(symbols,numbers);
		for(j = 0; j < symbols.length;j++){	
			tmp = parseFloat(tmp);
			if(symbols[j] == "+"){
					numbers[j] = parseFloat(numbers[j]);
					numbers[j+1] = parseFloat(numbers[j+1]);
					if(j == 0){
						cont = numbers[j] + numbers[j+1];
					}
					else{
						cont += numbers[j+1];
					}
			}
			if(symbols[j] == "-"){
					numbers[j] = parseFloat(numbers[j]);
					numbers[j+1] = parseFloat(numbers[j+1]);
					if(j == 0){
						cont =  numbers[j] - numbers[j+1];
					}
					else{
						cont -= numbers[j+1]
					}

			}
			if(symbols[j] == "×"){
				numbers[j] = parseFloat(numbers[j]);
				numbers[j+1] = parseFloat(numbers[j+1]);
				if(j === 0){
					cont =  numbers[j] * numbers[j+1];
				}
				else{
					cont = cont * numbers[j+1];
				}
			}
			if(symbols[j] == "÷"){
				numbers[j] = parseFloat(numbers[j]);
				numbers[j+1] = parseFloat(numbers[j+1]);
				if(j === 0){
						cont =  numbers[j] / numbers[j+1];
				}
				else{
						cont = cont / numbers[j+1];
				}
			}
		}
		console.log(Math.round(cont*100)/100);
		cont = Math.round(cont*1000000)/1000000;
		if((cont.toString().length) > 11){
			output = result.html("Math limit");
		}
		else{
			output = result.html(cont);
		}

		
		resetAll();
		return output;

		

	})

	// INPUT FUNCTIONS

	// Delete One element
		
	$("#delete").click(function(){
		let lastMix = mixArray[mixArray.length-1]; 
		mixArray.pop();
		if(symbols.indexOf(lastMix) > -1){
			symbols.pop();
		}
		else{
			tmp = "";
		}
		limit = limit - 1;
	    screenNum = screenNum.substr(0,screenNum.length-1); 
		output = result.html(screenNum);
		return output;
	});

	// Clear all the screen
	$("#clear").click(function(){
		limit = 0;
		resetAll();
		output = result.html("");
		return output
	});

	// Operator functions
	$("#divider").click(
		function(){
		mainTrigger("÷", output);
	});
	$("#plus").click(function(){
		mainTrigger("+", output)
	});
	$("#minus").click(function(){
		mainTrigger("-", output);
	})
	$("#multiply").click(
		function(){
		mainTrigger("×", output);
	});
	// NUmbers
	$("#one").click(
		function(){
		mainTrigger(1,output);
	});
	$("#two").click(
		function(){
		mainTrigger(2,output);
	});
	$("#three").click(
		function(){
		mainTrigger(3,output);
	});
	$("#four").click(
		function(){
		mainTrigger(4,output);
	});
	$("#five").click(
		function(){
		mainTrigger(5,output);
	});
	$("#six").click(
		function(){
		mainTrigger(6,output);
	});
	$("#seven").click(
		function(){
		mainTrigger(7,output);
	});
	$("#eight").click(function(){
		mainTrigger(8,output);
	});
	$("#nine").click(function(){
		mainTrigger(9,output);
	});
	$("#zero").click(function(){
		mainTrigger(0,output);
	});
	$("#dot").click(function(){
		mainTrigger('.');
	});



})