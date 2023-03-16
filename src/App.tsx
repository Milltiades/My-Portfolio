import { useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Close from "./components/Close";
import Menu from "./components/Menu";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const ref = useRef<any>();
  const refC = useRef<any>();
  const refP = useRef<any>();
  const refH = useRef<any>();

  const AboutCLick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsClicked(false);
  };
  const ContactCLick = () => {
    refC.current.scrollIntoView({ behavior: "smooth" });
    setIsClicked(false);
  };
  const ProjectsCLick = () => {
    refP?.current.scrollIntoView({ behavior: "smooth" });
    setIsClicked(false);
  };
  const HomeClick = () => {
    refH.current.scrollIntoView({ behavior: "smooth" });
    setIsClicked(false);
  };

  return (
    <div style={{ overflow: isClicked ? "hidden" : "auto" }}>
      <GlobalStyles />
      <Header 
      ref={refH}
      style={{ position: "fixed" }}>
        <LogoDiv>
          <LogoButton onClick={() => {
            refH.current.scrollIntoView({ behavior : "smooth"})
            setIsClicked(false);
          }}>G. </LogoButton>
        </LogoDiv>
        <ButtonMenu onClick={() => setIsClicked(!isClicked)}>
          <div style={{ display: !isClicked ? "flex" : "none" }}>
            <Menu />
          </div>
          <div style={{ display: isClicked ? "flex" : "none" }}>
            <Close />
          </div>
        </ButtonMenu>
        <MenuBar>
          <ButtonLi onClick={HomeClick}>
            <LiDiv>home</LiDiv>
          </ButtonLi>

          <ButtonLi onClick={AboutCLick}>
            <LiDiv>about</LiDiv>
          </ButtonLi>

          <ButtonLi onClick={ProjectsCLick}>
            <LiDiv>projects</LiDiv>
          </ButtonLi>

          <ButtonLi onClick={ContactCLick}>
            <LiDiv>contact</LiDiv>
          </ButtonLi>
        </MenuBar>
      </Header>
      <MenuDivBar
        style={{
          display: isClicked ? "block" : "none",
          position: "fixed",
          marginTop: "50px",
        }}
      >
        <UlDiv>
          <LineDiv />
          <ButtonLi onClick={HomeClick}>
            <LiDiv>home</LiDiv>
          </ButtonLi>
          <LineDiv />
          <ButtonLi onClick={AboutCLick}>
            <LiDiv>about</LiDiv>
          </ButtonLi>
          <LineDiv />
          <ButtonLi>
            <LiDiv onClick={ProjectsCLick}>projects</LiDiv>
          </ButtonLi>
          <LineDiv />
          <ButtonLi onClick={ContactCLick}>
            <LiDiv>contact</LiDiv>
          </ButtonLi>
          <LineDiv />
        </UlDiv>
      </MenuDivBar>

      <MainDiv ref={refH}>
        <MainText>
          <MainTextH1>Hey, I'm Gedeon Kakulia</MainTextH1>
          <MainTextP>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </MainTextP>
          <MainButton
            onClick={() =>
              window.open("https://github.com/Milltiades?tab=repositories")
            }
          >
            <MainButtonP>projects</MainButtonP>
          </MainButton>
        </MainText>
      </MainDiv>
      <AboutDiv ref={ref}>
        <AboutDivH3>About Me</AboutDivH3>
        <UnderDiv />
        <AboutDivP>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </AboutDivP>
        <AboutDivH3>Get to know me!</AboutDivH3>
        <UnderDiv />
        <AboutDivP>
          I'm a Frontend Web Developer building the Front-end of Websites and
          Web Applications that leads to the success of the overall product.
          Check out some of my work in the Projects section. I'm open to Job
          opportunities where I can contribute, learn and grow. If you have a
          good opportunity that matches my skills and experience then don't
          hesitate to contact me.
        </AboutDivP>

        <AboutDivH3>my skills</AboutDivH3>
        <UnderDiv />
        <SkillsDiv>
          <Skill>html</Skill>
          <Skill>css</Skill>
          <Skill>sass</Skill>
          <Skill>javascript</Skill>
          <Skill>typescript</Skill>
          <Skill>react</Skill>
          <Skill>Redux</Skill>
          <Skill>styled components</Skill>
          <Skill>Git</Skill>
          <Skill>GitHub</Skill>
        </SkillsDiv>
      </AboutDiv>
      <ProjectsDiv ref={refP}>
        <AboutDivH3>Projects</AboutDivH3>
        <UnderDiv />
        <ProjectDivP>
          Here you will find some of the personal projects that I created with
          each project containing its own case study. For more please check my
          Github.
        </ProjectDivP>
        <ProDiv>
        <ProDivInside>
          
          <Project>
            <Img src="/assets/converterImg.PNG" alt="" />
            <ImgButton
              onClick={() =>
                window.open("https://youtube-mp3-converter.netlify.app/")
              }
            >
              Youtube Mp3 Converter
            </ImgButton>
          </Project>
          <UnderDiv />
        </ProDivInside>
        <ProDivInside>
          
            <Project>
              <Img src="/assets/interactive-preview.jpg" alt="" />
              <ImgButton
                onClick={() =>
                  window.open("https://interactive-plastic-card.netlify.app/")
                }
              >
                Interactive Card
              </ImgButton>
            </Project>
            <UnderDiv />
          </ProDivInside>
          <ProDivInside>
            <Project>
              <Img src="/assets/previewClock.jpg" alt="" />
              <ImgButton
                onClick={() =>
                  window.open("https://awesome-clock-app.netlify.app/")
                }
              >
                The Clock App
              </ImgButton>
            </Project>
            <UnderDiv />
          </ProDivInside>
          <ProDivInside>
            <Project>
              <Img src="/assets/audpreview.jpg" alt="" />
              <ImgButton
                onClick={() =>
                  window.open("https://audiophile-web-app.netlify.app/")
                }
              >
                Audiophile Ecommerce Website
              </ImgButton>
            </Project>
            <UnderDiv />
          </ProDivInside>
          <ProDivInside>
            <Project>
              <Img src="/assets/preview.jpg" alt="" />
              <ImgButton
                onClick={() =>
                  window.open("https://generate-password-now.netlify.app/")
                }
              >
                The Password Generator
              </ImgButton>
            </Project>
            <UnderDiv />
          </ProDivInside>
          <ProDivInside>
            <Project>
              <Img src="/assets/image1.png" alt="" />
              <ImgButton
                onClick={() =>
                  window.open("https://awesome-movies-app-netlify.netlify.app/")
                }
              >
                The Movies App
              </ImgButton>
            </Project>
            <UnderDiv />
          </ProDivInside>
          <ProDivInside>
            <Project>
              <Img src="/assets/image2.png" alt="" />
              <ImgButton
                onClick={() =>
                  window.open("https://awesomeplanets.netlify.app/")
                }
              >
                The Planets App
              </ImgButton>
            </Project>
            <UnderDiv />
          </ProDivInside>
          <ProDivInside>
            <Project>
              <Img src="/assets/image3.png" alt="" />
              <ImgButton
                onClick={() =>
                  window.open("https://awesome-devfinder.netlify.app/")
                }
              >
                The DevFinder App
              </ImgButton>
            </Project>
            <UnderDiv />
          </ProDivInside>
        </ProDiv>
      </ProjectsDiv>

      <ContactDiv ref={refC}>
        <ContactDivH2>Contact</ContactDivH2>
        <UnderDiv />
        <ContactDivP>
          Feel free to Contact me, let me get you a beautiful website.
        </ContactDivP>
        <ContactDivP>gigakakulia2017@gmail.com</ContactDivP>
        <ContactDivP>+995 568 785 858</ContactDivP>
      </ContactDiv>
      <Footer>
        <FooterH3>gedeon kakulia</FooterH3>
        <UnderDivF />
        <LastDiv>
          <FooterP>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </FooterP>
          <SocialMedia>
            <LiSocial
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100002705300177"
                )
              }
            >
              <img src="/assets/facebook.svg" alt="" />
            </LiSocial>
            <LiSocial
              onClick={() =>
                window.open("https://www.instagram.com/gigakakulia/")
              }
            >
              <img src="/assets/instagram.svg" alt="" />
            </LiSocial>
            <LiSocial
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/gedeon-kakulia-424796239/"
                )
              }
            >
              <img src="/assets/linkedin.svg" alt="" />
            </LiSocial>
            <LiSocial
              onClick={() => window.open("https://github.com/Milltiades")}
            >
              <img src="/assets/github.svg" alt="" />
            </LiSocial>
          </SocialMedia>
        </LastDiv>
        <FooterUnder />
        <FooterPLast>© Copyright 2023. Made by Gedeon Kakulia</FooterPLast>
      </Footer>
    </div>
  );
}

export default App;

const LogoButton = styled.button`
border: none;
background: transparent;
color: white;
font-size: 25px;
cursor: pointer;
transition: all .3s ease;
:hover {
  background: #ff4242;
}
`

const ProDivInside = styled.div`
  @media (width > 1200px) {
    width: 50%;
  }
`;

const ProDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const LastDiv = styled.div`
  @media (width>1200px) {
    display: flex;
    padding: 0 50px;
    text-align: left;
    justify-content: space-between;
  }
`;

const MenuBar = styled.ul`
  display: none;

  @media (width > 1200px) {
    display: flex;
  }
`;
const FooterUnder = styled.div`
  width: 100%;
  background: white;
  height: 1px;
  opacity: 0.5;
  @media (width>1200px) {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;
const SocialMedia = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  margin-bottom: 20px;
  @media (width > 1200px) {
    width: 30%;
    margin: 40px 0;
    width: 30%;
  }
`;
const LiSocial = styled.button`
  border: none;
  color: white;
  list-style: none;
  background: white;
  padding: 2px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: lightgray;
  }
  @media (width> 1200px) {
  }
`;
const Footer = styled.div`
  background: black;
  text-align: center;
  padding: 50px 20px 20px 20px;
  @media (width>1200px) {
    padding: 70px 20px;
    text-align: start;
    padding: 50px 50px 50px 50px;
  }
`;
const FooterH3 = styled.h3`
  color: white;
  margin-bottom: 15px;
  @media (width>1200px) {
    font-size: 30px;
    margin-left: 50px;
  }
`;
const FooterP = styled.p`
  color: white;
  font-size: 15px;
  font-weight: normal;
  margin-top: 15px;
  @media (width>1200px) {
    font-size: 20px;
    width: 50%;
  }
`;
const FooterPLast = styled(FooterP)`
  @media (width>1200px) {
    font-size: 15px;
    width: 50%;
    margin-left: 50px;
  }
`;

const ContactDiv = styled.div`
  padding: 50px 20px;
  background-color: #c8c8c8;
  text-align: center;
  @media (width>1200px) {
    padding: 70px 200px;
  }
`;
const Project = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (width > 1200px) {
  }
`;
const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: -50px -50px 5px -40px darkgray, 50px 50px 5px -40px darkgray;
  @media (width> 1200px) {
    width: 50%;
  }
`;
const ImgButton = styled.button`
  border: none;
  background: transparent;
  font-family: "Bebas Neue", cursive;
  margin-bottom: 10px;
  cursor: pointer;
  margin-top: 15px;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.3s;
  color: black;
  &:hover {
    color: #797878;
  }
  @media (width>1200px) {
    margin-top: 35px;
    font-size: 28px;
    margin-bottom: 15px;
  }
`;
const ProjectsDiv = styled.div`
  padding: 50px 40px;
  background: #e3e3e3;
  text-align: center;
  @media (width>1200px) {
    padding: 70px 200px;
  }
`;

const SkillsDiv = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Skill = styled.div`
  border: none;
  padding: 10px 20px;
  background-color: black;
  color: white;
  margin: 10px;
  border-radius: 5px;
  text-transform: uppercase;
`;

const UnderDiv = styled.div`
  width: 20px;
  height: 5px;
  border-radius: 40px;
  background-color: red;
  margin: 0 auto;
`;
const UnderDivF = styled(UnderDiv)`
  @media (width> 1200px) {
    display: none;
  }
`;
const AboutDiv = styled.div`
  padding: 50px 20px;
  background-color: #f6f4f4;
  text-align: center;
  @media (width>1200px) {
    padding: 70px 200px;
  }
`;
const AboutDivH3 = styled.h3`
  margin-bottom: 15px;
  @media (width>1200px) {
    font-size: 30px;
  }
`;

const ContactDivH2 = styled.h2`
  margin-bottom: 15px;
  @media (width>1200px) {
    font-size: 30px;
  }
`;
const AboutDivP = styled.p`
  font-weight: normal;
  margin-top: 15px;
  margin-bottom: 45px;
  font-size: 14px;
  @media (width>1200px) {
    font-size: 20px;
  }
`;

const ProjectDivP = styled(AboutDivP)`
  @media (width>1200px) {
    font-size: 20px;
    width: 60%;
    margin: 15px auto;
  }
`;
const ContactDivP = styled(AboutDivP)`
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 16px;
`;

const MainDiv = styled.div`
  padding: 150px 20px;
  background-color: #c8c8c8;
  @media (width > 1200px) {
    padding: 250px 30%;
  }
`;
const MainButton = styled.button`
  width: 160px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: darkorange;
  margin: 25px auto 10px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: #ffbc3f;
  }
  @media (width>1200px) {
    margin-top: 35px;
    width: 200px;
    height: 50px;
  }
`;
const MainButtonP = styled.p`
  color: #000000;
  font-family: "Bebas Neue", cursive;
  text-transform: uppercase;
  font-weight: bold;
  @media (width>1200px) {
    font-size: 20px;
  }
`;

const MainText = styled.div`
  padding: 15px 10px;
  border-radius: 10px;
  border: 5px solid black;
  color: black;
  text-align: center;
  @media (width > 1200px) {
    padding: 75px 40px;
  }
`;
const MainTextH1 = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  @media (width > 1200px) {
    font-size: 35px;
  }
`;

const MainTextP = styled.p`
  text-align: center;
  font-weight: lighter;
  @media (width > 1200px) {
    margin-top: 25px;
    font-size: 20px;
  }
`;

const ButtonLi = styled.button`
  border: none;
  background: transparent;
  font-family: "Bebas Neue", cursive;
  font-weight: bold;
  cursor: pointer;
  @media (width > 1200px) {
    margin-left: 15px;
  }
`;
const LineDiv = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
  margin-top: 20px;
`;

const UlDiv = styled.ul`
  text-align: right;
  padding: 15px 10px;
`;

const LiDiv = styled.li`
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-right: 10px;
  list-style: none;
  transition: all 0.3s;
  color: black;
  &:hover {
    color: darkgray;
  }
  @media (width> 1200px) {
    margin-top: 0px;
    margin-right: 15px;
  }
`;

const MenuDivBar = styled.div`
  width: 100%;
  background: #ffffff;
  position: absolute;
  z-index: 100;
  height: 50vh;
`;

const LogoDiv = styled.div`
  padding: 5px 10px;
  background: red;
  transition: all .3s ease;

  color: white;
  @media (width> 1200px) {
    margin-left: 15px;
  }
  :hover {
  background: #ff4242;
}
`;

const ButtonMenu = styled.button`
  background: transparent;
  border-radius: 5px;
  padding: 0 10px;
  cursor: pointer;
  border: none;

  @media (width> 1200px) {
    display: none;
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px 5px 10px;
  background: #ffffff;
  @media (width > 1200px) {
    padding: 10px 10px 10px 10px;
  }
`;

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  :root {
  font-family: 'Bebas Neue', cursive;
  font-weight: bold;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* overflow: hidden; */
  
}
body {
  
  min-width: 320px;
  min-height: 100vh;
  background: #ffffff;
 
}
img.framed {
  box-shadow:
    -50px -50px 0 -40px var(--red),
    50px 50px 0 -40px var(--red);
}

`;
