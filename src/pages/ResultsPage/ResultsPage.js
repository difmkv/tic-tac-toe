import { useFetch } from "../../custom-hooks";
import { endpoint } from "../../services";
import * as classes from "./ResultsPage.module.css";

export const ResultsPage = () => {
  const [results, loading] = useFetch(endpoint);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={classes.ResultsPage}>
      <h1>🏆 Hall of Fame 🏆</h1>
      <ul>
        {Object.entries(results).map(([name, value]) => (
          <li key={name}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
