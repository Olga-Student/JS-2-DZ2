
'use strict'
class GoodsItem {
	constructor(img, id_product, product_name, price) {
		this.img = img;
		this.id_product = id_product;
		this.product_name = product_name;
		this.price = price;
		
	}
	render() {
    return `<div class="goods-item" data-id="${this.id_product}">
                <img class="goods-item-foto" src="${this.img}" alt="foto">
                <h3>${this.product_name}</h3><p class="goods-list__price">${this.price} </p><button class="main-button" type="button">Купить</button></div>`;
  }
}
class GoodsList {  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
   { img: "#", product_name: 'Игровая мебель Горка хозяйки', price: 7500},
   { img: "#", id: 2, product_name: 'Стеллаж Выставка', price: 7000},
   { img: '#', id:3, product_name: 'Живой уголок Радуга', price: 6300 },
   { img: '#', id:4, product_name: 'Книжная высавка с ящиками', price: 5000}, 
   { img: '#', id: 5, product_name: 'Кухня Любаша', price: 9500},
   { img: '#', id: 6,  product_name: 'Лавочка', price: 1500 },
   { img: '#', id: 7, product_name: 'Трюмо Елена', price: 6500},
   { img: '#',id: 8, product_name: 'Парта кукольная', price: 1500},  
   { img: '#',id: 9, product_name: 'Парта кукольная', price: 1300},
   { img: '#',id: 10, product_name: 'Полка для игрушек', price: 4500}]  
  }
 render() {
	let listHtml = '';
	this.goods.forEach(good => {
		const goodItem = new GoodsItem(good.img, good.id_product, good.product_name, good.price);
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

/** навешиваем обработчик клика**/
	
init() {
	document.querySelector('.search-form').addEventListener('submit', e =>{
		e.preventDefault();
		this.filter(document.querySelector('.search_input').value)
	})
}	
/** поиск товаров **/
filter(value) {
	const regexp = new RegExp(value, gm);
	this.filtered = this.goods.filter(product => regexp.test(product.product_name));
	this.goods.forEach(el => {
		const block = document.querySelector('.goods-item[data-id="${el.id_product}"]');
		if(!this.filtered.includes(el)){
			block.classList.add('invisible');
		}else{
			block.slass.List.remove('invisible');
		}
	})
	
}
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumGoodsList();
list.init();








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
                const item = new GoodsItem('', i.id_product, i.price, i.product_name);
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

