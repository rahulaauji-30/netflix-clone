import { useState } from "react";
import Netflix from "./assets/Netflix.svg";
import tv from "./assets/tv.png"
import mobile from "./assets/mobile.jpeg"
import boxshot from "./assets/boxshot.png"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import kids from "./assets/kids.png"
import device from "./assets/device.png"
import Question from "./Question";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function App() {
  const questions = [
    {
      question:"What is Netflix?",
      answer:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad  all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
      question:"How much does Netflix cost?",
      answer:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts."
    },
    {
      question:"Where can I watch?",
      answer:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      question:"How do I cancel?",
      answer:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees  start or stop your account anytime."
    },
    {
      question:"What can I watch on Netflix?",
      answer:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      question:"Is Netflix good for kids?",
      answer:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
  ]
  const [isTrue,setTrue] = useState(true);
  

  return (
    <>
      <div className="component">
        <div className="upperLayer"></div>
        <div className="content">
          <div className="logo">
            <img src={Netflix} alt="Netflix Logo" />
            <button>Sign Up</button>
          </div>
          <div className="titles">
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="user-input">
              <input type="email" placeholder="Email address"/>
              <button>Get Started <ArrowForwardIosIcon/></button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="tv">
        <div className="text">
          <h1>Enjoy on your TV</h1>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className="video">
        <video autoPlay muted loop>
          <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
        </video>
          <img src={tv}/>
        </div>
      </div>
      <hr />
      <div className="download">
        <div className="left">
          <img id="pic" src={mobile}/>
          <div className="download-card">
            <img src={boxshot}/>
            <div className="dc">
              <div className="dct">
              <h4>Stranger Things</h4>
              <p>{isTrue?"Downloading...":"Download"}</p>
              </div>
              <div className="dci">
               <FileDownloadIcon fontSize="large"/>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>
          Download your shows to watch offline
          </h1>
          <p id="descrip">
          Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
      <hr />
      <div className="anytv">
        <div className="anytext">
          <h1>
          Watch everywhere
          </h1>
          <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
        </div>
        <div className="anyvid">
          <video autoPlay muted loop>
          <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"/>
          </video>
          <img src={device}/>
        </div>
      </div>
      <hr />
      <div className="ktv">
        <img src={kids}/>
        <div className="ktext">
          <h1>
          Create profiles for kids
          </h1>
          <p>
          Send children on adventures with their favourite characters in a space made just for them—free with your membership.
          </p>
        </div>
      </div>
      <hr />
      <div className="qtv">
        <h1 >Frequently Asked Questions</h1>
       {
        questions.map((q)=>{
          return  <Question question={q.question} answer={q.answer}/>
        })
       }
       <p style={{fontSize:"1.5rem"}}>Ready to watch? Enter your email to create or restart your membership.</p>
       <div className="user-input">
              <input type="email" placeholder="Email address"/>
              <button>Get Started <ArrowForwardIosIcon/> </button>
            </div>
      </div>
      <hr />
      <div className="footer">
        <p>Clone is developed By </p>
        <h1>Rahul Aauji</h1>
        <a href="https://rahulparihar.tech/">Click Here</a>
      </div>
    </>
  );
}

export default App;
