import footerContact from "../../api/footerApi.json"

export const Footers =()=>{
    return(
        <footer className="footer-section">
            <div>
                {
                    footerContact.map((curData,index)=>{
                        const {icon,title,details}=curData;
                        return(
                            <div className="footer-contact" key={index}> 
                                <div className="icon">{icon}</div>
                                <div className="footer-contact-text">
                                    <p>{title}</p>
                                    <p>{details}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>

        </footer>
    );
};