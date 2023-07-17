import {useState} from 'react';

const HomePage = () => {
    const [name , setName] = useState('Akram');

    const handleClick = () =>{
        setName('Mohammed')
    }

    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <p>{`Welcome ${ name }`}</p>
            <button onClick = {handleClick}>Change Name</button>
        </div>
     );
}
 
export default HomePage;