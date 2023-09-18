import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Hero, Intro, Title, IntroText } from './Home.styled';
import carBlue from '../../UI/images/carBlue.jpg';
import { Container } from 'components/Container/Container';
import CardItem from 'components/CardItem/CardItem';
import { CatalogSection, CardsGroup } from 'components/Catalog/Catalog.styled';
import { setCards, toggleFavorite } from '../../store/store';

const Home = () => {
  const [adverts, setAdverts] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.cards.favorites);

  useEffect(() => {
    dispatch(setCards()).then(data => {
      setAdverts(data.payload.slice(0, 4));
    });
  }, [dispatch]);

  function getCardById(id) {
    return adverts.find(card => card.id === id);
  }
  const handleHeartClick = id => {
    const index = favorites.indexOf(id);

    const favCard = getCardById(id);

    if (index === -1) {
      dispatch(toggleFavorite(favCard));
    } else {
      dispatch(toggleFavorite(favCard));
    }
  };

  return (
    <>
      <Hero style={{ backgroundImage: ` url(${carBlue})` }}>
        <Container>
          <Title $size={'56px'}>
            <i>Easy Reantal Car</i>
          </Title>
        </Container>
      </Hero>
      <Intro>
        <Container>
          <Title>Welcome to RentalCAR</Title>
          <IntroText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis quo adipisci dignissimos odio, voluptas consectetur
            asperiores eum deleniti nemo nesciunt?
          </IntroText>
        </Container>
      </Intro>
      <CatalogSection>
        <Container>
          <CardsGroup>
            {adverts.map(advert => {
              return (
                <CardItem
                  key={advert.id}
                  advert={advert}
                  favorites={favorites}
                  handleHeartClick={handleHeartClick}
                />
              );
            })}
          </CardsGroup>
        </Container>
      </CatalogSection>
    </>
  );
};

export default Home;
