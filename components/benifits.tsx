const Benefits = () => {
  return (
    <section id="benifits" className="py-10 mt-5 px-5  ">
      <h4 className="sm:text-5xl text-3xl font-semibold ">
        Why it’s profitable to be an agent
      </h4>
      <div className="flex item-center justify-center">
        <div className="flex items-start sm:flex-row flex-col justify-center mt-5 container  sm:px-14 px-6">
          <div className="w-full flex flex-col gap-6">
            <Item
              image="https://xbetagents.com/wp-content/uploads/2024/04/icon-b-hat.png"
              desc=" The only thing you need to make money is a smartphone. Then, you can
          work wherever and whenever you want!"
              title=" A betting broker can earn around the clock"
            />
            <Item
              image="https://xbetagents.com/wp-content/uploads/2024/04/icon-b-hand.png"
              desc="The agent will invest a small amount and earn more money by performing all the activities correctly. Only need to spend some time and profit through commission."
              title=" Opportunity to earn a lot of money by investing a small amount
"
            />
            <Item
              image="https://xbetagents.com/wp-content/uploads/2024/04/icon-b-check.png"
              desc="The agent network is built in such a way that the work of agents is absolutely anonymous in terms of transactions, which means it is safe and protected from financial risks."
              title="Work is completely safe"
            />
            <Item
              image="https://xbetagents.com/wp-content/uploads/2024/04/icon-b-win.png"
              desc="A wide selection of markets ensures that players always have something to bet on. This means that the agent will be able to provide themself with a decent income."
              title="1xBet agent is one of the leading bookmakers in the world"
            />
          </div>
          <img
            src="https://xbetagents.com/wp-content/uploads/2024/04/phone-3-success.png"
            alt=""
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full flex items-center text-center justify-center font-semibold sm:text-sm text-base mt-2">
        More than 5,000 people have already become 1xBet agents. So join — and
        earn with a reliable bookmaker!
      </div>
    </section>
  );
};

export default Benefits;

const Item = (props: { image: string; title: string; desc: string }) => {
  return (
    <div className="flex sm:items-start gap-5 sm:flex-row flex-col items-center">
      <img src={props.image} alt="" />
      <div className="flex flex-col">
        <h6 className="text-xl font-semibold sm:text-left text-center">
          {props.title}
        </h6>
        <p className="mt-2 sm:text-left text-center">{props.desc}</p>
      </div>
    </div>
  );
};
