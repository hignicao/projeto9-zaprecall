import FlashCard from "./FlashCard";

export default function Deck({ deck }) {
	return (
		<>
			{deck.map((card, i) => (
				<FlashCard key={i} number={i + 1} card={card} />
			))}
		</>
	);
}
