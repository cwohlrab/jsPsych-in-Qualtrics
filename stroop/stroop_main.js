// Use JSDELIVR to get the files from a GitHub repository
// https://cdn.jsdelivr.net/gh/<github-username>/<repository-name>/
var repo_site = "https://cdn.jsdelivr.net/gh/cwohlrab/jsPsych-in-Qualtrics/stroop/";

/* create timeline */
var timeline = [];

var n_back_set = ['TEST', 'HELLO', 'YES', 'NO', 'GOOD', 'BAD'];
var sequence = [];

var how_many_back = 2;

var sequence_length = 22;

/* Instructions */
var instructions_1 = {
  type: 'html-button-response',
  stimulus: '<div style="width: 800px;">'+
    '<p>This experiment will test your ability to hold information in short-term, temporary memory. This is called working memory.</p>'+
    '</div>',
  choices: ["Continue"]
}
timeline.push(instructions_1);
