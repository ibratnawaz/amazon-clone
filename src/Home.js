import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>

                <div className="home_row">
                    <Product
                        id={123456}
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
                        price={615}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    />
                    <Product
                        id={123457}
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={23900}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                </div>

                <div className="home_row">
                    <Product
                        id={123458}
                        title="Amazon echo"
                        price={3499}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
                    />
                    <Product
                        id={123459}
                        title="Apple iPad Pro - Space Grey Aluminium Case with Black Sport Band"
                        price={29900}
                        rating={1}
                        image="https://m.media-amazon.com/images/I/815a+XjrgvL._AC_SX420_.jpg"
                    />
                    <Product
                        id={123460}
                        title="Samsung Galaxy M31s"
                        price={21499}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/61d-phh4GfL._AC_SL1500_.jpg"
                    />
                </div>

                <div className="home_row">
                    <Product
                        id={123461}
                        title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)"
                        price={54999}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81lpllAGcBL._SL1500_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
