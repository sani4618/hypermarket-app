import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div>
        <Header/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <h1><center><b>Welcome To Vanitha Hypermarket</b></center></h1>

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div class="card">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div class="card" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Home