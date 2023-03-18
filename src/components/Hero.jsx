import React from "react";

export default function Hero() {
	return (
		<div className="hero vh-100 d-flex align-items-center" id="home">
			<div className="container">
				<div className="row ">
					<div className="col-lg-7 mx-auto text-center">
						<h1 className="display-4 text-white">
							Aoyama Kazuki's Portfolio Page
						</h1>
					</div>
				</div>
			</div>
			<div className="overlay">
				<div>
					<h4 className="text-white">原神</h4>
					<h6 className="text-white">神里綾華</h6>
				</div>
			</div>
		</div>
	);
}
