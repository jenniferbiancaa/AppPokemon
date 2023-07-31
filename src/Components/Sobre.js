import React from 'react';
import styled from 'styled-components';
import imagem from "./jenni.jpeg"

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const AuthorImage = styled.img`
  max-width: 200px;
  border-radius: 10%;
  margin-right: 20px;
`;

const AboutText = styled.div`
  flex: 1;
`;

const About = () => {
  return (
    <AboutContainer>
      <AuthorImage
        src={imagem}
        alt="Jennifer Bianca"
      />
      <AboutText>
        <h1>Sobre o Site</h1>
        <p>
          Este site foi desenvolvido em React JS pela aluna Jennifer Bianca de S. Santos,
          acadêmica em Análise e Desenvolvimento de Sistemas. O site utiliza a API Pokemon para
          exibir informações sobre os pokemons.
        </p>
        <p>
          Jennifer Bianca é uma entusiasta da tecnologia, apaixonada por desenvolvimento web e
          entusiasta de tudo relacionado a pokemons. Ela espera que este site possa ajudar os
          treinadores a conhecerem melhor seus pokemons favoritos.
        </p>
      </AboutText>
    </AboutContainer>
  );
};

export default About;
