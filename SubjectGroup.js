let Science_Group = ("Physics, Chemistry, Biology, Technical Drawing")
let Social_Science_Group = ("Accounting, Commerce, Marketing, Geography")
let Arts_Group = ("Government, Economics, Literature, History")
let General_Subjects = ("English, Mathematics")

if (Arts_Group === ("Government, Economics, Literature, History") && General_Subjects === ("English, Mathematics")) {
  console.log("Subjects for Arts students are: " + "Government, Economics, Literature, History");
}
else if (Science_Group === ("Physics, Chemistry, Biology, Technical Drawing") && General_Subjects === ("English, Mathematics")) {
  console.log("Subjects for Science students are: " + "Physics, Chemistry, Biology, Technical Drawing");
}
else if (Social_Science_Group === ("Accounting, Commerce, Marketing, Geography") && General_Subjects === ("English, Mathematics")) {
  console.log("Subjects for Social Science students are: " + "Accounting, Commerce, Marketing, Geography");
}
else {
  console.log("General Subject");
}
