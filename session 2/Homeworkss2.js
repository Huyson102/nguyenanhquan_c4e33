E1.	What is Boolean? 
        A JavaScript Boolean represents one of two values: true or false.


    Write down 3 different expression that results a Boolean type (i.e. 5 == 6)?
        let a = boolean(10); //returns true
        let b = boolean(21.5); //returns true
        let c = boolean("homework"); //returns true

E2. What is a flow chart? 
        A flowchart is a diagram that depicts a process, system or computer algorithm. 
 
    Draw a flow chart:
        if name == “Huy be": -----------------> print(“Hand some") //True
                ||
                ||//False
                ||
                name == “Huy big":------------>even_more_handsome = True (//True)
                     ||
                     || //False
                     ||
                     webbrowser.open(“https://www.youtube.com/watch?v=04854XqcfCY”) 
E3. 
	What is nested conditionals?
        Nested conditionals is when one conditional is nested inside another conditional.

    Write a piece of code that uses nested conditionals?

        if x < y:
            print("x is less than y")
        else:
            if x > y:
                print("x is greater than y")
            else:
                print("x and y must be equal")


////Turtle exercises

H1.
	clear()
	for (let i=0; i<4; i++)
	{color("red")
	lt(30)
	fd(50)
	rt(60)
	fd(50)
	rt(120)
	fd(50)
	rt(60)
	fd(50)

	rt(60)}

H2.
	clear()
	let l = 3
	for(let h = 0; h<4; h++){
	k = l + h
	if (k%2 === 0)
		{color("red")}
	else {color("blue")}
	let i = (1-(2/k))*180
		j = 90-i
		rt(j)
	for (let n = 1; n <= k; n++)
		{fd(75)
		rt(180-i)}
		home()}
// Serious exercises

E1.
	let h = prompt("Enter your height (cm): ")
	let w = prompt("Enter your weight (kg): ")
	let hm = Number (h/100)
	let bmi = Number (w/(hm*hm))
	if (bmi<16){
	    console.log("Severely underweight")
	}
	else if (bmi<18.5){
	    console.log("Underweight")
	}
	else if (bmi<25){
	    console.log("Normal")
	}
	else if (bmi<30){
	    console.log("Overweight")
	}
	else {
	    console.log("Obese")
	}

E2.
	var x = prompt("Input x: ");
	let j = 1;
	let z = 1
	for (let z = 1; z <= x; z++){
		let j = j*z;
	}
	console.log(j)
