import scss from "./Cart.module.scss";

const Title = [
  {
    p: "PRODUCT DESIGN",
    p_a: "SPRINT",
    span: "A five-day workshop that will help you answer crucial business questions",
    a: "  Read More",
  },
  {
    p: "SCOPING",
    p_a:"SESSION",
    span: "A workshop aimed at shaping your business idea, answering questions regarding project planning",
    a: "  Read More",
  },
  {
    p: "UX",
    p_a:"REVIEW",
    span: "An evaluation which will help you radically improve your product.",
    a: "  Read More",
  },
  {
    p: "CODE",
    p_a:"REVIEW",
    span: "Do you know what one of the key secrets of success is what makes people successful in business",
    a: "  Read More",
  },
];

function Cart() {
  return (
    <section className={scss.Cart}>
      <h1>
        Deation & Evaluation - Best Way <br /> to Kick off Your Product Idea
      </h1>
      <div className={scss.container}>
        {Title.map((item, index) => (
          <div className={scss.bloc} key={index}>
            <div>
              <p>{item.p}</p>
              <p>{item.p_a}</p>
            </div>
            <span>{item.span}</span>
            <a href="">{item.a}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cart;
