import styled from "styled-components";
import MissImg from "../assets/images/icone_erro.png";
import AlmostImg from "../assets/images/icone_quase.png";
import ZapImg from "../assets/images/icone_certo.png";

export default function Footer({ length, result }) {
	return (
		<HeaderContainer>
			<p>
				{result.length}/{length} CONCLUIDOS
			</p>
			{result.length === 0 ? (
				""
			) : (
				<IconsContainer>
					{result.map((el) => (
						<img src={el === 1 ? MissImg : el === 2 ? AlmostImg : ZapImg} alt="" />
					))}
				</IconsContainer>
			)}
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	width: 100%;
	min-height: 50px;
	background-color: #ffffff;
	position: fixed;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: "Recursive";
	font-weight: 400;
	font-size: 18px;
	color: #333333;
	padding: 10px;

	p {
		margin: 15px 0px;
	}
`;

const IconsContainer = styled.div`
	margin-bottom: 15px;
	display: flex;
	gap: 10px;
`;
