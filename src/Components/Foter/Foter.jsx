import scss from "./Foter.module.scss";
import logo from "../../assets/Logo.svg";

function Foter() {
  return (
    <section className={scss.Foter}>
      <div className={scss.wite}>.</div>
      <div className={scss.logo}>
        <h1>
          Let’s make something <br /> amazing together.
        </h1>
        <p> LET'S GET STARTED</p>
      </div>
      <div className={scss.container}>
        <div className={scss.cotai}>
          <div className={scss.bloc}>
            <p>Phone</p>
            <span>+32 50 31 28 32</span>
          </div>
          <div className={scss.bloc}>
            <p>Address</p>
            <span>491 Merlin Crest Suite 963</span>
          </div>
        </div>
        <hr />
        <div className={scss.container_a}>
          <div className={scss.a}>
            <h1>SERVICES</h1>
            <a href="">Strategy Design</a>
            <a href="">Product Design</a>
            <a href="">Content Strategy</a>
            <a href="">Brand Strategy</a>
            <a href="">Development </a>
          </div>
          <div className={scss.a}>
            <h1>HELP AND ADVICE</h1>
            <a href="">How it works</a>
            <a href="">Contact Support</a>
            <a href="">Privacy Policy</a>
            <a href="">FAQ</a>
          </div>
          <div className={scss.a}>
            <h1>COMPANY</h1>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Jobs</a>
          </div>
          <hr className={scss.wer} />
          <div className={scss.title}>
            <p>GET IN TOUCH</p>
            <span>
              Feel free to get in touch with us <br /> vai email
            </span>
            <a href="">info.webovio@gmail.com</a>
            <div className={scss.contai_button}>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
        <hr />
        <div className={scss.Foter_a}>
          <img src={logo} alt="" />
          <p>© 2020@webovio. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Foter;
