import React from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'


const TabButton=({name, activeTab, onHandleSearchType})=>{
  <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleSearchType}>
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
}


const Tabs = ({tabs, activeTab, setActiveTabs}) => {
  return (
    <View style={styles.container}>
     <FlatList data={tabs} renderItem={({item})=><TabButton name={item} activeTab={activeTab} onHandleSearchType={()=>setActiveTabs(item)}   />} horizontal showsHorizontalScrollIndicator={false} keyExtractor={item=>item} contentContainerStyle={{columnGap:SIZES.medium}}/> 
    </View>
  )
}

export default Tabs