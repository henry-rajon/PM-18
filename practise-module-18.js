// ১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো ?

// Ans: JavaScript is the Programming Language for the Web.JavaScript can update and change both HTML and CSS.JavaScript can calculate, manipulate and validate data.


// ২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো ?

// Ans : JavaScript is a scripting language.It is designed with the goal of behavior control at the client level of the website i.e.the browser.But today it runs on any operating system apart from the browser and has all the features of other high level programming languages.

// উত্তরঃ জাভাস্ক্রিপ্ট একটি স্ক্রিপ্টিং ভাষা। এটি ওয়েবসাইটের ক্লায়েন্ট স্তরে অর্থাৎ ব্রাউজারে আচরণ নিয়ন্ত্রণের লক্ষ্য নিয়ে ডিজাইন করা হয়েছে। কিন্তু আজ এটি ব্রাউজার ব্যতীত যেকোনো অপারেটিং সিস্টেমে চলে এবং অন্যান্য উচ্চ - স্তরের প্রোগ্রামিং ভাষার সমস্ত বৈশিষ্ট্য রয়েছে।


// ৩. ভেরিয়েবল কি জিনিস ?

// Ans: Variable means anything that can vary.In JavaScript, a variable stores the data value that can be changed later on.Use the reserved keyword var to declare a variable in JavaScript.

// উত্তরঃ পরিবর্তনশীল মানে যা পরিবর্তিত হতে পারে। জাভাস্ক্রিপ্টে, একটি ভেরিয়েবল ডেটা মান সংরক্ষণ করে যা পরে পরিবর্তন করা যেতে পারে। জাভাস্ক্রিপ্টে একটি পরিবর্তনশীল ঘোষণা করতে সংরক্ষিত কীওয়ার্ড var ব্যবহার করুন।


// ৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে ?

// Ans: var numbar = 15;


// ৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে ?

// Ans:
// var age = 35;
// age = 45;
// console.log(age);


// ৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি(হিন্টস: Numeric, String, Boolean)
// Ans:
// Primitive Datatypes:
// string
// number
// boolean
// undefined

// Non - Primitive Datatypes:
// Strings
// Arrays
// Classes


// ৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো।
// Ans:
// Primitive Datatypes:
// string
// number
// boolean
// undefined

// Non - Primitive Datatypes:
// Strings
// Arrays
// Classes


// ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো।

// Ans:
// ডিক্লেয়ার করা যাবেঃ
// ১/ camelCase
// ২/ PascalCase
// ৩/ snake_case
// ৪/ oneword

// ডিক্লেয়ার করা যাবে নাঃ
// ১/ Word Gap দেওয়া যাবে না ।
// ২/ "" দেওয়া যাবে না ।
// ৩/ সামনে সংখ্যা দেওয়া যাবে না ।


// ৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে?
// 1/ =,
// var num1 = 10;
// var num2 = 10;
// var equle = (num1 == num2);
// console.log(equle);

//3/ -,
// var num1 = 15;
// var num2 = 10;
// var total = num1 - num2;
// console.log(total);

//4/ *,
// var num1 = 15;
// var num2 = 10;
// var total = num1 * num2;
// console.log(total);

//5/ /,
// var num1 = 15;
// var num2 = 10;
// var total = num1 / num2;
// console.log(total);

//6/ %,
// var num1 = 22;
// var num2 = 10;
// var total = num1 % num2;
// console.log(total);


// ১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে।

// 1/ +=;
// var num1 = 10;
// var total = num1 + 2;
// console.log(total);

// var num1 = 10;
// num1 += 2;
// console.log(num1);

// 2/ -=;
// var num1 = 10;
// var total = num1 - 2;
// console.log(total);

// var num1 = 10;
// num1 -= 2;
// console.log(num1);


// 3/ *=;
// var num1 = 10;
// var total = num1 * 2;
// console.log(total);

// var num1 = 10;
// num1 *= 2;
// console.log(num1);


// 4/ /=;
// var num1 = 10;
// var total = num1 / 2;
// console.log(total);

// var num1 = 10;
// num1 /= 2;
// console.log(num1);


// ১১..++এবং --এর কাজ কি ? এইটা কি জানো।

// var num1 = 10;
// var total = 10 + 1;
// console.log(total);

// var num1 = 10;
// num1++;
// console.log(num1);


// var num1 = 10;
// var total = 10 - 1;
// console.log(total);

// var num1 = 10;
// num1--;
// console.log(num1);

// ১২ parseInt, parseFloat, toFixed এইগুলা কি করে ?

// parseInt

// var num1 = "10";
// console.log(num1);
// var changeString = parseInt(num1);
// console.log(changeString);


// parseFloat

// var num1 = "10.25";
// console.log(num1);
// var changeString = parseFloat(num1);
// console.log(changeString);


// toFixed

// var num1 = 10;
// var num2 = 5.623;
// var total = num1 + num2;
// console.log(total);

// var toFixedValue = total.toFixed(2);
// console.log(toFixedValue);


//     --------------

// ১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে ? কিভাবে Array ডিক্লেয়ার করতে হয়
// Ans:
// An array can hold many values under a single name, and you can access the values by referring to an index number.

// একটি অ্যারে একটি একক নামের অধীনে অনেকগুলি মান ধরে রাখতে পারে এবং আপনি একটি সূচক নম্বর উল্লেখ করে মানগুলি অ্যাক্সেস করতে পারেন।


// ১৪. array এর মধ্যে কয়টা উপাদান(element) আছে সেটা কিভাবে বের করে
// Ans:
// var friendsAge = [42, 44, 14, 63, 54, 45];
// console.log(friendsAge.length);


// ১৫. array এর উপাদান গুলা এর পজিশন(index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়।
// Ans:
// Array এর index- "0" থেকে শুরু হয়

// Get index by the element
// var friendsName = ['Joy', 'Roni', 'Sumi', 'Mitu', 'Ritu'];
// var indexOfFrinedsName = friendsName.indexOf('Roni');
// console.log(indexOfFrinedsName);


// ১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায়
// Ans:
// কোন একটা উপাদানের index এর মান -১ বলতে বুঝায় ঐ উপাদানটি Array এর মধ্যে নাই।


// ১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো
// Ans:
// Find the position of element by using index
// var friendsName = ['Joy', 'Roni', 'Sumi', 'Mitu', 'Ritu'];
// console.log(friendsName[2]);


// ১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে
// Ans:
// Change the element by using index
// var friendsName = ['Joy', 'Roni', 'Sumi', 'Mitu', 'Ritu'];
// friendsName[2] = 'Megha';
// console.log(friendsName);

// ১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি   কিভাবে খুঁজে বের করতে পারো ?
// Ans:
// Get index by the element
// var friendsName = ['Joy', 'Roni', 'Sumi', 'Mitu', 'Ritu'];
// var indexOfFrinedsName = friendsName.indexOf('Roni');
// console.log(indexOfFrinedsName);


// ২০.ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে ? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)

// ২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
// Ans:
// Added the last element
// var friendsName = ['Joy', 'Roni', 'Sumi', 'Mitu', 'Ritu'];
// friendsName.push('Megha');
// console.log(friendsName);

// Remove the last element
// var friendsName = ['Joy', 'Roni', 'Sumi', 'Mitu', 'Ritu'];
// friendsName.pop();
// console.log(friendsName);


// ২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
// Ans:
// Added the last element
// var friendsName = ['Joy', 'Roni', 'Sumi', 'Mitu', 'Ritu'];
// friendsName.unshift('Megha');
// console.log(friendsName);

// Remove the last element
// var friendsName = ['Joy', 'Roni', 'Sumi', 'Mitu', 'Ritu'];
// friendsName.shift();
// console.log(friendsName);


// ২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।।
// Ans:
// var num1 = 10;
// var num2 = 12;
// var result = num1 > num2;
// console.log(result);

// var num1 = 10;
// var num2 = 12;
// var result = num1 < num2;
// console.log(result);

// var num1 = 10;
// var num2 = 12;
// var result = num1 == num2;
// console.log(result);

// var num1 = 10;
// var num2 = 12;
// var result = num1 != num2;
// console.log(result);

// var num1 = 10;
// var num2 = 12;
// var result = num1 <= num2;
// console.log(result);

// var num1 = 10;
// var num2 = 12;
// var result = num1 >= num2;
// console.log(result);

// var num1 = '10';
// var num2 = 12;
// var result = num1 === num2;
// console.log(result);

// var num1 = '10';
// var num2 = 12;
// var result = num1 !== num2;
// console.log(result);


// ২৪. তোমার কাছে: ৮০,০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০,০০০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০,০০০ টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে, ২০,০০ টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।
// Ans:
// var money = 35000;

// if (money >= 80000) {
//     console.log("I will buy a Mac !!");
// }
// else if (money >= 60000) {
//     console.log("I will buy a Gaming Laptop !!");
// }
// else if (money >= 40000) {
//     console.log("I will buy a Lenovo Yoga !!");
// }
// else if (money >= 20000) {
//     console.log("I will buy a old Laptop !!");
// }
// else {
//     console.log("I will buy a Mobile Phone !!");
// }


// ---------------------

// ২৫. আসকে আমার মন ভালো নেই-- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

// ২৬.while লুপ কিভাবে কাজ করে 

// ২৭.for লুপ কিভাবে কাজ করে 

// ২৮.while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 

// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 

// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 

// ৩২.while আর for loop এর মধ্যে পার্থক্য কি 

// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 

// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 