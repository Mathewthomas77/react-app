import { TitleConstant } from "../../constants/title-constant";
import "./hero-component.scss";

const HeroComponent = () => {
  const titles = TitleConstant;
  return (
    <section className="hero-section py-5" id="heroSection">
      <div className="max-w-5xl mx-auto px-4 hero-wrapper">
        <div className="flex gap-4">
          <div className="flex-1 p-4 left-col">
            <span className="dev">{titles.FRONT_END_DEV}</span>
            <h1 className="title">
              <span dangerouslySetInnerHTML={{ __html: titles.HERO_TITLE1 }}/>
              <br />
              <span className="hero_2">{titles.HERO_TITLE2}</span>{" "}
            </h1>
            <p>
              <code>: {titles.HERO_SUBTITLE} </code>
            </p>
            <button type="button" className="btn-primary">
              {" "}
              {titles.BUTTONS.HERO_PRIMARY_CTA}{" "}
            </button>
          </div>
          <div className="flex-1 p-4 right-col">Right Column</div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
