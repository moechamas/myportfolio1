import React from 'react';
import styled from 'styled-components';  

// Create the styled component for scroll control.
const ProjectsContainer = styled.section`
  overflow-y: auto;
  max-height: 100vh;  
`;


// Project data
const projects = [
  {
    title: 'JS Consolidation',
    description: 'Simple Menu',
    url: 'https://github.com/moechamas/js-consolidation',
    imageUrl: '/grubhub.png' 
  },
  {
    title: 'Nyan Cat JS Project',
    description: 'Simple Game',
    url: 'https://github.com/moechamas/project-js-nyan-cat',
    imageUrl: '/game.png' 
  },
  {
    title: 'React Effects',
    description: 'Cookie Game',
    url: 'https://github.com/moechamas/react-effects',
    imageUrl: 'cookieclicker.png' 
  },
  {
    title: "Rony's Pizzeria",
    description: "Order a pizza",
    url: 'https://github.com/moechamas/react-fetch',
    imageUrl: 'ronypizza.png'
  }
];



const styles = {
  container: {
    color: '#fff',
    backgroundImage: 'url(/stars1.png)',  
    padding: '40px 0',  
    maxWidth: '1500px',  
    margin: '0 auto',  
  },
  projectsRow: {
    marginTop: '50px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',  
    gridGap: '10px 3px',  
    width: '100%',
  },
  header: {
    textAlign: 'center',
    fontSize: '2.7rem'
  },
  projectItem: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '90px',
    boxSizing: 'border-box',
    overflow: 'hidden',
  } ,
  
  details: {
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    width: '320px', 
    height: '220px', 
    transform: 'translate(-50%, -50%)', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)', 
    opacity: '0', 
    transition: 'opacity 0.3s ease',
  },
  detailsHover: {
    opacity: '1', 
  },
  projectImage: {
    width: '340px',
    height: '240px',
    marginRight: '30px',
    border: '6px solid white',
    transition: 'transform 0.3s ease', 
  },
  projectImageHover: {
    transform: 'scale(1.1)', 
  },
  link: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '5px 10px',
    border: '1px solid #333',
    textDecoration: 'none',
    color: '#fff', 
    borderRadius: '5px',
  },
  linkHover: {
    backgroundColor: '#333',
    color: '#fff',
  },
};


const Projects = () => {
  return (
    <ProjectsContainer style={styles.container} id="projectsSection">  
      <h2 style={styles.header}>My Projects</h2>
      <div style={styles.projectsRow}>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </ProjectsContainer>
  );
};


class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  toggleHover = () => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered,
    }));
  };

  render() {
    const { project } = this.props;
    return (
      <div style={styles.projectItem}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          style={{
            ...styles.projectImage,
            ...(this.state.isHovered ? styles.projectImageHover : {})
          }}
        />
        <div 
          style={{
            ...styles.details,
            ...(this.state.isHovered ? styles.detailsHover : {})
          }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.link}
          >
            View Project
          </a>
        </div>
      </div>
    );
  }
}

export default Projects;