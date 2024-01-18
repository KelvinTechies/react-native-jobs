import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import CheckImageUrl from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          style={styles.logoImage}
          resizeMode="contain"
          source={{
            uri: CheckImageUrl(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/13/72/29/360_F_513722905_SgxiGdjQZsdvP4ODmERsQGgW2bUwj1lT.jpg",
          }}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.companyName} {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.jobName(selectedJob, item)}>
          {item.job_title}
        </Text>
        <Text numberOfLines={1} style={styles.location}>
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
