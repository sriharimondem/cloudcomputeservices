import { Headers } from '../shared/Constants';
import CardDetails from '../shared/CardDetails';

function Home () {
    return (
        <>
            <div className="homeContainer">
                <h1 className="welcomeText">{Headers.WE_HELP_YOUR_BUSINESS_WITH}</h1>
            </div>
            <div className="row justify-content-center pt-3">
                <div className="col-3">
                    <img src={process.env.PUBLIC_URL + "/business-women.jpg"} className="img-responsive" alt="business woman" />
                </div>
                <div className="col-6 text-md-start">
                    <h3>Who we are</h3>
                    <div>Cloud Resources is a highly motivated and results-oriented consulting firm specialized in cutting edge next-generation Software Development, Technology and Cloud Services.</div>
                    <br></br>
                    <div>We specialize in Software, Application development, technology consulting, Infrastructure services, Cloud and Big data technologies offering highest quality services and solutions to customers. Thus nurturing long-term relationships with clients of all sizes, national as well as across the globe.</div>
                </div>
            </div>
            <div className="row justify-content-center pt-5">
                <div className="col-8">
                    {Headers.WHAT_MAKE_US_DIFFERENT}
                </div>
                <div className="col-8">
                    {Headers.OUR_APPROACH}
                </div>
            </div>
            <div className='d-flex justify-center'>
                <CardDetails Img={process.env.PUBLIC_URL + "/listen.svg"} imgDescription={"Listen"} Header={Headers.LISTEN} Description={Headers.LISTEN_DESCRIPTION} />
                <CardDetails Img={process.env.PUBLIC_URL + "/analize.svg"} imgDescription={"Analyze"} Header={Headers.ANALYZE} Description={Headers.ANALYZE_DESCRIPTION} />
            </div>
            <div className='d-flex justify-center'>
                <CardDetails Img={process.env.PUBLIC_URL + "/develop.svg"} imgDescription={"Develop"} Header={Headers.DEVELOP} Description={Headers.DEVELOP_DESCRIPTION} />
                <CardDetails Img={process.env.PUBLIC_URL + "/fix.svg"} imgDescription={"Fix"} Header={Headers.DEVELOP} Description={Headers.FIX_DESCRIPTION} />
            </div>
        </>

    );
}

export default Home;