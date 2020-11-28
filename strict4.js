'use strict'
window.onload = () => {
	document.getElementById('usform').addEventListener('submit', e => {
		const valid = new Validator('usform');
		if(!valid.valid){
			e.preventDefault();
		}
	})
}

class Validator {
	constructor(form) {
		this.patterns = {
			name: /^[A-Za-zА-Яа-яЁё]+$/i,
			phone: /^\+7\(\d{3}\}\d{3}-\d{4}$/,
			email: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/i
		};
		this.error = {
			name: 'Имя должно содержать только буквы',
			phone: 'Телефон имеет формат +7(000)000-0000',
			email: 'E-mail имеет вид sofia@mail.ru'
		};
		this.errorClass = "error-catch";
		this.form = form;
		this.valid = false;
		this.validateForm();
	}
	validateForm(){
		let errors = [...document.getElementById(this.form).querySelectorAll('.${this.errorClass}')];
		for (let error of errors) {
			error.remove();
		}
		let FormFields = [...document.getElementById(this.form).getElementsByTagName('input')];
		for (let field of FormFields){
			this.validate(field);
		}
		if (![...document.getElementById(this.form).querySelectorAll('.invalid')].length){
			this.valid =true;
		}
	}
		validate(field){
			if(this.patterns[field.name]){
				if(!this.patterns[field.name].test(field.value)){
					field.classList.add('invalid');
					this.addErrorMsg(field);
					this.watchField(field);
				}
			}
		}
		addErrorMsg(field){
			let error = '<div class="${this.Class}">${this.errors[field.name]}</div>';
			field.parentNode.insertAdjacentHTML('beforend', error);
		}
		watchField(field){
			field.addEventListener('input', () => {
				let error = field.parentNode.querySelector('.${this.errorClass}');
				if(this.patterns[field.name].test(field.value)){
					field.classList.remove('invalid');
					field.classList.add('valid');
					if(error){
						error.remove();
					}
				}else{
					field.classList.remove('valid');
					field.classList.add('invalid');
					if(!error){
						this.addErrorMsg(field);
					}
				}
			});
		}
	}
