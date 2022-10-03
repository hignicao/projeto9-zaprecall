import FlashCard from "./FlashCard";

export default function Deck({ deck, result, setResult }) {
	return (
		<>
			{deck.map((card, i) => (
				<FlashCard key={i} number={i + 1} card={card} result={result} setResult={setResult} />
			))}
		</>
	);
}
