import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import BottomNavigation from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'


export const BottomNav = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('InfoPage')}>
          <Icon name="info-circle" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CommentPage')}>
          <Icon name="comment" size={30} color="white" />
        </TouchableOpacity>

      </View>
    </View>
  )

}

export default BottomNav

const styles = StyleSheet.create({
  bottomNav: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red'
  }
})

// tab = [
//   {
//     key: 'info',
//     icon: 'info',
//     label: 'Info',
//     barColor: 'pink',
//     pressColor: 'black'
//   },
//   {
//     key: 'message',
//     icon: 'message',
//     label: 'Comment',
//     barColor: 'pink',
//     pressColor: 'black'
//   }
// ]
// state = {
//   activeTab: 'info'
// }


// renderIcon = icon => ({ isActive }) => (
//   <Icon size={24} color={white} name={icon} />
// )

// renderTab = ({ tab, isActive }) => {
//   <FullTab
//     isActive={isActive}
//     key={tab.key}
//     label={tab.label}
//     renderIcon={this.renderIcon(tab.icon)}
//   />

// }


// return (
//   <View style={{ flex: 1 }}>
//     <View style={{ flex: 1 }}>
//       {/* Your screen contents depending on current tab. */}
//     </View>
//     <BottomNavigation
//       activeTab={this.state.activeTab}
//       onTabPress={newTab => this.setState({ activeTab: newTab.key })}
//       renderTab={this.renderTab}
//       tabs={this.tabs}
//     />
//   </View>
// )