/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {DB, open} from '@op-engineering/op-sqlite';
import React from 'react';
import {Text, View} from 'react-native';

export const db: DB = open({
  name: 'test.sqlite',
});

db.loadExtension('better-trigram', 'sqlite3_bettertrigram_init');

function App(): React.JSX.Element {
  return (
    <View>
      <Text style={{color: 'white', fontSize: 100}}>hello world</Text>
    </View>
  );
}

export default App;
