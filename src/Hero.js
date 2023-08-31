import styled from 'styled-components';
import { Link } from 'react-scroll';
import { keyframes } from 'styled-components';
import React, { useState, useEffect } from 'react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const typewriter = keyframes`
  from {
    max-width: 0;
  }
  to {
    max-width: 100%;
  }
`;



const InitializingText = styled.h1`
  font-size: 2.5rem;
  font-family: 'Fira Code', monospace;
  color: lime;
  margin-top: -40px;
  margin-left: 40px;  
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: .15em solid lime;
  animation: ${typewriter} 4s steps(16) forwards, ${fadeIn} 0.5s 8s forwards;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    margin-top: -10px;
    margin-left: 50px;
  }

`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &.active {
    transform: translateX(0);
  }

  @media only screen and (max-width: 768px) {
    width: 150px;
  }

`;

const SidebarButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    top: 5px;
    left: 5px;
  }

`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    top: 5px;
    left: 5px;
  }

`;

const SidebarMenuItem = styled.li`
  margin: 15px 0;

  a {
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #007BFF;
      
    }
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ProfileImage = styled.img`
  width: 120px;  
  height: 120px;

  border-radius: 50%;
  position: absolute; 
  top: -80px;  
  right: -80px; 
  display: block;  
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  border: 3px solid white;  

  &.visible {
    opacity: 1;
  }
`;

const HeroContainer = styled.div`
  font-family: 'Fira Code', monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/stars1.png') no-repeat center center; 
  /* background-color: darkgrey; */
  background-size: cover;
  

  @media only screen and (max-width: 768px) {
    font-size: 0.5rem;
    
  }
`;
export const InfoBox = styled.div`
  position: relative; 
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1.5rem; 
  border-radius: 40px 60px 30px 50px; 
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid black; 
  max-width: 500px;  
  width: 80%;  
  min-height: 200px; 
  animation: ${fadeIn} 1.5s ease-in-out forwards;
  @media only screen and (max-width: 768px) {
    padding: 1rem;
    width: 40%;
    border-radius: 20px 30px 15px 25px;
    max-width: 60%;
  }
`;



const NameText = styled.h1`
  font-weight: bold;
  margin-bottom: 0.2rem;
  font-size: 27px;
  margin-top: -10px;
  margin-left: 40px;  
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typewriter} 5s steps(30) forwards;
  border-right: .15em solid lime;
  color: lime;
  width: 0; 
  font-family: 'Fira Code', monospace;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    margin-left: 10px;
  }

`;

const Description = styled.p`
  font-size: 1.5rem;
  color: white;
  margin-top: 80px; 

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;



const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <SidebarButton onClick={() => setIsActive(!isActive)}>
        ☰
      </SidebarButton>
      <SidebarContainer className={isActive ? 'active' : ''}>
        <SidebarMenu>
            <SidebarMenuItem>
        <Link to="heroSection" smooth={true} duration={500} onClick={() => setIsActive(false)}>
          Home
        </Link>
        </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="aboutMeSection" smooth={true} duration={500} onClick={() => setIsActive(false)}>
              About Me
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="projectsSection" smooth={true} duration={500} onClick={() => setIsActive(false)}>
              Projects
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="contactMeSection" smooth={true} duration={500} onClick={() => setIsActive(false)}>
              Contact Me
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContainer>
    </>
  );
};

const SuccessText = styled(InitializingText)`
  color: lime;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [showProfile, setShowProfile] = useState(false); 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
      setSuccess(true);  
    }, 5000); 

    setTimeout(() => {
      setSuccess(false); 
      setShowProfile(true);
    }, 7000); 
  }, []);

  return (
    <HeroContainer id="heroSection">
      <Sidebar />
      <InfoBox>
        {loading ? (
          <InitializingText>INITIALIZING...</InitializingText>
        ) : success ? (
          <SuccessText>SUCCESS</SuccessText>
        ) : (
          <>
            {showProfile && <ProfileImage src="/picforportfolio.jpg" alt="mypic" className="visible" />}
            <Description>
              Hello, my name is Mohamad Chamas
              I am an aspiring Full stack developer who is specializing in JavaScript, React, Node.js, and MongoDB. 
            </Description>
          </>
        )}
      </InfoBox>
    </HeroContainer>
  );
};

export default Hero;
