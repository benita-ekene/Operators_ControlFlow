# JavaScript Operators & Control Flow

1  <h3>Symbols for Javascript operators:</h3>
1. Arithmetic Operators<br>
Symbols for Arithmetic Operators include:  +, -, *, /, %, **, ++ and --<br>
2. Assignment Operators<br>
Symbols for Assignment Operators include:  =,  +=,  *=, -=, /=, %=, ^= (bitwise XOR assignment), |= (bitwise OR assignment)<br>
3. Comparison Operators<br>
Symbols for Comparison Operators include: <, >, <=, >=, ==, ===, !==, !===<br>
4. Logical Operators<br>
Symbols for Logical Operators include: &&, //, !<br>
5. Bitwise Operators<br>
Symbols for Bitwise Operators include:<br>
|	(OR) -	Sets each bit to 1 if one of two bits is 1<br>
^	(XOR) -	Sets each bit to 1 if only one of two bits is 1<br>
~	(NOT) -	Inverts all the bits<br>
<<	(Zero fill left shift) -	Shifts left by pushing zeros in from the right and let the leftmost bits fall off<br>

2 <h3>For each JavaScript Operator, write 2 examples.</h3>
**Arithmetic Operators**<br>
let y = 2;<br>
let x = 3;<br>
console.log(y+x);<br>
console.log(y*x);<br>
**Assignment Operators**<br>
let y = 2;<br>
y+= 3;<br>
**Comparison Operators**<br>
let y = 2;
console.log(y < 0);
console.log(y > 0);
**Logical Operators**<br>
let x = 5;<br>
let y = 2;<br>
if (x <= 5 || y >= 2) {<br>
  console.log("js dynamics")<br>
}<br>
if (x <= 5 && y >= 2) {<br>
  console.log("js dynamics")<br>
}<br>
**Bitwise Operators**<br>
console.log(10 == 23 & 30 == 41)<br>
console.log(10 == 23 | 30 == 41)<br>

3 <h3>Using if…else conditional statement, write a program that will help Bolatito determine the subjects s she will be taking as an Art student</h3>
check the file: SubjectGroup.js<br>

4 <h3>The result when the following program is executed</h3>
for (let i = 1; i < 20; i += 7) {<br>
  console.log(i);<br>
}<br>
**Output**<br>
1<br>
8<br>
15<br>

5 <h3>Write a program that takes a positive number (num) and find the power of 2 nearest to that number</h3>
check the file: NumNearest.js