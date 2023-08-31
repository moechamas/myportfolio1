import styled from 'styled-components';
import { keyframes } from 'styled-components';

const dropIn = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0.5;
  }
  70% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const shine = keyframes`
  0% {
    background-position: -200% 0;
  }
  50% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const AboutMeContainer = styled.div`
position: relative; 
  padding: 4rem 5%;
  background: url('/stars1.png') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  align-items: center;
`;

const HeaderStyles = `
  font-size: 3rem;
  margin-bottom: 4rem;
  color: white;
  position: relative;

  // ::after pseudo-element to represent the underline
  ::after {
    content: '';
    display: block;
    width: 350px;
    height: 2px;
    background-color: white;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const AboutMeHeader = styled.h1`
  ${HeaderStyles}
  margin-right: 15%; 
  @media (max-width: 768px) { 
    margin-right: 5%; 
  }
`;

const SkillsHeader = styled.h1`
  ${HeaderStyles}
  margin-left: 15%; 
  @media (max-width: 768px) { 
    display: none; 
  }

`;

const AboutMeText = styled.p`
  font-size: 1.2rem; 
  line-height: 1.6; 
  max-width: 650px;
  margin: 0 auto 2rem auto;
  color: white;

  @media (max-width: 768px) { 
    font-size: 1rem; 
    line-height: 1.4;
    max-width: 90%;
  }
`;

const HeadersWrapper = styled.div`
  display: flex;
  justify-content: space-between;  
  width: 100%; 
  @media (max-width: 768px) { 
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

`;

const StyledInfoBox = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  align-self: flex-start;
  margin-top: -620px;
  border-radius: 16px;
  width: 45%;
  height: auto;
  border: 5px solid white;  
  @media (max-width: 768px) { 
    width: 95%; 
    padding: 1.5rem;
    margin-top: -680px;
  }

`;

const TechLogos = styled.div`
  position: absolute;
  top: 210px;
  left: 19%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1.1rem; 
  padding: 1.5rem;
  
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)); 
  border: 5px solid white; 
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);  

  animation: ${dropIn} 0.8s forwards;

  @media (max-width: 768px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: -5px; 
    left: -5px; 
    right: -5px; 
    bottom: -5px; 
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
    border-radius: inherit;
    z-index: 0;
    animation: ${shine} 3s infinite;
  }

  & > ion-icon {
    position: relative;
    font-size: 4.35rem;
    color: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.4s ease;  
    padding: 15px;
    border-radius: 50%;
    
    &:hover {
      border-color: #ffdd00; 
      box-shadow: 0 0 30px 10px rgba(255, 221, 0, 0.8); 
    }
  
  }
`;

const RightAlignedBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const AboutMe = () => {
  return (
    <AboutMeContainer id="aboutMeSection">
      <HeadersWrapper>
        <SkillsHeader>Skills</SkillsHeader>
        <AboutMeHeader>About Me</AboutMeHeader>
      </HeadersWrapper>
      <RightAlignedBoxWrapper>
        <StyledInfoBox>
          <AboutMeText>
            I'm a dedicated computer scientist specializing in web development with proficiency in HTML, CSS, JavaScript, and React. My passion for the digital realm doesn't stop at coding; I'm deeply intrigued by the intricacies of the digital world and the stories told in the realm of anime. Outside of my digital pursuits, I find solace on the football field and in the dojo, mastering the arts of jujutsu and muay thai. Above all, my goal is to craft efficient websites that offer outstanding user experiences."
          </AboutMeText>
          <TechLogos>
            <ion-icon name="logo-react"></ion-icon>
            <ion-icon name="logo-html5"></ion-icon>
            <ion-icon name="logo-css3"></ion-icon>
            <ion-icon name="logo-javascript"></ion-icon>
            <ion-icon name="logo-nodejs"></ion-icon>
          </TechLogos>
        </StyledInfoBox>
      </RightAlignedBoxWrapper>
    </AboutMeContainer>
  );
}

export default AboutMe;