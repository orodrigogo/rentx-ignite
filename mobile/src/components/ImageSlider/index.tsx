import React, { useState, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';
import FastImage from 'react-native-fast-image'

import { Bullet } from '../Bullet';

import {
  Container,
  ImageIndexes,
  CarImageWrapper,
  CarImage,
} from './styles';

interface Props {
  imagesUrl: {
    id: string;
    photo: string;
  }[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({imagesUrl}: Props){ 
  const [imageIndex, setImageIndex] = useState(0); 

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {
          imagesUrl.map((item, index) => (
            <Bullet 
              key={String(item.id)}
              active={index === imageIndex} 
            />        
          ))
        }
      </ImageIndexes>
      
      <FlatList
        data={imagesUrl}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage 
              source={{ 
                uri: item.photo                 
              }}
              resizeMode="contain"            
            />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
}