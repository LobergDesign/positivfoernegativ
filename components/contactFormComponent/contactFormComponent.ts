import { Vue, Component } from "nuxt-property-decorator";

@Component({
	name: "ContactForm",
})
export default class ContactForm extends Vue {

	public showSucces: boolean = false;
	public showError: boolean = false;

	mounted() {
		const form = document.getElementById("simple-contact-form") as HTMLFormElement;

		if (form) {
			form.addEventListener("submit", (event: Event) => {
				event.preventDefault()
				let formData = new FormData(form)
				fetch('/', {
					method: 'POST',
					headers: { "Content-Type": "multipart/form-data" },
					body: new URLSearchParams(formData as any).toString()
				}).then(() => formSuccesHandler()).catch((error) =>
					formErrorHandler())
			});
			const formSuccesHandler = () => {
				form.reset();
				this.showSucces = true;
			}
			const formErrorHandler = () => {
				form.reset();
				this.showError = true;
			}
		}


		// document.querySelector('.ntlForm').forEach((form:any) => {
		// 	form.addEventListener('submit', (event:any) => {
		// 		event.preventDefault()
		// 		let formData = new FormData(form)
		// 		fetch('/', {
		// 			method: 'POST',
		// 			headers: { "Content-Type": "multipart/form-data" },
		// 			body: new URLSearchParams(formData).toString()
		// 		}).then(() => ntlFormSuccess()).catch((error) =>
		// 			alert(error))
		// 	});

		// 	function ntlFormSuccess() {
		// 		form.reset();
		// 		document.querySelector(".successNoti")!.style.display = "inline";
		// 	}
		// })
	}
}
