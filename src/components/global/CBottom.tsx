import React from 'react';
import { StyleSheet, View } from 'react-native';
import CItem from './CItem';
import { Colors } from '../../utils';

type CBottomProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

const CBottom: React.FC<CBottomProps> = ({ state, descriptors, navigation }) => {

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View style={styles.container}>
            <CItem
              key={index}
              title={label}
              active={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          </View>
        );
      })}
    </View>
  );
}

export default CBottom;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    // Jika Icon User width: '35%', Icon Admin width: '25%'
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 21,
  }
})

