import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import BleManager, {BleState, Peripheral} from 'react-native-ble-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const App = () => {
  const [isBluetoothEnabled, setIsBluetoothEnabled] = useState();
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('devices').then(value => {
      if (value) {
        setDevices(JSON.parse(value));
      }
    });

    BleManager.checkState().then(state => setIsBluetoothEnabled(state));

    BleManager.start({showAlert: false}).then(() => {
      console.log('Module initialized');

      bleManagerEmitter.addListener('BleManagerDidUpdateState', args => {
        if (args.state === 'on') {
          console.log('Bluetooth is enabled');
          setIsBluetoothEnabled(args.state);
        }
        if (args.state === 'off') {
          console.log('Bluetooth is disabled');
          setIsBluetoothEnabled(args.state);
        }
      });
    });
  }, []);

  const handleStartScan = () => {
    BleManager.scan([], 5, true).then(() => {
      console.log('Scanning...');
    });
  };

  const handleStopScan = () => {
    BleManager.stopScan().then(() => {
      console.log('Scan stopped');

      BleManager.getDiscoveredPeripherals().then(peripheralsArray => {
        console.log('Discovered peripherals: ' + peripheralsArray.length);
        setDevices(peripheralsArray);
        AsyncStorage.setItem('devices', JSON.stringify(peripheralsArray));
      });
    });
  };

  return (
    <View>
      <Text>Bluetooth Status: {isBluetoothEnabled ?? 'off'}</Text>
      <Button title="Scan Devices" onPress={handleStartScan} />
      <Button title="Stop Scanning Devices" onPress={handleStopScan} />
      <FlatList
        data={devices}
        renderItem={({item}) => (
          <Text>
            {item.name} ({item.id})
          </Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default App;
