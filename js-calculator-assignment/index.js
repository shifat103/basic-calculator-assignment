'use strict';

//* ---------- অংশ ১: আলাদা আলাদা অপারেশন ফাংশন ----------*//
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return 'Error: Division by zero is not allowed';
  }
  return a / b;
}

//*---------- অংশ ২ ও ৩: প্রধান ক্যালকুলেটর ফাংশন ও সাপোর্ট করার অপারেশন টাইপসমূহ ----------*//

function calculator(operation, firstDigit, secondDigit) {
  const a = toNumber(firstDigit);
  const b = toNumber(secondDigit);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return 'Error: Invalid number input';
  }

  const op = String(operation).toLowerCase().trim();

  if (op === 'add') {
    return addition(a, b);
  } else if (op === 'subtract') {
    return subtraction(a, b);
  } else if (op === 'multiply') {
    return multiplication(a, b);
  } else if (op === 'divide') {
    return division(a, b);
  }else {
    return 'Error: Invalid operation';
  }

  //* ---------- অংশ ৪ এরর হ্যান্ডেলিং ----------*//

//* 1) শূন্য দিয়ে ভাগ
function safeDivision(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed";
  }
  return a / b;
}

//* 2) অবৈধ অপারেশন টাইপ

function handleOperationType(op) {
  const allowed = ["add", "subtract", "multiply", "divide"];
  if (!allowed.includes(op)) {
    return "Error: Invalid operation";
  }
  return "Valid operation";
}

//* 3) অবৈধ সংখ্যা ইনপুট 

function isValidNumber(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) {
    return "Error: Invalid number input";
  }
  return "Valid number";
}

}

//* ---------- অংশ ৫: আপনার ক্যালকুলেটর টেস্ট করা ----------*//
console.log(calculator("add", 10, 5));      
console.log(calculator("subtract", 10, 5));  
console.log(calculator("multiply", 4, 3));   
console.log(calculator("divide", 20, 4));    
console.log(calculator("divide", 10, 0));    
console.log(calculator("invalid", 5, 3));    

