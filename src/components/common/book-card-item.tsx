import { Image } from 'expo-image';
import React from 'react';
import { Text, View } from 'react-native';
import { ImageAssets } from '@assets';
import { Layouts } from '@components';
import { DataModels } from '@models';
import { COLORS } from '@themes';

interface BookCardItemProps {
  bookCardItem: DataModels.IBook;
  isLastItem?: boolean;
}

const BookCardItem: React.FC<BookCardItemProps> = ({
  bookCardItem,
  isLastItem,
}) => {
  return (
    <React.Fragment key={bookCardItem.id}>
      <View
        style={{
          marginRight: isLastItem ? 0 : 12,
          width: 180,
        }}
      >
        <View
          style={{
            height: 320,
            alignItems: 'center',
            backgroundColor: COLORS.gray,
            borderRadius: 8,
          }}
        >
          <Image
            style={{
              width: '60%',
              flex: 1,
              marginTop: -120,
            }}
            source={ImageAssets.bookImage1}
            contentFit="contain"
          />
        </View>
        <View
          style={{
            backgroundColor: COLORS.primaryBlack,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            height: 140,
            padding: 12,
            position: 'absolute',
            top: 180,
            left: 0,
            right: 0,
          }}
        >
          <Text
            style={{
              color: COLORS.primaryWhite,
              fontSize: 10,
            }}
          >
            {bookCardItem.category}
          </Text>
          <Layouts.VSpace value={4} />
          <View
            style={{
              height: 60,
            }}
          >
            <Text
              style={{
                color: COLORS.primaryWhite,
                fontSize: 16,
                fontWeight: 'semibold',
              }}
              numberOfLines={2}
            >
              {bookCardItem.name}
            </Text>
            <Layouts.VSpace value={8} />
            <Text
              style={{
                color: COLORS.primaryWhite,
                fontSize: 10,
              }}
            >
              {bookCardItem.author}
            </Text>
          </View>
          <Layouts.VSpace value={8} />
          <Text
            style={{
              color: COLORS.primaryWhite,
              fontSize: 22,
              fontWeight: 'bold',
            }}
          >
            ${bookCardItem.price}
          </Text>
        </View>
      </View>
    </React.Fragment>
  );
};

export { BookCardItem };