import profilePIc from './assets/code8ez.png'


function Card (){

    return (
        <div className="card">

            <img className='card-image' src={profilePIc} alt="Image" />
            <h2 className='card-title' >Flutter Developer</h2>
            <p className="card-text">I'm a Flutter Developer learning react</p>

        </div>
    )


}


export default Card