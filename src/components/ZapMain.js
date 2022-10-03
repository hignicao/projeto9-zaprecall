import { useState } from "react";
import styled from "styled-components";
import DECK1 from "../assets/utils/DECK1";
import Deck from "./Deck";
import Footer from "./Footer";
import Header from "./Header";

export default function ZapMain() {
	const [result, setResult] = useState([]);
	return (
		<>
			<Main>
				<Header />
				<Deck deck={DECK1} result={result} setResult={setResult} />
				<Footer length={DECK1.length} result={result} />
			</Main>
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
