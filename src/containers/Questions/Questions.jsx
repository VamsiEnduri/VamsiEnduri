import React from "react";
import Table from "../../components/CustomizableTable/CustomizableTable";

const Questions = () => {
  const headerValue = ["Questions"];
  const tableData = [
    {
      Name: "Question-1",
      voter: "Ravi",
      voterID: "KHY38476",
      Survey: "Survey-1",
      SurveyNumber: "7[123]",
    },
    {
      Name: "Question-2",
      voter: "Ramu",
      voterID: "TKS67832",
      Survey: "Survey-1",
      SurveyNumber: "145[9]",
    },
    {
      Name: "Question-3",
      voter: "Raju",
      voterID: "VZX05428",
      Survey: "Survey-2",
      SurveyNumber: "322[1]",
    },
    {
      Name: "Question-4",
      voter: "Samuel",
      voterID: "LTF30066",
      Survey: "Survey-2",
      SurveyNumber: "168[12]",
    },
    {
      Name: "Question-5",
      voter: "Amar",
      voterID: "XYZ76533",
      Survey: "Survey-5",
      SurveyNumber: "11[123]",
    },
    // Add more data as needed
  ];

  return (
    <div>
      Questions
      <Table headerValue={headerValue} tableData={tableData} />
    </div>
  );
};

export default Questions;
