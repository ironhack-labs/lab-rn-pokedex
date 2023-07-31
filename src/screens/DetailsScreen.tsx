import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {getTypeBackgroundColor} from '../../theme';

type Props = {};

export const DetailsScreen: React.FC = () => {
  const {params} = useRoute();
  const {name, id, image, type, abilities} = params.item;

  const colorType = getTypeBackgroundColor(type);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, {backgroundColor: colorType}]}>
        <View>
          <Image
            source={{uri: image}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.id}>#00{id}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.wrap}>
        <Text style={styles.label}>Abilities:</Text>
        {abilities.map(item => (
          <View style={[styles.pill, {backgroundColor: colorType}]}>
            <Text style={styles.ability}>{item}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {
    width: 180,
    height: 180,
  },
  id: {fontWeight: '700', fontSize: 16, lineHeight: 19.09},
  name: {
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 38.19,
    color: '#fff',
    textTransform: 'capitalize',
  },
  wrap: {
    padding: 16,
  },
  label: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14.32,
  },
  text: {fontWeight: '400', fontSize: 16, lineHeight: 19.09},
  pill: {
    margin: 16,
    flexWrap: 'wrap',
    width: 'auto',
    padding: 8,
    borderRadius: 20,
  },
  ability: {
    textTransform: 'capitalize',
  },
});
