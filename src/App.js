
import './App.css';
import {Facility,Srv} from './component/facility';
import Cube from './component/cube';
import {About,AboutText} from './component/about';
function App() {

  function menu(){
    document.getElementById("header_list").style.top==="-130px"?document.getElementById("header_list").style.top="100px"
    :document.getElementById("header_list").style.top="-130px"
  }



  return (
    <>
    <div className="main">
      <div id="header">
        <nav className="innerid">
          <b><span>HOST</span>INGER</b>
        </nav>
        <div id="login"><b id="log">Login</b></div>
        <p><input id="lan" /><button>Search</button></p>

        <b id="menu" onClick={()=>{menu()}}>=</b>
        <ul id="header_list">
          <li>Hosting</li>
          <li>VPS</li>
          <li>Email</li>
          <li>Domain</li>
        </ul>
      </div>

      <div className="textheader">
        <div id="text">
          <h1>
            With The Use Of Hostinger Your<br />
            Become <b>Popular</b>
          </h1>
          <br /><br />
          <div id="time"><span>149.00</span>/mo</div>
          <br /><br /><br /><br />
          <p>
            Get things moving with a free domain, lifetime SSL, and DDoS
            <br />protection included with a four-year subscription
          </p>
          <br /><br />
          <button>Get Started</button>
        </div>
        <div id="img">
          <img src={"https://cubemedia.uk/wp-content/uploads/2022/03/affordable-web-hosting.png"} alt="" id="main_img" />
        </div>
      </div>
      <br />
      <div className="circle"></div>
      <br/>
      <div id="all_in">
        <center>
          <h1 style={{fontSize:"5rem", color: "aqua"}}>All-In-One Web Hosting</h1>
          <br />
          <p style={{fontSize: "2rem"}}>
            We prepared the best web hosting plan for you to start. You will<br />
            be able to adjust plans as you go - our custom-built <br />algorithm
            will provide suggestions based on your usage.
          </p>

          <div className="facility">
            
            <Facility data={{"1":"Unmetered traffic","2":"100 Websites","3":"100 GB SSD Storage","4":"Free Weekly Backups"}}/>
            <Facility data={{"1":"100 Parked domains","2":"Full DNS Editor","3":"WordPress multisite","4":"1 GB email storage"}}/>
            <Facility data={{"1":"50 email aliases","2":"SPAM filter","3":"Custom Email Filters","4":"FAQ Database "}}/>
            <Facility data={{"1":"SSH Access","2":"Unlimited Cronjobs","3":"SSH Access","4":"3 GB database size"}}/>

          </div>

          <div className='triangle'>
            <img src={"https://www.transparentpng.com/thumb/triangle/nSrvSs-orange-triangle-clipart-transparent.png"} alt={""} id="img2"/>
          </div><br/>

          <div className='services'>
            <h1>Our services include</h1>
            <div className='mainservice'>
            <div className="service">
                <Srv src="https://img.freepik.com/premium-vector/ssl-encryption-label-secure-banner-vector-illustration_123447-2725.jpg?w=2000"
                      text="SSL certificate is Free"/>
                <Srv src="https://www.2440media.com/sites/default/files/assets/images/blog/The%20Best%20Software%20For%20PHP%20Coding.jpg"
                      text="PHP Speed Boost"/>
                <Srv  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1646196886843-After%20Hours%20Customer%20Support.png"
                    text="24/7/365 Tech Support"/>
                <Srv src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUysGdpfD2sJOs5y1EyrFk4-8Sp6tZZjbEw&usqp=CAU"
                    text="Access Management"/>
            </div>
            <div className="service">
                <Srv src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcNV8DKxpneaYmhkX86JBwdXGh5k09p3aPAG-lPnBJwEepWoqpUtEUSpaVj34E0t9LU8&usqp=CAU"
                    text="Automated backups"/>
                <Srv  src="https://www.wigzo.com/blog/wp-content/uploads/2021/04/Ultimate-Ecommerce-Optimization-Guide.jpg"
                    text="eCommerce Optimization"/>
                <Srv  src="https://scdn1.plesk.com/wp-content/uploads/2018/04/24154023/sm_blog_post-server-ddos-protection-.png"
                    text="DDoS Protection"/>
                <Srv  src="https://www.acecloudhosting.com/blog/wp-content/uploads/2018/04/cloud-uptime-guarantee-nines.jpg"
                    text="99.9% Uptime Guarantee"/>
            </div>
            </div>

          </div>

          <div id='self-tri'></div>
          <h1 style={{fontSize:"10rem",marginTop:"20rem",color:"#38444D"}}>About</h1>

          <div className='about'>
            <AboutText
                 head="Easy to set up"
                 headline="Getting your website live is as simple as a click of a button. Everything you need - provided in a clear way."/>
              <About src="https://assets.hostinger.com/images/homepage2020/easy-to-setup-mobile-5c868e689f.jpg"
                   />
          </div>

          <div className='about'>
            <About src="https://assets.hostinger.com/images/homepage2020/simply-fast-websites-mobile-913c582753.jpg"
                   />
            <AboutText  head="Lightning-fast websites"
                    headline="Website speed can slow or grow your business. Delight your visitors with a fast-loading and optimized website."/>
          </div>

          <div className='about'>
            <AboutText  head="WordPress made easy"
                  headline=" The backend is powered by LiteSpeed caching and advanced optimization to ensure your websites are fast, reliable and secure."/>
            <About src="https://assets.hostinger.com/images/homepage2020/wordpress-made-easy-mobile-5f9e3f7598.jpg"
                 />
          </div>

          <div id='loginpage'>
              <Cube/>
          </div>

        </center>
      </div>
    </div>
    </>
  );
}

export default App;
