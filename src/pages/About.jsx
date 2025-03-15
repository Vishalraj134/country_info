import countryFacts from "../api/countryData.json";



export const About=()=>{
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are the Interesting Fact
                <br/>
                we're proud of
            </h2>  

            <div className="gradient-cards">

            {countryFacts.map((countryy)=>{
                const{id,country,captial,poplution,interesting_Fact}=countryy;
             return  (
                <div className="card" key={id}>
                    <div className="container-card bg-blue-box">
                        <p className="card-title">{country}</p>
                        <p>
                            <span className="card-description">Captial</span>
                            {captial}
                        </p>
                        <p>
                            <span className="card-description">Population</span>
                            {poplution}
                        </p>
                        <p>
                            <span className="card-description">Interesting Fact</span>
                            {interesting_Fact}
                        </p>
                    </div>
                </div>
             );
            })}   
            </div>
        </section>
    );
 };