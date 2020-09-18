// let first = 0, second = 1, next = 1;

// while ( next <= 100 ) {
// 	console.log(next);

// 	next = first + second;
// 	first = second;
// 	second = next;
// }
// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

// let arr = [1, 2, 3, 4, 5];

// 	for (let i = 0; i < arr.length; i++ ) {
// 		console.log( arr[i] );
// 	}

// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення

	// let arr = [-1, 22, 3, 44, 5], max;

	// max = arr [0];
	// for (let i = 0; i < arr.length; i++ ) {
	// 	if ( arr[i] > max) {
	// 		max = arr[i];
	// 	}
	// }
	// console.log( max );

// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів.
// Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера. 
	// let amountPlus = 0, amountMinus = 0, amountNull = 0;
	// for ( let i = 0; i < 8; i++) {
	// 	let number = +prompt('Введіть число');
	// 	if ( number > 0 ) {
	// 		amountPlus++;
	// 	}
	// 	else if ( number < 0 ) {
	// 		amountMinus++;
	// 	}
	// 	else if ( number == 0 ) {
	// 		amountNull++;
	// 	}
	// 	else {
	// 		alert('Треба ввести число!!!');
	// 		i--;
	// 	}
	// }

	// alert(`К-сть додатніх - ${amountPlus}, від'ємних - ${amountMinus}, нулів - ${amountNull}`);

// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

	// for (let i = 1; i < 10; i++) {
	// 	console.log(`8 х ${i} = ${8*i}`)
	// }


// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри,
// які більше 3-х, але менше 10.

// let arr = [2, 5, 9, 15, 0, 4], max;

// 	for (let i = 0; i < arr.length; i++ ) {
// 		if ( arr[i] > 3 && arr[i] < 10 ) {
// 			console.log( arr[i] );
// 		}
// 	}
	


// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію,
// далі вивести результат і спитатись чи хоче юзер повторити?
let ask = true, X, Y, action, result; 

do {

	X = +prompt('Введіть перше число');
	Y = +prompt('Введіть друге число');
	action = prompt('Введіть дію');

	if ( isNaN(X) == false && isNaN(Y) == false ) {
		switch (action) {
	    case `+`:
	    	console.log(`${X} ${action} ${Y} = ${ result = X + Y }`);
	        break;
	    case `-`:
	    	console.log(`${X} ${action} ${Y} = ${ result = X - Y }`);
	        break;
	    case `*`:
	    	console.log(`${X} ${action} ${Y} = ${ result = X * Y }`);
	        break;
	    case `/`:
	    	console.log(`${X} ${action} ${Y} = ${ result = X / Y }`);
	        break;
	    default:
	        alert( 'Такої математичної дії в природі не існує:) ' );
	}
}
else {
	alert('Введіть якесь число, а не закаплючки якісь');
}

	ask = confirm('Хочете продовжити?');

} while ( ask )