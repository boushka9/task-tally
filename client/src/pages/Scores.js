import { useState, useEffect  } from "react";
import { QUERY_SCORES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import QuoteCard from "../components/QuoteCard";
// import Data from 'database'

import Auth from '../utils/auth'

export const UserScores = () => {
  const { data: scoreData, loading: loadingRender, error: renderError } = useQuery(QUERY_SCORES);
  const [checkedScore, setCheckedScore] = useState([]);
  const [unCheckedScore, setUnCheckedScore] = useState([]);
  const [checkScoreTotal, setCheckedScoreTotal] = useState(0); // Start adding from first item in array
  const [unCheckScoreTotal, setUnCheckedScoreTotal] = useState(0); // Start adding from first item in array
  

  console.log(scoreData);

  // Filter through queried scoreData and only get the scores from tasks with checked: true
  useEffect(() => {
    if (scoreData) {
      const checkedScores = scoreData.tasks.filter(score => score.checked === true);
      const unCheckedScore = scoreData.tasks.filter(score => score.checked === false);

      setUnCheckedScore(unCheckedScore);
      setCheckedScore(checkedScores);
    }
  }, [scoreData])

  console.log('checked', checkedScore)
  console.log('Un-checked', unCheckedScore)

  // User reduce method on the array of checked scores
  useEffect(() => {
    const totalChecked = checkedScore.reduce((total, score) => total + score.scoreValue, 0);

    setCheckedScoreTotal(totalChecked);
  }, [checkedScore])


  useEffect(() => {
    const totalUnChecked = unCheckedScore.reduce((total, score) => {
      if (score.scoreValue >= 0 ) {
        return total + score.scoreValue
      }
      return total;
    }, 0);
    
    console.log('total unchecked: ', totalUnChecked)
    setUnCheckedScoreTotal(totalUnChecked);
  }, [unCheckedScore])

  if (loadingRender) return 'Loading Scores...';
  if (renderError) return `Error Rendering Scores! ${renderError.message}`;

  return (
    <div>
      {Auth.loggedIn() ? (
      <div className="scores-page">
        <h1>Wow! You've gotten a lot done!</h1>
        <h2>Keep tallying tasks and beat your current score!</h2>
        <div className="scores-container">
          <h1 className="current-score">Current Score: {checkScoreTotal}</h1>
          <h1 className="potential-score">Points left in your tally: {unCheckScoreTotal}</h1>
        </div>
        <QuoteCard />
      </div>
      ) : (
        <h1><a className="auth-login" href="/">Log in</a> to view your tally score!</h1>
      )}

    </div>
  )
}

export default UserScores;