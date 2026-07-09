
function Footer({

  logo = "YourBrand",

  copyright = "© 2026 YourBrand. All Rights Reserved.",

}){

  return(

    <footer className="footer">

      <div className="container footer-container">

        <div>

          <h2>

            {logo}

          </h2>

          <p>

            Modern Web Template

          </p>

        </div>

        <div className="footer-menu">

          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>

        </div>

       <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
        </div>

      </div>

      <div className="footer-copy">

        {copyright}

      </div>

    </footer>

  );

}

export default Footer;