/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconComponent = Icon as unknown as React.ComponentType<{
  name: string;
  size: number;
  color: string;
}>;

function FeatureCard({title, icon, onPress}: {
  title: string;
  icon: string;
  onPress: () => void;
}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: isDarkMode ? '#333' : '#fff',
        },
      ]}
      onPress={onPress}>
      <IconComponent name={icon} size={40} color={isDarkMode ? '#fff' : '#333'} />
      <Text
        style={[
          styles.cardTitle,
          {
            color: isDarkMode ? '#fff' : '#333',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#f5f5f5',
    flex: 1,
  };

  const handleFeaturePress = (feature: string) => {
    console.log(`Navigate to ${feature}`);
    // TODO: Add navigation logic
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, {color: isDarkMode ? '#fff' : '#333'}]}>
            工具库
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.row}>
            <FeatureCard
              title="会议纪要"
              icon="event-note"
              onPress={() => handleFeaturePress('会议纪要')}
            />
            <FeatureCard
              title="日程提醒"
              icon="access-time"
              onPress={() => handleFeaturePress('日程提醒')}
            />
          </View>
          <View style={styles.row}>
            <FeatureCard
              title="AI机器人"
              icon="android"
              onPress={() => handleFeaturePress('AI机器人')}
            />
            <FeatureCard
              title="扫码识别"
              icon="qr-code-scanner"
              onPress={() => handleFeaturePress('扫码识别')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: '48%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardTitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
