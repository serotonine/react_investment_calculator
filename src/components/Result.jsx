import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Result({ datas }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    datas;
  const rows = calculateInvestmentResults({ ...datas });
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investivement Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          const investedCapital =
            initialInvestment + annualInvestment * row.year;
          return (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(row.valueEndOfYear - investedCapital)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
