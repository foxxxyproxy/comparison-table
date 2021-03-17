import styled from "styled-components";

const Img = styled.img`
  max-width: 100%;
  margin-right: 0.2em;
  margin-bottom: 0.2em;
`;
const ImageWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Badges = (props) => {
  const { linksList } = props;
  const links = linksList.split("|");

  if (!links) {
    return null;
  }
  return (
    <>
      <ImageWrapper>
        {links.map((link, index) => {
          return (
            <Img
              key={`Badge${index}`}
              src={link}
              alt="Keurmerk"
              width="35"
              height="35"
            />
          );
        })}
      </ImageWrapper>
    </>
  );
};

export default Badges;
