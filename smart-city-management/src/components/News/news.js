import image from './news.jpg';
import Eimage from './e1.jpg';
import Eimage2 from './e2.jpg';
import Eimage3 from './e3.jpg';
import Eimage4 from './e4.jpg';
import Eimage5 from './e5.jpg';
import Eimage6 from './e6.jpg';
import Eimage7 from './e7.jpg';
import Eimage8 from './e8.jpg';
import Eimage9 from './e9.jpg';
import Eimage10 from './e10.jpg';
import Eimage11 from './e11.jpg';
import Eimage12 from './e12.jpg';

function Weather() {
    
  return (<div>
    <form className="heading2">
            <div className="bg-color">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <p className="text-primary" href="#">NEWS</p>
       </nav></div>
       <div><img className="newsimg" src={image} /></div>
       
       <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Education</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">General</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Sports</a>
  </li>
</ul>
<br/>

  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">  
  <div class="flex">
              <div class="box">
              <img  src={Eimage} />
              <div><h6>The 2022 U.S. News Best Online Programs rankings edition saw a much larger than usual increase in participating programs 
                – both at the bachelor's level and across its seven master's level disciplines.</h6> </div>
                </div>
                <div class="box">
                <img  src={Eimage2} />
              <div><h6>The 2022 U.S. News Best Online Programs rankings edition saw a much larger than usual increase in participating programs 
                – both at the bachelor's level and across its seven master's level disciplines.In this interactive session, U.S. News analysts will discuss the rise of distance learning and their implications for schools 
                already in the Best Online Programs rankings.</h6> </div>
                </div>
                <div class="box">
                <img  src={Eimage3} />
              <div><h6>Schools and colleges have put contingency plans in place to help students sitting exams during this week's national rail strike.
               Many of the 2,500 students at Brockenhurst College in Hampshire use the train to get to class.</h6> </div>
                </div>
                <div class="box">
                <img  src={Eimage4} />
              <div><h6>Higher-tariff universities, including those in the research-intensive Russell Group, have tightened up their offers, with the proportion of 
                applications that result in an offer down from 60.5% in 2021 to 55.1% this summer.</h6> </div>
              
              </div>
                </div>
               </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> 
  <div class="flex1">
              <div class="box">
              <img  src={Eimage5} />
              <div><h6>Declaring monkeypox to be a global emergency would mean the U.N. health agency considers the outbreak to be an "extraordinary event" and that 
                the disease is at risk of spreading across even more borders, possibly requiring a global response.</h6> </div>
                </div>
                <div class="box">
                <img  src={Eimage6} />
              <div><h6>Petrol rates in India are revised on a daily basis. Prices are revised at 06:00 a.m. every day. This makes sure that even a minute’s
                 variation in global oil prices can be transmitted to fuel users and dealers. 
                Price of fuel includes excise duty, value added tax (VAT), and dealer commission. </h6> </div>
                </div>
                <div class="box">
                <img  src={Eimage7} />
              <div><h6>Professional network LinkedIn has announced that it will be investing $500,000 (Rs 3.88 crore) in a three-year, regional partnership with UN Women – the United Nations entity dedicated to gender equality –
                 to advance women’s economic empowerment.
</h6> </div>
                </div>
                <div class="box">
                <img  src={Eimage8} />
              <div><h6>Effective from FY 2020-21, an individual has the option to continue with the existing/old income tax regime and avail existing tax deductions and exemptions, or choose the new tax 
                regime and forgo 70 tax deductions and exemptions such as sections 80C, 80D, tax exemption on HRA, LTA etc.
</h6> </div>
              </div>
                </div></div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><div class="flex2">
              <div class="box">
              <img  src={Eimage9} />
              <div><h6>Tom Blundell and Daryl Mitchell seized the opportunity and rescued New Zealand from a tricky position.
                 New Zealand were in a spot of bother when these two came out but their unbeaten partnership of 102 helped the nerves settle in the away dressing room. 
                Mitchell (78*) and Blundell (45*) led the batting effort on Day 1 at Headingley.</h6> </div>
                </div>
                <div class="box">
                <img  src={Eimage10} />
              <div><h6>Fernandes was filmed having an expletive-riddled conversation with Manchester United teammates Fred and full-back Alex Telles were filming outside the club’s training facilities.</h6> </div>
                </div>
                <div class="box">
                <img  src={Eimage11} />
              <div><h6>"The rescheduled fifth Test between India and England is supposed to be held in Birmingham from July India are likely to retain the squad for the two-match Irela 
        

</h6> </div>
                </div>
                <div class="box">
              <img  src={Eimage12} />
              <div><h6>Rory McIlroy described Brooks Koepka as deceitful after the four-times major winner defected to the breakaway LIV Golf Invitational Series on Wednesday, 
                then urged the PGA and European Tours to join forces against the Saudi-backed venture.</h6> </div>
                </div>
                
           
                </div></div>
  </form>
  </div>
)
}

export default Weather;