import { Star } from "lucide-react";

function Review({
  badge = "REVIEW",
  title = "고객 후기",
  subtitle = "프로젝트를 함께한 고객들의 실제 후기입니다.",

  reviews = [
    {
      name: "김민수",
      company: "ABC Company",
      comment:
        "빠른 작업 속도와 높은 퀄리티 덕분에 만족스러운 결과물을 받을 수 있었습니다.",
    },
    {
      name: "이지은",
      company: "Cafe Bloom",
      comment:
        "디자인이 깔끔하고 수정 요청도 빠르게 반영해 주셔서 정말 만족했습니다.",
    },
    {
      name: "박준영",
      company: "Travel Lab",
      comment:
        "기획부터 배포까지 꼼꼼하게 진행해 주셔서 믿고 맡길 수 있었습니다.",
    },
  ],
}) {
  return (
    <section className="review section">

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