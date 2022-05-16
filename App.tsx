import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import { Dimensions, StyleSheet, View } from 'react-native';

const SafeMapView = MapView as any;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeMapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
