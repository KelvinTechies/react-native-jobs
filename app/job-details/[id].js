import { Stack, useLocalSearchParams, useRouter, useSearchParams } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES, icons } from "../../constants";
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components";

const tabs=["About", "Qualifications", "Responsibilities"]


const JobDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const onRefresh =useCallback(
    () => {
    setRefreshing(true)
    reFetch()
    setRefreshing(false)
  
    },
    []
  )
const displayContent=()=>{
  switch (activeTab) {
    case "About":
      return <JobAbout info={data[0].job_description ?? "No data Provided"}/>
      case "Qualifications":
      return <Specifics title="Qualifications" points={data[0].job_highlights?.Qualifications ??['N/A'] }/>
        case "Responsibilities":
          return <Specifics title="Responsibilities" points={data[0].job_highlights?.Responsibilities ??['N/A'] }/>

    default:
      break;
  }
}
  const { data, isLoading, error, reFetch } = useFetch("job-details", {
    job_id: params.id,
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />
     <>
     <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong</Text>
        ) : data.length === 0 ? (
          <Text>No Data</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company 
            companyLogo={data[0].employer_logo}
            jobTitle={data[0].job_title}
            companyName={data[0].employer_name}
            location={data[0].job_country}
            
            />
            <JobTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
            {displayContent()}
          </View>
        )}
      </ScrollView>
      <JobFooter url={ "https://oviasuyiosagioduwa.vercel.app/"} />
     </>
    </SafeAreaView>
  );
};

export default JobDetails;
