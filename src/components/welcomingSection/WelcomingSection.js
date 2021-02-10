import frontPage from "./../../static/images/frontPageImg.jpg";
import("./WelcomingSection.scss");

export const WelcomingSection = () =>
    <section className={"welcoming--section"}>
        <img src={frontPage} className="frontPageImg"/>
    </section>