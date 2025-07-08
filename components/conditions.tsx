const Conditions = () => {
  return (
    <section
      id="conditions"
      className="flex item-center justify-center bg-[#E9F3FD] my-4"
      style={{
        backgroundImage: `url(https://xbetagents.com/wp-content/uploads/2024/04/list-facts-bg.f249a7-4.jpg)`,
      }}
    >
      <div className="flex items-start sm:flex-row flex-col justify-center my-14 container  sm:px-14 px-6">
        <img
          src="https://xbetagents.com/wp-content/uploads/2024/04/phone-3-app.png"
          alt=""
          className="w-full"
        />
        <div className="w-full flex flex-col gap-6">
          <h5 className="sm:text-3xl text-lg font-semibold text-right w-[85%] self-center">
            Important facts for those who want to become e-wallet agent
          </h5>
          <Item
            image="https://xbetagents.com/wp-content/uploads/2024/03/1.png"
            title="Agents can be adults who want to gain a source of stable income,
              working with a reliable partner"
          />
          <Item
            image="https://xbetagents.com/wp-content/uploads/2024/03/1-1.png"
            title="All that’s needed is a desire to make money as a betting agent and, of course, a gadget that would allow you to be always in touch."
          />
          <Item
            image="https://xbetagents.com/wp-content/uploads/2024/03/1-2.png"
            title="Working as a betting broker can be considered additional or the main source of income. Each 1xbet partner decides their own level of involvement."
          />
          <Item
            image="https://xbetagents.com/wp-content/uploads/2024/03/1-3.png"
            title="How much can an agent earn? Well, that mainly depends on the individual agent. But, of course, a lot also hinges on the country in which the agent works"
          />
        </div>
      </div>
    </section>
  );
};

export default Conditions;

const Item = (props: { image: string; title: string }) => {
  return (
    <div className="flex items-center gap-3 sm:flex-row flex-col">
      <img src={props.image} alt="" className="sm:size-24 size-10" />
      <p className="font-semibold text-lg sm:text-left text-center">
        {props.title}
      </p>
    </div>
  );
};
