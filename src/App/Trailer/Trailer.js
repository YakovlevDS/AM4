import React from "react"
import { Link } from "react-router-dom"

import '../../common/style/base.css'
import './media.css'
import "./trailer.css"


const Trailer =()=> {
  return (
      <div className="container">
    <div className="row main-row">
     <div className="col-md-12 col-xs-12 main-box">
 
     
   
     <div className="row sort-row">
     <div className="col-md-6 col-xs-5">
     
     </div>
      <div className="col-md-6 col-xs-7 main-sort">
      <div className="col-md-4 col-xs-4">
       <p className="sort-name">Сортировать:</p>
       </div>
        <div className="col-md-4 col-xs-4 btn-popular">
       <button className="popular">Популярные</button>
       </div>
       <div className="col-md-4 col-xs-4">
       <button className="new">Новые</button>
       </div>
        </div>
     </div>
   

     <div className="wrap-block">
       <div className="bl">
     <div className="block"></div>
     </div>
     <div className="trayler-container">
   <div className="row wrap-main-line">
      <div className="col-md-3 col-xs-3 news news-game">
     <div className="main-name">Трейлеры</div>
      </div>
      <div className="col-md-1 col-xs-1 news">
     <div className="name-noties-box"><div className="name-noties">Все новости</div></div>
    </div>
      <div className="col-md-6 col-xs-6 main-choice-cont">
        <div className="main-dots pagination dots-pagin">
            <ul>
              <Link to="/">
                <li></li>
              </Link>
              <Link to="/">
                <li></li>
              </Link>
              <Link to="/">
                <li></li>
              </Link>
              <Link className="is-active" to="/">
                <li></li>
              </Link>
              <Link to="/">
                <li></li>
              </Link>
            </ul>
        </div>
        <div className="pagination slide-arrow">
              <ul>
                <Link className="is-active" to="/">
                  <li>
                    prev</li> </Link> <Link to="/">
                  <li>next</li>
                </Link>
              </ul>
            </div>
   </div>
   </div>

<div className="row game-cards-row">
  
     <div className="game-cards">
       <Link to="../new-pages/new-pages.html" className="card-trailer">
        
           <img src="img/trailer-img1.png" alt="img"/>
      <div className="game-cont-box">
       
        <div className="game-rating"><i className="fas fa-play"></i></div>
      <div className="game-name">Not A Hero. Геймплейный трейлер</div>
      <div className="descrip-name">Жанр: Action, Pixel</div>
      
          
 </div>
 </Link>
 <Link to="../new-pages/new-pages2.html" className="card-trailer">
         
               <img src="img/trailer-img2.png" alt="img"/>
      <div className="game-cont-box">
        <div className="game-rating"><i className="fas fa-play"></i></div>
      <div className="game-name">The Order: 1886 - Новый трейлер</div>
      <div className="descrip-name">Жанр: Action</div>
     
           </div>
</Link>
<Link to="../new-pages/new-pages.html" className="card-trailer">
            
                <img src="img/trailer-img3.png" alt="img"/>
      <div className="game-cont-box">
        <div className="game-rating"><i className="fas fa-play"></i></div>
      <div className="game-name">FRed Dead Redemption: 
Золото Сэта </div>
      <div className="descrip-name">Жанр: Action</div>
      
            </div>
</Link>
 
            <Link to="../new-pages/new-pages2.html" className="card-trailer">
              <img src="img/trailer-img4.png" alt="img"/>
      <div className="game-cont-box">
        <div className="game-rating"><i className="fas fa-play"></i></div>
      <div className="game-name">FineSweeper. Демонстрация игрового процесса</div>
      <div className="descrip-name">Жанр: Action, Pixel</div>
    
            </div>
            </Link>
               <Link to="../new-pages/new-pages.html" className="card-trailer">
              <img src="img/trailer-img5.png" alt="img"/>
      <div className="game-cont-box">
        <div className="game-rating"><i className="fas fa-play"></i></div>
      <div className="game-name">Видеодайджест от AM4 
Выпуск /211</div>
      <div className="descrip-name">Жанр: Action, Pixel</div>
      
            </div>
             </Link>
                <Link to="../new-pages/new-pages2.html" className="card-trailer">
              <img src="img/trailer-img6.png" alt="img"/>
      <div className="game-cont-box">
        <div className="game-rating"><i className="fas fa-play"></i></div>
      <div className="game-name">Топ 10 лучший сюжет в играх</div>
      <div className="descrip-name">Жанр: Action</div>
      
            </div>
              </Link>
         
       </div>
  
</div>


  
    </div>
   </div>
   </div>
        </div>
         </div>
   

    )
  }
export default Trailer