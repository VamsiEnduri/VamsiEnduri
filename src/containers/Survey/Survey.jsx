import React from "react";
import Table from "../../components/CustomizableTable/CustomizableTable";

const Survey = () => {
  const headerValue = ["Survey"];
  const tableData = [
    {
      Name: "Ongole",
      voter: "Ravi",
      voterID: "KHY38476",
      Survey: "7[123]",
      SurveyNumber: "E",
    },
    {
      Name: "Addanki",
      voter: "Ramu",
      voterID: "TKS67832",
      Survey: "145[9]",
      SurveyNumber: "E",
    },
    {
      Name: "Addanki",
      voter: "Raju",
      voterID: "VZX05428",
      Survey: "322[1]",
      SurveyNumber: "E",
    },
    {
      Name: "Addanki",
      voter: "Samuel",
      voterID: "LTF30066",
      Survey: "168[12]",
      SurveyNumber: "E",
    },
    {
      Name: "Podili",
      voter: "Amar",
      voterID: "XYZ76533",
      Survey: "11[123]",
      SurveyNumber: "E",
    },
    // Add more data as needed
  ];
  return (
    <div>
      Survey
      <Table headerValue={headerValue} tableData={tableData} />
    </div>
  );
};

export default Survey;
