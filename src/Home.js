function Home() {
    return (
        <>
            <div className="homeContainer">
                <h1 className="welcomeText">WE HELP YOUR BUSINESS WITH</h1>
            </div>
            <div className="row justify-content-center pt-3">
                <div className="col-3">
                    <img src={process.env.PUBLIC_URL + "/business-women.jpg"} className="img-responsive" alt="business woman"/>
                </div>
                <div className="col-6 text-md-start">
                    <h3>Who we are</h3>
                    <div>Cloud Resources is a highly motivated and results-oriented consulting firm specialized in cutting edge next-generation Software Development, Technology and Cloud Services.</div>
                </div>
            </div>
        </>
        
    );
}

export default Home;