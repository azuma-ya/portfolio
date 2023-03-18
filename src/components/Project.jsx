import React from "react";

export default function Project({ url, title, comment, index }) {
	return (
		<div className="col-lg-4 col-sm-6">
			<div className="project">
				<img
					src={`${process.env.PUBLIC_URL}images/project${index}.png`}
					alt=""
				/>
				<div className="desc">
					<div>
						<h4 className="text-white">
							<a className="text-white" href={url}>
								{title}
							</a>
						</h4>
						<p className="text-white">{comment}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
