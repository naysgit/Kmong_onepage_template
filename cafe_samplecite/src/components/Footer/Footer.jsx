
function Footer({

  logo = "🍯 허니빈 카페",

  copyright = "© 2026 Honeybean Cafe. All Rights Reserved.",

}){

  return(

    <footer className="footer">

      <div className="container footer-container">

        <div>

          <h2>

            {logo}

          </h2>

          <p>

            작고 따뜻한 동네 카페
          </p>

        </div>

        <div className="footer-menu">

          <a href="#home">홈</a>
          <a href="#menu">메뉴</a>
          <a href="#gallery">갤러리</a>
          <a href="#contact">오시는길</a>

        </div>

       <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Blog</a>
        </div>

      </div>

      <div className="footer-copy">

        {copyright}

      </div>

    </footer>

  );

}

export default Footer;
