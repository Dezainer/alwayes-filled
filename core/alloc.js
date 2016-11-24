//Basic
var memory = new Array(379);
var posit  = 0;
var sOrder = 1;

for (var i = 0; i < memory.length; i++) {
	memory[i] = "-";
}

//

export function alloc(size) {

	let length = size;

	for (var i = posit; i <= length + posit; i++) {
		if(memory[i] != "-"){
			getNextEmpety();
		}else{
			getNextEmpety();
			memory[i] = sOrder;
			length--;
		}
	}

	getNextEmpety();
	sOrder++;
}

//

export function dealloc(id) {
	
	let first = true;

	for (var i = 0; i < memory.length - 1; i++) {
		if(memory[i] == id){

			if(first){
				posit = i;
				first = false;
			}

			memory[i] = "-";
		}
	}

	getNextEmpety();
}

//

export function getNextEmpety() {
	for (var j = 0; j < memory.length; j++) {
		if(memory[j] == "-"){
			posit = j;
			return;
		}
	}
}

//

alloc(1);
console.log(memory);
console.log('-------------------');

alloc(2);
console.log(memory);
console.log('-------------------');

alloc(1);
console.log(memory);
console.log('-------------------');

dealloc(2);
console.log(memory);
console.log('-------------------');

alloc(4);
console.log(memory);
console.log('-------------------');

alloc(2);
console.log(memory);
console.log('-------------------');

alloc(2);
console.log(memory);
console.log('-------------------');

dealloc(5);
console.log(memory);
console.log('-------------------');

alloc(4);
console.log(memory);
console.log('-------------------');

alloc(2);
console.log(memory);
console.log('-------------------');

alloc(1);
console.log(memory);
console.log('-------------------');

dealloc(8);
console.log(memory);
console.log('-------------------');

alloc(3);
console.log(memory);
console.log('-------------------');

dealloc(4);
console.log(memory);
console.log('-------------------');

alloc(3);
console.log(memory);
console.log('-------------------');

alloc(2);
console.log(memory);
console.log('-------------------');