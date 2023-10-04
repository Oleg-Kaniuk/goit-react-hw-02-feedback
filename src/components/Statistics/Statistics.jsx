import { ListReviews } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ListReviews>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ListReviews>
    );
};