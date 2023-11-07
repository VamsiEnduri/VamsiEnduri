import React from "react";
import Table from "../../components/CustomizableTable/CustomizableTable";
const Voters = () => {
  const headerValue = ["Voters"];
  const tableData = [
    {
      Name: "Voter-1",
      voter: "Ravi",
      voterID: "KHY38476",
      Survey: "7[123]",
      SurveyNumber: "E",
    },
    {
      Name: "Voter-2",
      voter: "Ramu",
      voterID: "TKS67832",
      Survey: "145[9]",
      SurveyNumber: "E",
    },
    {
      Name: "Voter-3",
      voter: "Raju",
      voterID: "VZX05428",
      Survey: "322[1]",
      SurveyNumber: "E",
    },
    {
      Name: "Voter-4",
      voter: "Samuel",
      voterID: "LTF30066",
      Survey: "168[12]",
      SurveyNumber: "E",
    },
    {
      Name: "Voter-5",
      voter: "Amar",
      voterID: "XYZ76533",
      Survey: "11[123]",
      SurveyNumber: "E",
    },
    // Add more data as needed
  ];
  return (
    <div>
      Voters
      <></>
      <Table headerValue={headerValue} tableData={tableData} />
    </div>
  );
};

export default Voters;

//
