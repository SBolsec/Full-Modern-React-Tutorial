import React from 'react'

const Home = () => {
    const handleClick = (e) => {
        console.log(e)
    }
    const handleClickAgain = (e, name) => {
        console.log(name, e.target)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain(e, 'mario')}>Click me again</button>
        </div>
    );
}
 
export default Home;