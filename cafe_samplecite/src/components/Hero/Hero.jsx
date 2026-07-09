function Hero({
  badge = "🍯  허니빈 카페",
  title = "따뜻한 하루의 시작, 허니빈 카페",
  description = "갓 내린 커피와 직접 구운 디저트가 있는 작고 아늑한 동네 카페입니다.",
  primaryButton = "메뉴 보러가기",
  /* secondaryButton = "오시는 길", */
  image = null,
}) {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* 왼쪽 */}

        <div className="hero-content">

          <span className="hero-badge">
            {badge}
          </span>

          <h1>
            {title}
          </h1>

          <p>
            {description}
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              {primaryButton}
            </button>

            {/* <button className="secondary-btn">
              {secondaryButton}
            </button> */}

          </div>

        </div>

        {/* 오른쪽 */}

        <div className="hero-image">

          <div className="image-card">
                {image && (
                    <img
                    src={image}
                    alt="Hero"/>
                )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
