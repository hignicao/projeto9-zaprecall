import styled from "styled-components";
import MissImg from "../assets/images/icone_erro.png";
import AlmostImg from "../assets/images/icone_quase.png";
import ZapImg from "../assets/images/icone_certo.png";

export default function Footer({ length, result, goal}) {
	return (
		<HeaderContainer>
			<p>
				{result.length}/{length} CONCLUIDOS
			</p>
			{result.length === 0 ? (
				""
			) : result.length === length ? (
				<>
					{(result.filter(e => e === 3).length) < goal ? (
						<p>Putz, você precisa treinar mais! 😱😵‍💫</p>
					) : (
						<p>Parabéns, você está craque! 🥳🎉</p>
					)}
				</>
			) : (
				<IconsContainer>
					{result.map((el, i) => (
						<img key={i} src={el === 1 ? MissImg : el === 2 ? AlmostImg : ZapImg} alt="" />
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
