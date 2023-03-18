import React from "react";

export default function Card({ skill, experience, level, icon, comment }) {
	return (
		<div className="col-lg-4 col-sm-6">
			<div className="skill card-effect">
				<div className="d-flex align-items-center mb-3">
					<div className="iconbox">
						<i className={icon}></i>
					</div>
					<h5 className="mx-auto">{skill}</h5>
				</div>

				<div className="d-flex">
					<p>経験年数</p>
					<p className="mx-auto">{experience}年</p>
				</div>
				<div className="d-flex">
					<p>スキル</p>
					<p className="mx-auto">
						{[1, 2, 3, 4, 5].map((i) => (i <= level ? "★" : "☆"))}
					</p>
				</div>
				<p>{comment}</p>
			</div>
		</div>
	);
}
