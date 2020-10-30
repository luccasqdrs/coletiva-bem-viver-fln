import { variables } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';

const TextRoot = styled.div`
  padding-left: 10%;
  padding-right: 15%;
  display: grid;
  background-color: ${variables.colors.background};
  grid-template-columns: 1fr;
  max-width: 100%;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 4.5fr;
    grid-column-gap: 5em;
  }
`;

export const AboutText: React.FC = () => (
  <TextRoot>
    <h1>
      Um mandato genuinamente coletivo, com convergência das lutas da cidade, do
      campo e da floresta, na construção do Programa do Bem Viver.
    </h1>
    <div>
      <p>
        Movidas pelo desejo de construir a verdadeira transformação social e
        romper o atual sistema político excludente e injusto com questões
        populares e feministas, cinco mulheres chamaram para si o desafio da
        mudança. Elas vão concorrer em regime de co-vereança para uma das vagas
        na câmara municipal de Florianópolis/SC, pelo Partido Socialismo e
        Liberdade, o PSOL.
      </p>
      <p>
        <b>Cíntia, Joziléia, Lívia, Marina e Mayne</b> possuem perfis diferentes
        e comple- mentares e juntas vão assumir as tarefas normais de um
        mandato, acredi- tando que a renovação virá da própria diversidade do
        grupo, que tem professora, estudante, liderança cultural, economista,
        bióloga, liderança indígena e gestora pública. É muita riqueza de
        representação que pode ser usada em benefício da comunidade.
      </p>
      <p>
        É fato que o posicionamento feminista deve estar presente nos debates do
        dia a dia. Como é possível que leis municipais que afetam as mulheres
        direta e indiretamente sejam debatidas de maneira justa no legislativo
        se hoje só há UMA mulher entre as vinte e três vagas da Câmara
        Municipal? Isso, numa realidade em que as mulheres somam 52% da
        população da cidade, é re- presentação social? Não. Mas é exatamente o
        que acontece hoje, e o que a Coletiva Bem Viver quer mudar.
      </p>
      <p>
        Além das tarefas, um estatuto interno reconhecido pela Casa Legislativa
        vai determinar as regras de funcionamento da mandata, como a
        participação popular e a divisão de um salário em cinco, o que não
        representa novos gastos. O modelo não é novo, em 2018 São Paulo e
        Pernambuco elegeram mandatos coletivos para pleitos estaduais. Agora,
        chegou a vez de Floripa contar com a potência de uma construção política
        que amplia o alcance da discussão e a representatividade popular nos
        projetos de lei debatidos no legislativo municipal.
      </p>
      <p>
        Nesse sentido, algumas pautas coletivas já vem sendo trabalhadas pelo
        grupo como a viabilização de espaços para crianças cujas famílias preci-
        sem trabalhar em horário noturno; o combate à especulação imobiliária e
        a prevenção da construção de moradias em áreas de riscos; a valorização
        da educação patrimonial de origem afro-brasileira e indígena nas escolas
        e espaços públicos; o investimento em transporte coletivo gratuito,
        eletrificado e descarbonizado, com integração de modais e incentivo às
        ciclovias; a par- ticipação popular que garanta paridade
        governo-sociedade civil nos órgãos colegiados municipais; e a criação de
        territórios comunitários que funcionem no contraturno escolar para
        prática esportiva, educação am- biental, atividades culturais e cozinha
        comunitária.
      </p>
      <p>
        Fortemente pautada no conceito da Sociedade do Bem Viver, nas lutas do
        campo, da cidade, da floresta e das águas a Coletiva Bem Viver quer
        levar para a Câmara um novo jeito de construir a cidade a partir da
        equidade de representação (raça, classe, sexualidade, credo, gênero e
        identidade de gênero e de capacidades), da participação popular e da
        gestão compro- metida com o bem comum,{` `}
        <b>onde o povo manda e o governo obedece.</b>
      </p>
    </div>
  </TextRoot>
);
