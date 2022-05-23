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
                    <br></br>
                    <div>We specialize in Software, Application development, technology consulting, Infrastructure services, Cloud and Big data technologies offering highest quality services and solutions to customers. Thus nurturing long-term relationships with clients of all sizes, national as well as across the globe.</div>
                </div>
            </div>
            <div className="row justify-content-center pt-5">
                <div className="col-8">
                    What makes us different
                </div>
                <div className="col-8">
                    Our "Listen, Analyze, Develop, Fix" approach
                </div>
            </div>
            <div className="row justify-content-center pt-5">
                <div className="col-5">
                    <div className="card" style={{width: "48rem", height: "25rem"}}>
                        <div className="card-body">
                            <h5 className="card-title text-start">Listen</h5>
                            <img className="card-icon" src={process.env.PUBLIC_URL + "/listen.svg"} alt="Listen" />
                            <p className="card-text">Many occasions consulting firms jump right into the job without truly understanding the scope and breadth of customers needs and requirements. We at Cloud Resources, we take this phase as the most important step in this process, to help us really appreciate the requirement of the customer, and to help us get a good understanding for the business reasons for the requirements.</p>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                <div className="card" style={{width: "48rem", height: "25rem"}}>
                        <div className="card-body">
                            <h5 className="card-title text-start">Analyze</h5>
                            <img className="card-icon" src={process.env.PUBLIC_URL + "/analize.svg"} alt="Analyze" />
                            <p className="card-text">At this stage, our SME’s will collectively focus on developing a solution to fix the existing problem by placing a high value on Operational validity, Economic validity. It is also important to connect ideas with deeper insight into current situation and problems which will develop into best possible solutions for the given situation.</p>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="card" style={{width: "48rem", height: "25rem"}}>
                        <div className="card-body">
                            <h5 className="card-title text-start">Develop</h5>
                            <img className="card-icon" src={process.env.PUBLIC_URL + "/develop.svg"} alt="Develop" />
                            <p className="card-text">Once we have developed the solution, now it will be our technical expert’s responsibility to fix the issue with the help of documentation from solutions design phase and also provide appropriate documentation to customer with best possible knowledge transfer.</p>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                <div className="card" style={{width: "48rem", height: "25rem"}}>
                        <div className="card-body">
                            <h5 className="card-title text-start">Fix</h5>
                            <img className="card-icon" src={process.env.PUBLIC_URL + "/fix.svg"} alt="Fix" />
                            <p className="card-text">Once we have developed the solution, now it will be our technical expert’s responsibility to fix the issue with the help of documentation from solutions design phase and also provide appropriate documentation to customer with best possible knowledge transfer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Home;