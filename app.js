Vue.createApp({
	data() {
		return {
			valueInput: "",
			todoList: [],
			completeList: [],
		};
	},
	methods: {
		handlyInput(event) {
			this.valueInput = event.target.value;
		},
		addTask() {
			if (this.valueInput === "") {
				return;
			}
			this.todoList.push({
				title: this.valueInput,
				id: Math.random(),
			});
			this.valueInput = "";
		},
		checkTask(index, type) {
			if (type === "todo") {
				const completeMask = this.todoList.splice(index, 1);
				this.completeList.push(...completeMask);
			} else {
				const todoMask = this.completeList.splice(index, 1);
				this.todoList.push(...todoMask);
			}
		},
		deleteMask(index, type) {
			const list = type === "todo" ? this.todoList : this.completeList;
			list.splice(index, 1);
		},
	},
}).mount("#app");
