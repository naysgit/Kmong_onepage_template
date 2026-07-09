function Hero({
  badge = "Premium Website",
  title = "당신의 아이디어를 최고의 웹사이트로",
  description = "기업 · 카페 · 병원 · 쇼핑몰 등 다양한 업종에 맞는 반응형 웹사이트를 제작합니다.",
  primaryButton = "프로젝트 문의",
  secondaryButton = "포트폴리오",
  image = null,
}) {
  return (
    <section className="hero">

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

            <button className="secondary-btn">
              {secondaryButton}
            </button>

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