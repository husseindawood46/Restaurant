import React from 'react'
import './Home.css'
import Header from './Header'
import pride from '../../assets/1.png'
import Ingredients from'../../assets/2.png'
import Data from '../../data'
import Carousel from 'react-bootstrap/Carousel';
import imgslider1 from '../../assets/1 (1).jpg';
import imgslider2 from '../../assets/2 (1).jpg';
import imgslider3 from '../../assets/3(3).jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-solid-svg-icons'
function Home() {
  const blogItem=Data.map((item)=>{
    return(
      <div className='col-lg-4'>
      <div className='box'>
        <img  src={item.img}/>
        <h5>{item.title}</h5>
        <span>{item.time}</span>
        <h6>{item.price}</h6>
      </div>
      <button><a href='#'>order now </a></button>
      </div>
    )
  })
  return (
    <div>
      <Header/>
      <section>
      <div className='numbers'>
          <div className='container'>
            <div className='row'>
            <div className='col-md-3'>
              <h2>9875+</h2>
              <p>SAVINGS </p>
            </div>
            <div className='col-md-3'>
              <h2>0563+</h2>
              <p>PHOTOS </p>
            </div>
            <div className='col-md-3'>
              <h2>4721+</h2>
              <p>ROCKETS </p>
            </div>
            <div className='col-md-3'>
              <h2>3420+</h2>
              <p>GLOBES</p>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pride'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={pride} title='img'/>
            </div>
            <div className='col-md-6'>
                <h2>We pride ourselves on making real food from the best ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <button ><a href='#'>Learn more</a> </button>
            </div>
          </div>
        </div>
        </section>
        <section className='ingredients'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h2>We make everything by hand with the best possible ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
              </ul>
              <button ><a href='#'>Learn more</a> </button>
            </div>
            <div className='col-lg-6'>
              <img src={Ingredients} title='ingredients'/>
            </div>
          </div>
        </div>
      </section>

      <section className='paralex'>
        <div className='container'> 
        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <h2>When a man's stomach is full it makes no <br/>
             difference whether he is rich or poor.</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
               bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
               <a href='#'>watch our stre </a>
          </div>
        </div>
        </div>
      </section>

      <section className='blogs'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <h2>Explore Our Foods</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
          </div>
          <div className='row'>
            {blogItem}
          </div>
        </div>
       </section>


       <section className='slider'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <h2>Testimonials</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
            <Carousel>
      <Carousel.Item>
        <img src={imgslider1}/>
        <Carousel.Caption>
          <h3>UX- Designer</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={imgslider2}/>
        <Carousel.Caption>
          <h3>Front end Developer </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={imgslider3}/>
        <Carousel.Caption>
          <h3>
            Engineer
          </h3>

        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>          
            </div>
          </div>
        </div>
       </section>

      <section className='textp'>

        <div className='container'>
          <div className='row'>
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <h5>~ Is Foodera Bread really baked fresh each day?</h5>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
              <h5>~ Can I order your products online?</h5>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className='col-lg-6'>
              <h5>~ Is Foodera Bread really baked fresh each day?</h5>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
              <h5>~ Can I order your products online?</h5>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
          </div>
        </div>
      </section>

    <footer >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1> Restaurant</h1>
          <a href="#">Register</a>
          <a href="#">Forum</a>
          <a href="#">Affiliate</a>
          <a href="#">FAQ</a>
          </div>
        </div>
      </div>
    </footer>


    </div>
  )
}

export default Home
