// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar">
          <div className="box1 boxn">
            
            {/* <svg height="100" width="500" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="240" cy="50" rx="220" ry="30" fill="yellow" />
  <ellipse cx="220" cy="50" rx="190" ry="20" fill="white" />
  </svg> */}
  <p className="name">Arihant Srivastava</p>
          </div>
          <div className="box2 boxn">
            <div className="item1 item">About</div>
            <div className="item2 item"><a href="https://in.linkedin.com/">LinkedIn</a></div>
            <div className="item3 item"><a href="https://github.com/">GitHub</a></div>
            <div className="item4 item"><a href="https://www.youtube.com/">YouTube</a></div>
          </div>
        </nav>

        <div className="container1 container">
          <div className="box1 box">
            <p>Hi there everyone, I am <p className="imp">Arihant Srivastava</p>, currently a B.Tech. 1st   year CSE student at DTU. I have keen interest in <p className="imp">web development , programming and logic building</p>. My hobbies are <p className="imp">playing table tennis  and  listening to music</p>. I look forward to share great experiences  with you  all and to <p className="imp">grow together</p>.</p>
          </div>
          <div className="img">
          <img src="https://media.istockphoto.com/id/500954400/photo/computer-coffee-mug-telephone-on-black-wood-table-sun-rising.jpg?s=612x612&w=0&k=20&c=AWZgqePKVZQ30tKTRtZQlrWSd1ycwGpVtr1tRbDmn8o=" width="300" alt="" />
        </div>
        </div>
        <div className="container2 container">
        <div className="img">
          <img src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D" width="300" alt="" />
        </div>
        <div className="box2 box">
            <p>Skills :</p>
            <div className="skill">
              <li>HTML</li>
              <li>CSS</li>
              <li>Basic Javascript, Python and C</li>
              <li>Exposure to libraries like Numpy, openCV, React</li>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
