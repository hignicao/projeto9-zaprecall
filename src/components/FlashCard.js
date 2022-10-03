import { useState } from "react";
import styled from "styled-components";
import playImg from "../assets/images/seta_play.png";
import virarImg from "../assets/images/seta_virar.png";
import MissImg from "../assets/images/icone_erro.png";
import AlmostImg from "../assets/images/icone_quase.png";
import ZapImg from "../assets/images/icone_certo.png";

export default function FlashCard({ number, card, result, setResult }) {
	const [isCardOpened, setIsCardOpened] = useState(false);
	const [isCardShowingAnswer, setIsCardShowingAnswer] = useState(false);
	const [cardAnswer, setCardAnswer] = useState(0);

	function answerQuestion(answer) {
		setCardAnswer(answer);
		setIsCardOpened(false);
		setIsCardShowingAnswer(false);
		setResult([...result, answer]);
	}

	return (
		<>
			{!isCardOpened ? (
				<ClosedCard cardAnswer={cardAnswer} onClick={cardAnswer === 0 ? () => setIsCardOpened(true) : null}>
					<p>Pergunta {number}</p>
					<img src={cardAnswer === 0 ? playImg : cardAnswer === 1 ? MissImg : cardAnswer === 2 ? AlmostImg : ZapImg} alt="Seta Play" />
				</ClosedCard>
			) : (
				<OpenedCard>
					{!isCardShowingAnswer ? (
						<QuestionCard>
							<p>{card.question}</p>
							<img onClick={() => setIsCardShowingAnswer(true)} src={virarImg} alt="Seta Virar Carta" />
						</QuestionCard>
					) : (
						<AnswerCard>
							<p>{card.answer}</p>
							<ButtonContainer>
								<button onClick={() => answerQuestion(1)}>Não lembrei</button>
								<button onClick={() => answerQuestion(2)}>Quase não lembrei</button>
								<button onClick={() => answerQuestion(3)}>Zap!</button>
							</ButtonContainer>
						</AnswerCard>
					)}
				</OpenedCard>
			)}
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
		text-decoration: ${({ cardAnswer }) => (cardAnswer !== 0 ? "line-through" : "none")};
		color: ${({ cardAnswer }) => (cardAnswer === 0 ? "#333333" : cardAnswer === 1 ? "#FF3030" : cardAnswer === 2 ? "#FF922E" : "#2FBE34")};
	}
`;

const OpenedCard = styled.div``;

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
		border-radius: 5px;
		border: none;
		padding: 5px;
		:nth-child(1) {
			background-color: #ff3030;
		}
		:nth-child(2) {
			background-color: #ff922e;
		}
		:nth-child(3) {
			background-color: #2fbe34;
		}
	}
`;
