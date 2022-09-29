import Deck from "./Deck";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import DECK1 from '../assets/utils/DECK1'

export default function ZapMain() {
	return (
		<Main>
			<Header />
			<Deck deck={DECK1}/>
			<Footer />
		</Main>
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
	padding-bottom: 200px;
`;
