import { Star } from "lucide-react";

function Review({
  badge = "REVIEW",
  title = "고객님들의 후기",
  subtitle = "허니빈 카페를 다녀가신 분들의 진짜 이야기예요.",

  reviews = [
    {
      name: "김민지",
      company: "동네 주민",
      comment:
        "커피 향이 정말 좋고 사장님이 친절하셔서 자주 찾아요.",
    },
    {
      name: "이하늘",
      company: "단골 손님",
      comment:
        "디저트가 매번 맛있고 분위기가 아늑해서 힐링하기 좋아요.",
    },
    {
      name: "박서준",
      company: "직장인",
      comment:
        "조용하고 편안해서 노트북 작업하기에도 딱 좋은 곳이에요.",
    },
  ],
}) {
  return (
    <section className="review section" id="review">

      <div className="container">

        <div className="section-header">

          <span className="section-badge">
            {badge}
          </span>

          <h2 className="section-title">
            {title}
          </h2>

          <p className="section-subtitle">
            {subtitle}
          </p>

        </div>

        <div className="review-grid">

          {reviews.map((review, index) => (

            <div
              className="review-card"
              key={index}
            >

              <div className="review-stars">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />

                ))}

              </div>

              <p className="review-comment">

                "{review.comment}"

              </p>

              <div className="review-user">

                <div className="review-avatar">

                  {review.name[0]}

                </div>

                <div>

                  <h4>{review.name}</h4>

                  <span>{review.company}</span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Review;
