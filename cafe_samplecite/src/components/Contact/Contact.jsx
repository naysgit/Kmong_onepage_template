import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

function Contact({

  badge = "CONTACT",

  title = "오시는 길",

  subtitle = "언제든 편하게 방문해 주세요.",

}) {

  return (

    <section className="contact section" id="contact">

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

                <p>02-1234-5678</p>

              </div>

            </div>

            <div className="contact-item">

              <Mail size={22}/>

              <div>

                <h4>이메일</h4>

                <p>honeybean@cafe.com</p>

              </div>

            </div>

            <div className="contact-item">

              <MapPin size={22}/>

              <div>

                <h4>주소</h4>

                <p>서울시 마포구 어딘가길 12</p>

              </div>

            </div>

            <div className="contact-item">

              <Clock size={22}/>

              <div>

                <h4>운영시간</h4>

                <p>매일 09:00 - 21:00</p>

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
