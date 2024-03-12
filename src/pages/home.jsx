import Menu from "./menu";
import './home.css';

function Home() {
    return (
        <div>
            <div className="app">
                <img src="./img/image-removebg-preview (4).png" alt="" width={132} />
                <div class="head2">
                    <Menu />
                </div>
            </div>
            <h1>Welcome to our website!</h1>
        </div>  
    )

}
export default Home