import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.jpg";
const MainArticle = () => {
  return (
    <section>
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 640px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="hero-image" />
      </picture>

      <div className="sm:flex sm:gap-3">
        <h1 className="flex-1 font-bold text-[40px] sm:text-[58px] leading-none py-6">The Bright Future of Web 3.0?</h1>

        <div className="flex-1 pt-9">
          <p className="text-[13px] mb-10 sm:text-[15px]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default MainArticle;
