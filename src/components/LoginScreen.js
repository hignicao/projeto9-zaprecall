import styled from "styled-components";
import Logo from "../assets/images/logo.png";
import { useState } from "react";

export default function LoginScreen({ setIsLogged, deckSelected, setDeckSelected, goal, setGoal }) {
	const [isDeckSelected, setIsDeckSelected] = useState(false);
	const [temporaryDeck, setTemporaryDeck] = useState([]);

	function changeDeck(deck) {
		setTemporaryDeck(deckSelected[deck]);
	}

	function selectDeck(deck) {
		setIsDeckSelected(true);
		setDeckSelected(deck);
	}

	return (
		<LoginContainer>
			<img src={Logo} alt="Logo Zap Recall" />
			<h1>ZapRecall</h1>
			{!isDeckSelected ? (
				<>
					<select data-identifier="deck-selector" name="Decks para escolher" id="decks" defaultValue="" required onChange={(event) => changeDeck(event.target.value)}>
						<option value="" disabled hidden>
							Escolha seu deck
						</option>
						{deckSelected.map((el, i) => (
							<option data-identifier="deck-option" key={i} value={i}>
								{el[0].deckname} ({el.length} perguntas)
							</option>
						))}
					</select>
					<button data-identifier="start-btn" onClick={() => selectDeck(temporaryDeck)}>Iniciar Recall!</button>
				</>
			) : (
				<>
					<input data-identifier="goals-input" type="number" placeholder="Digite sua meta de zaps..." min={1} max={deckSelected.length} onChange={(event) => setGoal(event.target.value)} />
					<button disabled={goal < 1 || goal > deckSelected.length} onClick={() => setIsLogged(true)}>
						Iniciar Recall!
					</button>
				</>
			)}
		</LoginContainer>
	);
}

const LoginContainer = styled.div`
	background-color: #fb6b6b;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	img {
		margin-bottom: 20px;
	}
	h1 {
		color: #ffffff;
		font-family: "Righteous";
		font-style: normal;
		font-weight: 400;
		font-size: 36px;
		line-height: 45px;
		letter-spacing: -0.012em;
		margin-bottom: 30px;
	}
	select {
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		padding: 5px;

		border: none;
		outline: none;
		width: 246px;
		height: 43px;
		background: #ffffff;
		border-radius: 5px;
		margin-bottom: 20px;

		:invalid {
			color: #adadad;
		}
	}
	input {
		color: #fb6b6b;
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		padding-left: 10px;

		border: none;
		outline: none;
		width: 232px;
		height: 41px;
		background: #ffffff;
		border-radius: 5px;
		margin-bottom: 20px;

		::placeholder {
			font-weight: 400;
			font-size: 14px;
			line-height: 16px;
			color: #adadad;
		}
	}
	button {
		width: 246px;
		height: 54px;
		background: #ffffff;
		border: 1px solid #d70900;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
		border-radius: 5px;

		font-family: "Recursive";
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
		color: #d70900;

		:disabled {
			border: none;
			background: #e8e8e8;
			color: #c0c0c0;
		}
	}
`;
