import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import CheckImageUrl from "../../../utils";
import { icons } from "../../../constants";

const Company = ({ location, companyName, companyLogo, jobTitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          style={styles.logoImage}
          source={{
            uri: CheckImageUrl(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/13/72/29/360_F_513722905_SgxiGdjQZsdvP4ODmERsQGgW2bUwj1lT.jpg",
          }}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
