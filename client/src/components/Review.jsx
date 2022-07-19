import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import Stars from './Stars';

function Review({ review }) {


  function splitLines(reviewBody) {
    const { body } = review;
    const firstLine = `${body.slice(0, 60)}...`;
    const remaining = `...${body.slice(60)}`;

    if (body.length > 60) {
      return (
        <div>
          <div>{firstLine}</div>
          <br />
          {remaining}
        </div>
      );
    }

    return (
      <div>
        {body}
      </div>
    );
  }


  return (


    <div className="review">
      <br />

      <Stars rating={review.rating} />

      <div className="review-name-date">
        {`${review.reviewer_name},
          ${new Date(review.date).toLocaleDateString(
          'en-us',
          { year: "numeric", month: "long", day: "numeric" }
        )}`}
      </div>

      <br />
      {review.summary}
      <br />
      {splitLines(review.body)}

      <div id="review-recommended">
        {review.recommend
          ? (
            <>
              <FcCheckmark style={{ position: 'relative' }} />
              <div style={{ position: 'relative', left: 20 }}>I recommend this product</div>
            </>
          )
          : ''}
      </div>

      <div id="review-response">
        {review.response ? `Response: <br>${review.response}` : ''}
      </div>

      {`Helpful? Yes ${review.helpfulness} | `}

      <div> Report </div>

    </div>
  );
}

export default Review;
