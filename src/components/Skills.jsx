import React from "react";
import Card from "./Card";

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
					<Card
						skill={"HTML5"}
						experience={1}
						level={3}
						icon={"bx bxl-html5"}
						comment={
							"以前ゲーム制作をしていた時に少しUIを作る程度だったので深くはできませんが、基本的なことはできます。"
						}
					/>
					<Card
						skill={"CSS3"}
						experience={1}
						level={3}
						icon={"bx bxl-css3"}
						comment={
							"Html5同様、基本的なことはできます。最近ではCSSフレームワークのTailwindcss,Bootstrap5の勉強をしています。"
						}
					/>
					<Card
						skill={"JavaScript"}
						experience={2}
						level={4}
						icon={"bx bxl-javascript"}
						comment={""}
					/>
					<Card
						skill={"Python"}
						experience={1}
						level={3}
						icon={"bx bxl-python"}
						comment={
							"直近ではTensorFlowを使った自然言語処理のモデルの学習を行いました？"
						}
					/>
					<Card
						skill={"Node.js"}
						experience={1}
						level={3}
						icon={"bx bxl-nodejs"}
						comment={"mongoDBを使ってToDoAppを製作しました。"}
					/>
					<Card
						skill={"React"}
						experience={1}
						level={3}
						icon={"bx bxl-react"}
						comment={"firebaseを使ったマイクロブログを製作しました。"}
					/>
					<Card
						skill={"Django"}
						experience={1}
						level={2}
						icon={"bx bxl-python"}
					/>
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
