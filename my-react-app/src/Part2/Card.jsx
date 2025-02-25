import profilepic from '../assets/profilepic.jpg';
    

function Card(){
    return(
        <div className="card">
            <img className="cardImage" src={profilepic} alt="Picture"></img>
            <h2 className="cardTitle">Jericho</h2>
            <p className='cardParagraph'>Software Engineering Student</p>
        </div>
    );
}

export default Card;