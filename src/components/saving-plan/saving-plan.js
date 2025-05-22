// savingplan.js


function initSavingPlan() {
 
  const savingGoalItems = document.querySelectorAll(".saving-goal-item");
  savingGoalItems.forEach((item) => {
    const progressBarWrapper = item.querySelector(".progress-bar-wrapper");
    const percentageElement = item.querySelector(".goal-percentage");

    if (progressBarWrapper && percentageElement) {
      const percentageText = percentageElement.textContent;
      const percentageValue = parseFloat(percentageText.replace("%", "")) / 100; // Convert to 0-1

      // Replace the simple div with the library's progress bar
      progressBarWrapper.innerHTML = ""; // Clear the old div
     
      
    }
  });

}

export default initSavingPlan;
