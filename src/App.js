import { Container } from '@mui/material';
import './App.css';
import TabsContent from './content/TabsContent';
import CardsContent from './content/CardsContent';

function App() {
  return (
    <>
      <Container >
        <TabsContent />
      </Container>

      <Container fixed sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        <CardsContent
          foto="https://cdn.shopify.com/s/files/1/0759/1515/products/R22PU-Batman_02_400x.jpg?v=1625789089"
          nama="Dark Knight"
          rating="4.5"
          price="7.800.000"
        />
        <CardsContent
          foto="https://cdn.shopify.com/s/files/1/0759/1515/products/R22PU-CP2077_02_400x.jpg?v=1625789221"
          nama="Cyberpunk 2077"
          rating="5"
          price="9.000.000"
        />
        <CardsContent
          foto="https://cdn.shopify.com/s/files/1/0759/1515/products/R22PU-Ahri_02_400x.jpg?v=1625789039"
          nama="Ahri"
          rating="4.5"
          price="9.250.000"
        />
        <CardsContent
          foto="https://cdn.shopify.com/s/files/1/0759/1515/products/XL22PU-Black_02_400x.jpg?v=1625790095"
          nama="TITAN Evo - BLACK"
          rating="4.9"
          price="7.800.000"
        />
        <CardsContent
          foto="https://cdn.shopify.com/s/files/1/0759/1515/products/R22PU-Superman-02_400x.jpg?v=1633342366"
          nama="Superman"
          rating="4.5"
          price="7.800.000"
        />
        <CardsContent
          foto="https://cdn.shopify.com/s/files/1/0759/1515/products/R22SW-ArcticWht_02_400x.jpg?v=1625789507"
          nama="Arctic White"
          rating="5"
          price="8.000.000"
        />
      </Container>
    </>

  );
}

export default App;
