const notifications = document.querySelector('.notifications');
const buttons = document.querySelectorAll('.buttons .btn');


const toastDetails = {
	success: {
		icon: 'fa-circle-check',
		text: 'Success: This is an success toast.',
	},
	error: {
		icon: 'fa-circle-xmark',
		text: 'Error: This is an error toast.',
	},
	warning: {
		icon: 'fa-circle-exclamation',
		text: 'Warning: This is an warning toast.',
	},
	info: {
		icon: 'fa-circle-info',
		text: 'Info: This is an information toast.',
	},
};

const createToast = id => {
	const { icon, text } = toastDetails[id];
	const toast = document.createElement('li');
	toast.className = `toast ${id}`;
	toast.innerHTML = `
	<div class="column">
		<i class="fa-solid ${icon}"></i>
		<span>${text}</span>
	</div>
	<i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
	notifications.append(toast);
	
setTimeout(() => {
	removeToast(toast)
	buttons.forEach(btn => {
		if (btn.id === id) {
			btn.removeAttribute('disabled');
		}
	})
}, 5000)

buttons.forEach(btn => {
	if (btn.id === id) {
		btn.setAttribute('disabled', 'disabled');
	}
})
};

const removeToast = toast => {
	toast.classList.add('hide');
	setTimeout(() => {
		toast.remove();
	}, 500);
}



buttons.forEach(btn => {
	btn.addEventListener('click', event => {
		createToast(btn.id);
	});
})


