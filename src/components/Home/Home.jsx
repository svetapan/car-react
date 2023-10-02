import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Hero, Intro, Title, IntroText } from './Home.styled';
import carBlue from '../../UI/images/carBlue.jpg';
import { Container } from 'components/Container/Container';
import CardItem from 'components/CardItem/CardItem';
import { CatalogSection } from 'components/Catalog/Catalog.styled';
// import { setCards, toggleFavorite } from '../../store/store';
import { setCards } from '../../store/setCards';
import { toggleFavorite } from '../../store/slices/cardsSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const [adverts, setAdverts] = useState([]);

  const dispatch = useDispatch();

  const favorites = useSelector(state => state.cards.favorites);

  useEffect(() => {
    dispatch(setCards()).then(data => {
      setAdverts(data.payload.slice(0, 36));
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
            <i>Easy ReantalCAR</i>
          </Title>
        </Container>
      </Hero>
      <Intro>
        <Container>
          <Title>Welcome to the RentalCAR</Title>
          <IntroText>
            This is a convenient application designed for those who search and
            compare car rental offers. Our application facilitates the process
            of choosing and booking a car by providing a wide selection of cars
            of various brands and models.On our website, you can conveniently
            choose a car according to the selected criteria and immediately
            contact the operator to book a car. For ease of selection, you can
            click on the heart at the top right and the car will automatically
            be added to your favorites.
          </IntroText>
          <IntroText>
            To view more detail information, go to the Сatalog page and choose
            the cars you like. To view even more detail information, there is a
            Learn more button on the card, which opens a modal window with the
            selected car. You also can view the selected cars on the Favorites
            page. To delete a card from Favorites, click on the heart at the top
            right, or delete all cards by clicking on the Delete all button on
            the right sidebar.
          </IntroText>
        </Container>
      </Intro>
      <CatalogSection>
        <Container>
          {adverts.length && (
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              breakpoints={{
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {adverts.map(advert => {
                const { id } = advert;
                return (
                  <SwiperSlide
                    key={id}
                    style={{
                      height: 'auto',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <CardItem
                      key={advert.id}
                      advert={advert}
                      favorites={favorites}
                      handleHeartClick={handleHeartClick}
                      moreInfo={false}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Container>
      </CatalogSection>
    </>
  );
};

export default Home;
