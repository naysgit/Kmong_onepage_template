import { Phone, Mail, MapPin, Clock } from "lucide-react";

function Contact({
  badge = "CONTACT",
  title = "지금 주문해보세요",
  subtitle = "예약 주문이나 단체 주문도 언제든 문의해주세요.",
}) {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{badge}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={22} />
              <div>
                <h4>전화 / 예약 주문</h4>
                <p>010-1234-5678</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={22} />
              <div>
                <h4>이메일</h4>
                <p>order@maisonbakery.com</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={22} />
              <div>
                <h4>매장 위치</h4>
                <p>서울시 OO구 OO로 12길</p>
              </div>
            </div>
            <div className="contact-item">
              <Clock size={22} />
              <div>
                <h4>영업시간</h4>
                <p>매일 08:00 - 21:00</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="이름" />
            <input type="tel" placeholder="연락처" />
            <textarea rows="6" placeholder="예약/단체 주문 내용을 입력해주세요." />
            <button type="submit" className="primary-btn">
              문의 보내기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
