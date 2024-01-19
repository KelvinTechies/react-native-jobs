import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import style from "../popular/popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import { FlatList } from "react-native-gesture-handler";
import useFetch from "../../../hook/useFetch";
const Popularjobs = () => {
  const [selectedJob, setSelectedJobs] = useState('')
  const handleCardPress=(item)=>{
router.push(`job-details/${item.job_id}`)
setSelectedJobs(item.job_id)
  }
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went Wrong</Text>
        ) : (
          <FlatList
            keyExtractor={(item) => item?.job_id}
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} selectedJob={selectedJob} handleCardPress={handleCardPress} />}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
