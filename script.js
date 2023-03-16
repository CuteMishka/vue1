new Vue({
	el: '#actions',
	data: {
		newElement: '',
		elements:[
			{text: 'asdsa'},
		]
	},
	methods: {
		addEl: function () {
			this.elements.push(this.newElement.trim());
			this.newElement = ''
		}
	}
})