import { variables } from '@/styles/variables';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Bio } from '../Bio';

const BioRoot = styled.div`
  padding-left: 10%;
  padding-right: 15%;
  background-color: ${variables.colors.header};
  max-width: 100%;
`;

export const AboutBio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      cintia: file(relativePath: { eq: "cintia.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jozi: file(relativePath: { eq: "jozi.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      livia: file(relativePath: { eq: "livia.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marina: file(relativePath: { eq: "marina.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mayne: file(relativePath: { eq: "mayne.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BioRoot>
      <Bio
        name="Cíntia Mendonça"
        bio="mãe, gestora, defensora dos direitos humanos e da natureza, militante
        ecossocialista e feminista. Mestra em Administração Pública. Se dedica nas
        lutas da cidade pelo Fórum Intersetorial de Políticas Públicas de
        Florianópolis, nos Conselhos de Assistência Social e de defesa dos direitos
        das crianças e dos adolescentes, conectando com as lutas do Campo e da
        floresta na construção das Comunidades Agroecológicas do Bem Viver e
        como conselheira do Conselho de Segurança Alimentar e Nutricional do
        Estado de Santa Catarina. Sonha e luta no seu cotidiano para construir uma
        sociedade livre de exploração, de todas as opressões e pelo fim da
        destruição do planeta."
        imageFluid={data.cintia.childImageSharp.fluid}
        side="left"
      />
      <Bio
        name="Joziléia Daniza Kaingang"
        bio="liderança indígena, professora, antropóloga, ativista ambiental. Lutas contra
        as desigualdades raciais e sociais, pela implementação efetiva das ações
        afirmativas e cotas nas universidade públicas. Atua na construção da
        educação escolar transdisciplinar, pautando o afeto na inclusão de todos no
        ensino fundamental, médio e superior. Tem compromisso com a causa
        indígena, suas pautas e movimento somando as lutas feministas, de
        combate ao racismo e pela democracia. Participa da rede global de
        Mulheres Indígenas trabalhando pela Cura da Terra. Engajada no movimento
        de mudança, pela sociedade justa e inclusiva na constante construção de
        uma sociedade do Bem Viver."
        imageFluid={data.jozi.childImageSharp.fluid}
        side="right"
      />
      <Bio
        name="Lívia Guilardi"
        bio="mãe, artesã, economista, agente cultural, atuante da defesa dos direitos
        humanos e da natureza, militante pelo bem viver, ecossocialista,
        anti-racismo e feminista econômicas. Se dedica à construção econômica
        solidária, em projetos de desenvolvimento territorial e local, com atuação
        em coletivos de fomento em arte e cultura. Atualmente é militante no
        Subverta em SC, colaborando na construção da Sociedade do Bem Viver,
        em ações que combatem a exploração, as diferentes formas de opressão e
        a destruição do planeta."
        imageFluid={data.livia.childImageSharp.fluid}
        side="left"
      />
      <Bio
        name="Marina Caixeta"
        bio="estudante, professora, feminista e ecossocialista. Desde o início da jornada
        universitária é ativa no movimento estudantil. Sempre engajada nas lutas
        feministas, antirracistas e anti-LGBT-fóbicas, filiou-se ao PSOL movida pela
        necessidade de resistir ao retrocesso que estamos vivendo mais
        recentemente, encontrando no Subverta o espaço revolucionário de
        militância necessário para os enfrentamentos do nosso tempo."
        imageFluid={data.marina.childImageSharp.fluid}
        side="right"
      />
      <Bio
        name="Mayne Goes"
        bio="estudante, vegana, feminista negra e ecossocialista. Iniciando sua
        militância no Subverta, onde encontrou um espaço revolucionário para
        lutar coletivamente contra todas as opressões e a destruição do planeta.
        Dedicada às lutas antirracistas, feministas e de libertação animal. Sonha
        com o dia em que todos nós vamos poder conviver na Sociedade do
        Bem Viver."
        imageFluid={data.mayne.childImageSharp.fluid}
        side="left"
      />
    </BioRoot>
  );
};
