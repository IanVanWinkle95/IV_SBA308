// The provided course information.
const CourseInfo = {
    id: 451, name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345, name: "Fundamentals of JavaScript", course_id: 451, group_weight: 25, assignments:
        [
            { id: 1, name: "Declare a Variable", due_at: "2023-01-25", points_possible: 50 },
            { id: 2, name: "Write a Function", due_at: "2023-02-27", points_possible: 150 },
            { id: 3, name: "Code the World", due_at: "3156-11-15", points_possible: 500 }
        ]
};

// The provided learner submission data.
const LearnerSubmissions =
    [
        { learner_id: 125, assignment_id: 1, submission: { submitted_at: "2023-01-25", score: 47 } },
        { learner_id: 125, assignment_id: 2, submission: { submitted_at: "2023-02-12", score: 150 } },
        { learner_id: 125, assignment_id: 3, submission: { submitted_at: "2023-01-25", score: 400 } },

        { learner_id: 132, assignment_id: 1, submission: { submitted_at: "2023-01-24", score: 39 } },
        { learner_id: 132, assignment_id: 2, submission: { submitted_at: "2023-03-07", score: 140 } }
    ];

// Some object to hold results by Learner_id
// Loop through  learner submissons
// If this is the first time we see the learner we add them to our object
// Check if assingnment has a course
// Check if assingment_id is actually due
// Get the score the learner_id got
// if late score - * possible points * .9
// Get the score overall
// Get average of individual score

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmission) {

    const result = [];
    let learnerData = {};

    for (let i = 0; i < LearnerSubmission.length; i++) {
        const { learner_id, ...submission } = LearnerSubmission[i];

        if (!learnerData[learner_id]) {
            learnerData[learner_id] = [];
        }

        learnerData[learner_id].push(submission);

    }
    console.log(learnerData)
    return result;


}

function getPossiblePoints(AssignmentDetails) {
    let result = 0;
    const assign = AssignmentDetails.assignments

    for (let i = 0; i < assign.length; i++) {
        console.log(assign[i].points_possible)
        result += assign[i].points_possible
        console.log(result)
    }
    return result;
}
getPossiblePoints(AssignmentGroup)

function getUserScore(LearnerSubmissions) {
    let result = 0;

    for (let i = 0; i < LearnerSubmissions.length; i++) {
        const submissions = LearnerSubmissions[i]
        const scores = submissions.score

            console.log(submissions.submission.score)
            result += submissions.submission.score
            console.log(result)

    }
    return result;
}
getUserScore(LearnerSubmissions)


// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);

// Should come out looking something like this.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];