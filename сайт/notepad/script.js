let list = document.querySelector('#list');
let textarea = document.querySelector('#textarea');

let notes = [];

let state = {
	edit: false,
	key: undefined
};

textarea.addEventListener('blur', function () {
	if (state.edit) {
		notes[state.key].text = this.value;
		this.value = '';

		state = {
			edit: false,
			key: undefined
		};
	} else {
		let date = new Date;
		let now =
			addZero(date.getHours()) + ':' +
			addZero(date.getMinutes()) + ':' +
			addZero(date.getSeconds()) + ' ' +
			addZero(date.getDate()) + '.' +
			addZero(date.getMonth() + 1) + '.' +
			date.getFullYear();

		notes.push({
			text: this.value,
			time: now
		});

		this.value = '';

		let li = document.createElement('li');
		li.dataset.num = notes.length - 1;
		li.innerHTML = now;
		list.appendChild(li);

		let self = this;
		li.addEventListener('click', function () {
			let num = this.dataset.num;
			self.value = notes[num].text;

			state = {
				edit: true,
				key: num
			};
		});
	}
});

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}