import React, { useRef } from "react";
import { init, send } from "emailjs-com";

export default function Contact() {
	const contactName = useRef("");
	const email = useRef("");
	const subject = useRef("");
	const content = useRef("");

	const sendMail = () => {
		const userID = process.env.REACT_APP_USER_ID;
		const serviceID = process.env.REACT_APP_SERVICE_ID;
		const templateID = process.env.REACT_APP_TEMPLATE_ID;

		init(userID);
		const template_param = {
			from_name: contactName.current.value,
			email: email.current.value,
			title: subject.current.value,
			message: content.current.value,
		};
		send(serviceID, templateID, template_param).then(() => {
			window.alert("お問い合わせを送信致しました。");
		});
	};

	const handleClick = (e) => {
		e.preventDefault();
		if (
			!(
				contactName.current.value === "" ||
				email.current.value === "" ||
				subject.current.value === "" ||
				content.current.value === ""
			)
		) {
			sendMail();
			contactName.current.value = "";
			email.current.value = "";
			subject.current.value = "";
			content.current.value = "";
		}
	};

	return (
		<section id="contact" className="bg-light">
			<div className="container">
				<div className="row">
					<div className="col-md-8 mx-auto text-center">
						<h6 className="text-primary">Contact</h6>
						<h1>Get in Touch</h1>
					</div>
				</div>
				<form
					action=""
					className="row g-3 justify-content-center"
					onSubmit={(e) => handleClick(e)}
				>
					<div className="col-md-5">
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							ref={contactName}
						/>
					</div>
					<div className="col-md-5">
						<input
							type="email"
							className="form-control"
							placeholder="Enter E-mail"
							ref={email}
						/>
					</div>
					<div className="col-md-10">
						<input
							type="text"
							className="form-control"
							placeholder="Enter Subject"
							ref={subject}
						/>
					</div>
					<div className="col-md-10">
						<textarea
							name=""
							id=""
							cols="30"
							rows="5"
							className="form-control"
							placeholder="Enter Message"
							ref={content}
						></textarea>
					</div>
					<div className="col-md-10 d-grid">
						<button className="btn btn-primary" type="submit">
							Contact
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
