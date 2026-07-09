import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

function Contact({

  badge = "CONTACT",

  title = "프로젝트를 시작해보세요.",

  subtitle = "궁금한 점이 있다면 언제든지 문의해주세요.",

}) {

  return (

    <section className="contact section">

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

        <div className="contact-wrapper">

          <div className="contact-info">

            <div className="contact-item">

              <Phone size={22}/>

              <div>

                <h4>전화</h4>

                <p>010-1234-5678</p>

              </div>

            </div>

            <div className="contact-item">

              <Mail size={22}/>

              <div>

                <h4>이메일</h4>

                <p>example@email.com</p>

              </div>

            </div>

            <div className="contact-item">

              <MapPin size={22}/>

              <div>

                <h4>주소</h4>

                <p>Seoul, South Korea</p>

              </div>

            </div>

            <div className="contact-item">

              <Clock size={22}/>

              <div>

                <h4>운영시간</h4>

                <p>09:00 - 18:00</p>

              </div>

            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="이름"
            />

            <input
              type="email"
              placeholder="이메일"
            />

            <textarea
              rows="6"
              placeholder="문의 내용을 입력해주세요."
            />

            <button className="primary-btn">

              문의하기

            </button>

          </form>

        </div>

      </div>

    </section>

  );

}

export default Contact;