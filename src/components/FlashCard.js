import styled from "styled-components";
import playImg from "../assets/images/seta_play.png";
import virarImg from "../assets/images/seta_virar.png";

export default function FlashCard({ number, card }) {
	return (
		<>
			<ClosedCard>
				<p>Pergunta {number}</p>
				<img src={playImg} alt="Seta Play" />
			</ClosedCard>
			<div className="opened-card">
				<QuestionCard>
					<p>{card.question}</p>
					<img src={virarImg} alt="" />
				</QuestionCard>
				<AnswerCard>
					<p>{card.answer}</p>
					<ButtonContainer>
						<button>Não lembrei</button>
						<button>Quase não lembrei</button>
						<button>Zap!</button>
					</ButtonContainer>
				</AnswerCard>
			</div>
		</>
	);
}

const ClosedCard = styled.div`
	width: 300px;
	height: 35px;
	background-color: #ffffff;
	margin: 12px;
	padding: 15px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	p {
		font-family: "Recursive";
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 19px;
		color: #333333;
	}
`;

const QuestionCard = styled.div`
	width: 300px;
	margin: 12px;
	padding: 15px;
	min-height: 100px;
	background: #ffffd5;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	font-family: "Recursive";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #333333;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	img {
		position: absolute;
		bottom: 10px;
		right: 10px;
	}
`;

const AnswerCard = styled.div`
	width: 300px;
	margin: 12px;
	padding: 15px;
	min-height: 100px;
	background: #ffffd5;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	font-family: "Recursive";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #333333;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	button {
		width: 90px;
		font-family: "Recursive";
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #ffffff;
		background: blue;
		border-radius: 5px;
		border: 1px solid blue;
		padding: 5px;
	}
`;
