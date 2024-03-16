import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";
import { Table, TableWrapper, Row, Rows } from "react-native-table-component";

const Result = (props) => {
  const dialysisStatus = props.route.params.Dialysis;
  const tableHead = [
    "Group",
    "Gender",
    "Age",
    "CVD",
    "Pulmonary Disease",
    "Diabetes",
    "Immunosuppressive Therapy",
    "Serum Creatinine",
    "Urea Nitrogen",
    "eGFR",
    "White Blood Cells",
    "Hemoglobin",
    "Platelet",
    "Serum Albumin",
    "Serum Globulin",
    "ESR",
    "CRP",
  ];
  const tableData = [
    [
      props.route.params.Group,
      props.route.params.Gender,
      props.route.params.Age,
      props.route.params.CVD,
      props.route.params.PD,
      props.route.params.Diabetes,
      props.route.params.IT,
      props.route.params.SC,
      props.route.params.UN,
      props.route.params.eGFR,
      props.route.params.WBC,
      props.route.params.Hemoglobin,
      props.route.params.Platelets,
      props.route.params.SerumAlbumin,
      props.route.params.SerumGlobulin,
      props.route.params.ESR,
      props.route.params.CRP,
    ],
  ];

  // Determine message and badge style based on condition
  let message, badgeStyle;
  switch (dialysisStatus) {
    case "Cardiovascular disease (CVD) present. Monitor closely and follow cardiologist's advice.":
      message =
        "1 - Cardiovascular disease (CVD) present. Monitor closely and follow cardiologist's advice.";
      badgeStyle = styles.warningBadge;
      break;
    case "Cardiovascular disease (CVD) and diabetes present. Monitor heart and glucose levels regularly.":
      message =
        "2 - Cardiovascular disease (CVD) and diabetes present. Monitor heart and glucose levels regularly.";
      badgeStyle = styles.warningBadge;
      break;
    case "Monitor closely and follow up regularly.":
      message = "3 - Monitor closely and follow up regularly.";
      badgeStyle = styles.warningBadge;
      break;
    case "Pulmonary disease present. Monitor lung function regularly.":
      message =
        "4 - Pulmonary disease present. Monitor lung function regularly.";
      badgeStyle = styles.warningBadge;
      break;
    case "Cardiovascular disease (CVD) and pulmonary disease present. Monitor heart and lung function closely.":
      message =
        "5 - Cardiovascular disease (CVD) and pulmonary disease present. Monitor heart and lung function closely.";
      badgeStyle = styles.warningBadge;
      break;
    case "Pulmonary disease and diabetes present. Monitor lung function and glucose levels regularly.":
      message =
        "6 - Pulmonary disease and diabetes present. Monitor lung function and glucose levels regularly.";
      badgeStyle = styles.warningBadge;
      break;
    case "Diabetes present. Monitor glucose levels regularly.":
      message = "7 - Diabetes present. Monitor glucose levels regularly.";
      badgeStyle = styles.warningBadge;
      break;
    case "Cardiovascular disease (CVD), pulmonary disease, and diabetes present. Monitor heart, lung function, and glucose levels regularly.":
      message =
        "8 - Cardiovascular disease (CVD), pulmonary disease, and diabetes present. Monitor heart, lung function, and glucose levels regularly.";
      badgeStyle = styles.warningBadge;
      break;
    case "Cardiovascular disease (CVD) and diabetes present. Monitor heart function and glucose levels regularly.":
      message =
        "9 - Cardiovascular disease (CVD) and diabetes present. Monitor heart function and glucose levels regularly.";
      badgeStyle = styles.warningBadge;
      break;
    case "Cardiovascular disease (CVD) and pulmonary disease present. Monitor heart and lung function regularly.":
      message =
        "10 - Cardiovascular disease (CVD) and pulmonary disease present. Monitor heart and lung function regularly.";
      badgeStyle = styles.warningBadge;
      break;
    default:
      message = "Unknown status";
      badgeStyle = styles.dangerBadge;
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={{ marginHorizontal: 15 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          Infos
        </Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHead}
            style={{ height: 40, backgroundColor: "#f1f8ff" }}
            textStyle={{ margin: 2 }}
          />
          <Rows data={tableData} textStyle={{ margin: 1 }} />
        </Table>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.stepImage}
          resizeMode="cover"
          source={
            badgeStyle === styles.warningBadge
              ? require("../assets/stopn.jpg")
              : {
                  uri: "https://img.icons8.com/color/70/000000/facebook-like.png",
                }
          }
        />
        <View style={styles.description}>
          <Text style={styles.description}>
            Result: <Text style={badgeStyle}>{message}</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => props.navigation.navigate("Dialysis")}
        >
          <Text style={styles.buttonText}>Try Again </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  scroll: {
    width: width,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  stepImage: {
    width: width * 0.9,
    height: height * 0.3,
  },
  description: {
    marginTop: 10,
    textAlign: "center",
    color: "#A9A9A9",
    fontSize: 16,
    margin: 40,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#043c85",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  warningBadge: {
    color: "orange",
    fontWeight: "bold",
  },
  dangerBadge: {
    color: "red",
    fontWeight: "bold",
  },
});

export default Result;
