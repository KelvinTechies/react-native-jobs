import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import CheckImageUrl from "../../../../utils";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate(job)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          style={styles.logImage}
          resizeMode="contain"
          source={{
            uri: CheckImageUrl(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/13/72/29/360_F_513722905_SgxiGdjQZsdvP4ODmERsQGgW2bUwj1lT.jpg",
          }}
        />
      </TouchableOpacity>
      

      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.jobName}>
          {job.job_title}
        </Text>
        <Text numberOfLines={1} style={styles.jobType}>
          {job.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
