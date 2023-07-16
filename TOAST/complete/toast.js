const notifications = document.querySelector('.notifications');
const buttons = document.querySelectorAll('.buttons .btn');

// objecto de objectos

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

const removeToast = toast => {
	toast.classList.add('hide');
	setTimeout(() => {
		toast.remove();
	}, 500);
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

	// simple without manipulate button
	/* setTimeout(() => {
		removeToast(toast);
	}, 5000); */

	// disable the button when it is clicked
	buttons.forEach(btn => {
		if (btn.id === id) {
			btn.setAttribute('disabled', 'disabled');
		}
	});

	// re-enable the button after the toast is removed
	setTimeout(() => {
		removeToast(toast);
		buttons.forEach(btn => {
			if (btn.id === id) {
				btn.removeAttribute('disabled');
			}
		});
	}, 5000);
};

buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		createToast(btn.id);
	});
});
