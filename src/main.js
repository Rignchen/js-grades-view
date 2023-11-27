import { addSemester } from "./script/addSemester";

addSemester();

// Add a semester when the user clicks on a button
document.querySelector("#newSemester").addEventListener("click", () => {
  addSemester();
  if (document.querySelector("#semesterList").childElementCount === 8)
    document.querySelector("#newSemester").parentElement.remove();
});
