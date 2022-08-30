import React from 'react';
import { StatusBar } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize'
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { 
  Container,
  Header,
  HeaderContent,
  TotalCars,

} from './styles';

export function Home(){
  const carData = {
    brand: 'Audi',
    name: 'R$ 5 coupé',
    rent: {
    period: 'Ao dia',
    price: 120,
    },
    thumbnail: 'https://www.pngmart.com/files/10/White-Audi-PNG-Transparent-Image.png',
  }
  return (
    <Container>
      <StatusBar 
        barStyle="light-content" //tarja das notificações no header
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>

        <Logo 
          width={RFValue(108)}
          height={RFValue(12)}
        />
        <TotalCars>
          Total de 12 carros
        </TotalCars>
      </HeaderContent>

      </Header>
      <Car data={carData}/>

    </Container>
);
}

