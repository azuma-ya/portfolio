import React from "react";
import Project from "./Project";

export default function Works() {
	return (
		<section className="works">
			<div className="container">
				<div className="row">
					<div className="col-md-8 mx-auto text-center">
						<h6 className="text-primary">WORKS</h6>
						<h2>My Works</h2>
					</div>
				</div>
				<div className="row g-3">
					<Project
						url={""}
						title={"Portfolio"}
						comment={"このポートフォリオです。"}
						index={1}
					/>
					<Project
						url={"https://space-invaders-with-reflect.herokuapp.com/index.html"}
						title={"Space Invaders"}
						comment={"JavaScriptでライブラリなどは使わず製作しました。"}
						index={2}
					/>
					<Project
						url={"https://nodejs-mongodb-tutorial.herokuapp.com/"}
						title={"ToDoApp"}
						comment={"Nodejs,MongoDBを使ったToDoApp"}
						index={3}
					/>
				</div>
			</div>
		</section>
	);
}
