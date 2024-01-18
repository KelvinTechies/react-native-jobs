import React from "react";
import { View, Text, TextInput, Image, FlatList } from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { SIZES, icons } from "../../../constants";

const jobTypes = ["Full-Time", "Part-Time", "Contractor", "Project"];
const [activeJobType, setActiveJobType] = ["Full-Time"];
const Welcome = ({searchterm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Osas</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchterm}
            style={styles.searchInput}
            placeholder="What are you looking for"
            onChangeText={(text) => {setSearchTerm(text)}}
          />
        </View>
        <TouchableOpacity onPress={handleClick} style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contains"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={item=>item}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={()=>{
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }} >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal
          contentContainerStyle={{columnGap:SIZES.small}}
        />
      </View>
    </View>
  );
};

export default Welcome;
