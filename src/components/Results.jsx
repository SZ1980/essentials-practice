import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.table(resultsData);
  return <p>Results...</p>;
}
