
import './App.css'
import Footer from './components/Footer'
import Login from './components/Login'


function App() {


  return (
    <>
      <div className="main">

        <div className="container">

          <div className="login">
            <Login/>
          </div>

          <div className="image">

            <img src="Art.png" alt="" />

          </div>


        </div>
        

        <div className="footer">
          <Footer/>
        </div>

      </div>


    </>
  )
}


export default App
