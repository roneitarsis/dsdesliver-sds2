import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as MainImage} from './main.svg';

function Home(){

    return(

        <div className="home-container">
               <div className="home-content">
                   <div className="home-actions">
                     <h1 className="home-title">
                        Faça seu pedido <br /> que entregam <br />pra você !!!!   
                     </h1>  
                     <h3 className="home-subtit">
                     Escolha seu pedido e em poucos minutos<br />
                     levaremos na sua porta   </h3> 

                     <a href="orders" className="home-btn-order">
                        Fazer pedido  
                      </a>  

                   </div> 
                   <div className="home-image">
                       <MainImage />
                    </div>                  
              </div> 
        </div>
    )

}



export default Home;