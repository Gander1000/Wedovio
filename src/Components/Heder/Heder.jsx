import scss from "./Heder.module.scss";
import bitmap from "../../assets/Bitmap.svg";
import group from "../../assets/Group 15.svg";
import logo from "../../assets/Logo.svg";

const Heder = () => {
  return (
    <section className={scss.Heder}>
      <img className={scss.bitmap} src={bitmap} alt="bitmap" />
      <div className={scss.container}>
        <div className={scss.logo_sp}>
          <img src={logo} alt="" />
          <img src={group} alt="" />
        </div>
        <div className={scss.contai_title}>
          <h6>A place where </h6>
          <h1>
            A creative agency <br /> for redemptive <br /> brands
          </h1>
          <span>
            Anteelo is a leading strategic design firm that builds powerful
            digital <br /> solutions for startups and enterprises.
          </span>
          <a href=""> Get in touch</a>
        </div>
      </div>
    </section>
  );
};

export default Heder;
