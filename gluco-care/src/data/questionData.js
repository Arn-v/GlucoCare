const questions = [
    {
        questionNo: 1,
        ques: "Q. How old are you ?",
        unit: "years old" ,
        answerGuide: "(Enter a numerical value)", 
        name : "age"
    },
    {
        questionNo: 2,
        ques: "Q. How many pregnancies have you experienced in your lifetime?",
        unit: "",
        answerGuide: "(Enter a numerical value)",
        name : "pregnancies"
    },
    {
        questionNo: 3,
        ques: "Q. What is your current Body Mass Index (BMI)?",
        unit: "" ,
        answerGuide: "(Enter a numerical value)",
        name:"BMI"
    },
    {
        questionNo: 4,
        ques: "Q. How many close family members have been diagnosed with diabetes? " ,
        // parents 
        // siblings 
        // children 
        // close relatives (grandparents, aunts, uncles)
        unit: "members",
        answerGuide: "(Enter a numerical value) ",
        name : "DPF"
    },
    {
        questionNo: 5,
        ques: "Q. What is your typical fasting blood glucose level in the morning before eating or drinking anything? ",
        unit: "mg/dL",
        answerGuide: "(Enter a numerical value in mg/dL) " , 
        name:"glucoseLevel"
    },
    {
        questionNo: 6,
        ques: "Q.  What is your current blood pressure reading (diastolic)? ",
        unit: "mmHg",
        answerGuide: "(Enter a numerical value in mmHg ) ",
        name : "bloodPressure"
    },
    {
        questionNo: 7,
        ques: "Have you had your skin-fold thickness measured recently? If so, what was the measurement?",
        unit: "mm",
        answerGuide: "(Enter a numerical value in mm )",
        name : "skinThickness"
    },
    {
        questionNo: 8,
        ques: "Do you know your insulin levels after a meal?",
        unit: "mu U/mL",
        answerGuide: "(Enter a numerical value in mu U/mL )",
        name : "insulin"

    }
    // {
    //     questionNo: 9,
    //     ques: "Q. On a scale of 1 to 10, where 1 indicates very low sensitivity and 10 indicates very high sensitivity, how would you rate your insulin sensitivity? ",
    //     unit: "",
    //     answerGuide: "(Enter a numerical value on a scale of 1 to 10)"
    // },
];


export default questions ; 
