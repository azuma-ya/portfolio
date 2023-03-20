import React from "react";
import Card from "./Card";
import data from "../data";

export default function Skills() {
	return (
		<section id="skills">
			<div className="container">
				<div className="row">
					<div className="col-md-8 mx-auto text-center">
						<h6 className="text-primary">SKILLS</h6>
						<h2>My Skills</h2>
						<p>基本的なことは一通りできます。</p>
					</div>
				</div>
				<div className="row g-4">
					{data.skills.map((skill) => (
						<Card
							skill={skill.name}
							experience={skill.experience}
							level={skill.level}
							icon={skill.icon}
							comment={skill.comment}
						/>
					))}
				</div>
				<div className="row mt-4 g-3">
					<div className="col-lg-4">
						<div className="card-effect">
							<h5>その他</h5>
							<ul>
								<li>MonogoDB</li>
								<li>git</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="card-effect">
							<h5>インフラ</h5>
							<ul>
								<li>heroku</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
