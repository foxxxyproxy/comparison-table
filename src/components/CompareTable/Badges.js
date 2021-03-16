import styled from "styled-components";

const Img = styled.img`
  max-width: 100%;
  margin-right: 0.5em;
`;
const ImageWrapper = styled.div`
  overflow: hidden;

  &:hover,
  &:focus {
    outline: none;
    opacity: 0.9;
  }
  display: flex;
  flex-direction: row;
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
              width="40"
              height="40"
            />
          );
        })}
      </ImageWrapper>
    </>
  );
};

export default Badges;
