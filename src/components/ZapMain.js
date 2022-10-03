import { useState } from "react";
import styled from "styled-components";
import deckArray from "../assets/utils/deckArray";
import Deck from "./Deck";
import Footer from "./Footer";
import Header from "./Header";
import LoginScreen from "./LoginScreen";

export default function ZapMain() {
	const [isLogged, setIsLogged] = useState(false);
  const [deckSelected, setDeckSelected] = useState(deckArray)
	const [result, setResult] = useState([]);
	const [goal, setGoal] = useState(0);


	return (
		<>
			{!isLogged ? (
				<LoginScreen
					setIsLogged={setIsLogged}
					deckSelected={deckSelected}
					setDeckSelected={setDeckSelected}
					goal={goal}
					setGoal={setGoal}
				/>
			) : (
				<Main>
					<Header />
					<Deck
						deck={deckSelected}
						result={result}
						setResult={setResult}
					/>
					<Footer
						length={deckSelected.length}
						result={result}
						goal={goal}
					/>
				</Main>
			)}
		</>
	);
}

const Main = styled.div`
	background-color: #fb6b6b;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0px;
	padding: 0px;
	padding-bottom: 100px;
`;
