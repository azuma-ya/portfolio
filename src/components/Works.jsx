import React from "react";
import Project from "./Project";
import data from "../data";

export default function Works() {
	return (
		<section id="works">
			<div className="container">
				<div className="row">
					<div className="col-md-8 mx-auto text-center">
						<h6 className="text-primary">WORKS</h6>
						<h2>My Works</h2>
					</div>
				</div>
				<div className="row g-3">
					{data.works.map((work) => (
						<Project
							url={work.url}
							title={work.title}
							comment={work.comment}
							index={work.index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
