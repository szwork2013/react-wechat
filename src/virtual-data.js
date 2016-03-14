// Virtual data
const key = 'React-WeChat-v1';

if(!localStorage.getItem(key)) {
	let now = new Date().getHours();

	let data = {
		// current user
		user: {
			id: 1,
			name: 'JustClear',
			avatar: './img/avatar-1.png'
		},

		// user list
		userList: [
			{
				id: 2,
				name: 'React',
				avatar: './img/avatar-3.png'
			},
			{
				id: 3,
				name: 'Webpack',
				avatar: './img/avatar-4.png'
			},
			{
				id: 4,
				name: 'Github',
				avatar: './img/avatar-5.png'
			},
		],

		// session list
		sessionList: [
			{
				userId: 2,
				userName: 'React',
				avatar: './img/avatar-3.png',
				icon: 'state',
				messages: [
					{
						text: 'This is a WeChat user interface based on ReactJS created by @JustClear.',
						time: now,
					},
					{
						text: 'Here is the project address: https://github.com/JustClear/react-wechat.',
						time: now,
					},
					{
						text: 'Hey! Who are you.',
						time: now,
					},
					{
						text: 'I\'m ReactJS, a JavaScript library for building user interfaces.',
						time: now,
					},
					{
						text: 'Cool~',
						time: now,
					},
					{
						text: 'Where are you.',
						time: now,
					},
					{
						text: 'http://www.reactjs.com',
						time: now,
					},
				]
			},
			{
				userId: 3,
				userName: 'Webpack',
				avatar: './img/avatar-4.png',
				icon: 'state',
				messages: [
					{
						time: now,
						text: '',
					},
					{
						time: now,
						text: '',
					},
				]
			},
			{
				userId: 4,
				userName: 'Github',
				avatar: './img/avatar-5.png',
				icon: 'state',
				messages: [
					{
						time: now,
						text: '',
					},
					{
						time: now,
						text: '',
					},
				]
			},
		]
	};

	localStorage.setItem(key, JSON.stringify(data));
}

export default {
	fetch() {
		return JSON.parse(localStorage.getItem(key));
	},
	save(data) {
		localStorage.setItem(key, JSON.stringify(data));
	}
}