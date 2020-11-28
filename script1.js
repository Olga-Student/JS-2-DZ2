'use strict'
class GoodsItem {
	constructor(img, title, price) {
		this.img =img;
		this.title = title;
		this.price = price;
		
	}
	render() {
    return `<div class="goods-item"><img class="goods-item-foto" src="${this.img}" alt="foto"><h3>${this.title}</h3><p class="goods-list__price">${this.price} </p><button class="main-button" type="button">Купить</button></div>`;
  }
}
class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
   { img: "foto/Горка Мальвина.jpg", title: 'Игровая мебель Горка хозяйки', price: 7500},
   { img: "foto/Витрина для книг.jpg", title: 'Стеллаж Выставка', price: 7000},
   { img: 'foto/Живой уголок ручеек.jpg', title: 'Живой уголок Радуга', price: 6300 },
   { img: 'foto/Книжная выставка с ящиками.jpg', title: 'Книжная высавка с ящиками', price: 5000}, 
   { img:  'foto/Кухня.jpg', title: 'Кухня Любаша', price: 9500},
   { img: 'foto/Лавка с медведями.jpg', title: 'Лавочка', price: 1500 },
   { img: 'foto/Парикмахерская.jpg', title: 'Трюмо Елена', price: 6500},
   { img: 'foto/Пеленальный столик.jpg', title: 'Парта кукольная', price: 1500},  
   { img: 'foto/Парта для кукол.jpg', title: 'Парта кукольная', price: 1300},
   { img: 'foto/Полка для игрушек подвесная.jpg', title: 'Полка для игрушек', price: 4500}]  
  }
 render() {
	let listHtml = '';
	this.goods.forEach(good => {
		const goodItem = new GoodsItem(good.img, good.title, good.price);
		listHtml += goodItem.render();
	});
	document.querySelector('.goods-list').innerHTML = listHtml;
}
	
	//2-ое задание Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.

 sumGoodsList() {
        let Price = document.querySelectorAll('.goods-list__price'); 
        let sum = 0;
        this.goods.forEach (good => { 
            sum += good.price
        });
      console.log(sum);
 }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumGoodsList();


//1-oe задание

//Создаем класс для товара в корзине. 
class GoodsItemCart extends GoodsItem {
	constructor(img, title, price) {
		super(img, title, price);
	}
	
 //метод возвращает html-разметку корзины.
    render () {
        return `<div class="goods-list__cartBox">
        <span class="goods-list__cartBox__name">${this.title}</span>
        <div class="goods-list__cartBox__price">${this.price}</div>
        <img class="goods-list__cartBox__img" src=${this.img} height="100px" alt="">
        <input type="submit" value="X" class="goods-list-item__cartBox__delete" onclick="deleteGood()">
        </div>`
    }
}
 const cart = new GoodsItemCart ('foto/Полка для игрушек подвесная.jpg', 'Полка для игрушек', 4500)
 
 
//Создаем класс корзина Cart
class Cart {
    constructor () {
        this.goods = [];
    };
	
  	
//метод добавления товара в корзину
    addCartItem()
	
//метод удаления товара из карзины
	removeCartItem()
	
//метод очищения карзины
	clearCartItem()
	
//метод замены колличества товара
	changeCount()
	
//поиск товара в карзине по заданному параметру (названию)
	getByTitle()

//подсчет итоговой суммы
	gettotalPrise()
	
//сохранение итоговых данных 
	saveCart()
	
//отправка в обработку;
	sendOrde()
	
	
//ПРОБА ЗАДАНИЯ 2-3
	
'use script'
class Hamburger {
	constructor(size, stuffing) {
			this.size = size;
			this.stuffing = stuffing;
		}
		/**
		 * Класс, объекты которого описывают параметры гамбургера. 
		 * 
		 * @constructor
		 * @param size        Размер
		 * @param stuffing    Начинка
		 */
	function Hamburger(size, stuffing) {...
	}
}
/* Размеры, виды начинок и добавок */
/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {
	'price': 50
	, 'calories': 20
};
Hamburger.SIZE_LARGE = {
	'price': 100
	, 'calories': 40
};
Hamburger.STUFFING_CHEESE = {
	'price': 10
	, 'calories': 20
};
Hamburger.STUFFING_SALAD = {
	'price': 20
	, 'calories': 5
};
Hamburger.STUFFING_POTATO = {
	'price': 15
	, 'calories': 10
};
Hamburger.TOPPING_MAYO = {
	'price': 15
	, 'calories': 0
};
Hamburger.TOPPING_SPICE = {
	'price': 20
	, 'calories': 5
};
/* Возможные варианты свойств гамбургера */
Hamburger.allowedSizes = [Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE];
Hamburger.allowedStuffing = [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_SALAD];
Hamburger.allowedToppings = [Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE];
/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {
		return this.size;
	}
	/**
	 * Узнать начинку гамбургера
	 */
Hamburger.prototype.getStuffing = function () {
		return this.stuffing;
	}
	/**
	 * Узнать цену гамбургера
	 */
Hamburger.prototype.calculatePrice = function () {
var size = this.getSize();
var price = size['price'];
var staffing = this.getStuffing();
price += stuffing['prise'];
});
var topping = this.getTopping();

topping.forEach(function (item) {
		price += item['price'];
		return prise;
	}
	/**
	 * Узнать калорийность
	 */
Hamburger.prototype.calculateCalories = function () {
		var size = this.getSize();
		var calories = size['calories'];
	
		var staffing = this.getStuffing();
		calories += stuffing['calories'];
	});
var topping = this.getTopping();
topping.forEach(function (item) {
		calories += item['calories'];
		return calories;
	}
}
				
				
//** ЗАДАНИЕ к ЛЕКЦИИ 3 **/		
				
				
	/** Отправляем запрос через функцию makeGETRequest**/
function makeGETRequest(url, callback) {
  let xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}
makeGETRequest('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json', console.log);


/** переделываем запрос на сервер с помощью метода Fetch**/
fetch (
	'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
	   {
	method: 'GET',
	header: {},
}
	).then(res => {
	console.log('fetch', res);
	return res.json();
}).then(res => {
	console.log(res);
	 for (let i of res) {
                const item = new GoodsItem('', i.price, i.product_name);
                document.querySelector('.goods-list').insertAdjacentHTML("afterend", item.render());
	 }
});



/* * выброс ошибки**/

const func = (errCount) => {
	fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json', {
		method: 'GET'
		, header: {}
	, }).then(res => {
		console.log('fetch', res);
		throw new Error('TEST');
		return res.json();
	}).then(res => {
		console.log('json res', res);
		for (let i of res) {
			const item = new(i.product_name, i.price);
			app(item.render());
		}
	}).catch(error => {
			setTimeout ( () => {
				  if (errCount <= 5) {
					console.log('Error');
					func(errCount + 1);
				  } else {
					console.log('Ошибки нет')
			      }
				},
				 2000
			);		
	});
}
func(0);			
				