import EmptyWalletIcon from "../../icons/empty-wallet.svg";
import ExportIcon from "../../icons/export.svg";
import BalanceArrowIcon from "../../icons/arrow-right.svg";

import SavingIcon from "../../icons/save.svg";
import SavingExport from "../../icons/export1.svg";

import ArrowIcon from "../../icons/arrow-right1.svg";

import ExpenseIcon from "../../icons/expenses.svg";
import ExpenseExport from "../../icons/export2.svg";

import IncomeIcon from "../../icons/income.svg";
import IncomeExport from "../../icons/export3.svg"

export default function initProjectOverview() {
    function injectSVG(containerId, SvgComponent) {
      const container = document.getElementById(containerId);

      if (container) {
        container.innerHTML = "";
        const imgElement = document.createElement("img");
        imgElement.src = SvgComponent;
        imgElement.alt = "Icon";

        container.appendChild(imgElement);
      }
    }

    injectSVG("wallet-icon", EmptyWalletIcon);
    injectSVG("export-icon", ExportIcon);
    injectSVG("balance-arrow", BalanceArrowIcon);

    injectSVG("saving-icon", SavingIcon);
    injectSVG("saving-export", SavingExport);
    injectSVG("saving-arrow", ArrowIcon);

    injectSVG("expense-icon", ExpenseIcon);
    injectSVG("expense-export", ExpenseExport);
    injectSVG("expense-arrow", ArrowIcon);

    injectSVG("income-icon", IncomeIcon);
    injectSVG("income-export", IncomeExport);
    injectSVG("income-arrow", ArrowIcon);

    
    

  document.addEventListener("DOMContentLoaded", () => {
    // Function to generate a random number within a range
    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Function to format currency
    function formatCurrency(value) {
      return `$ ${value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3,
      })}`;
    }

    
    function updateCard(
      valueId,
      percentageId,
      arrowId,
      minVal,
      maxVal,
      isCurrency = true
    ) {
      const valueElement = document.getElementById(valueId);
      const percentageElement = document.getElementById(percentageId);
      const arrowElement = document.getElementById(arrowId);

      if (!valueElement || !percentageElement || !arrowElement) {
        console.error(
          `Elements not found for IDs: ${valueId}, ${percentageId}, ${arrowId}`
        );
        return;
      }

      
      const newValue = getRandomNumber(minVal, maxVal);
      const newPercentage = Math.floor(getRandomNumber(-10, 20)); 

     
      valueElement.textContent = isCurrency
        ? formatCurrency(newValue)
        : newValue.toFixed(0);

      
      percentageElement.textContent = `${Math.abs(
        newPercentage
      )}% compared with last month`;

     
      arrowElement.innerHTML = ""; 
      if (newPercentage > 0) {
        arrowElement.innerHTML = "&#8593;"; 
        arrowElement.style.color = "#28a745"; 
      } else if (newPercentage < 0) {
        arrowElement.innerHTML = "&#8595;"; 
        arrowElement.style.color = "#dc3545"; 
      } else {
        arrowElement.innerHTML = "&#8594;"; 
        arrowElement.style.color = "#4a5568"; 
      }
    }

    updateCard(
      "balance-value",
      "balance-percentage",
      "balance-arrow",
      25000,
      35000
    );
    updateCard("saving-value", "saving-percentage", "saving-arrow", 800, 1500);
    updateCard(
      "expenses-value",
      "expenses-percentage",
      "expenses-arrow",
      150,
      300
    );
    updateCard(
      "incomes-value",
      "incomes-percentage",
      "incomes-arrow",
      18000,
      25000
    );

   
    setInterval(() => {
      updateCard(
        "balance-value",
        "balance-percentage",
        "balance-arrow",
        25000,
        35000
      );
      updateCard(
        "saving-value",
        "saving-percentage",
        "saving-arrow",
        800,
        1500
      );
      updateCard(
        "expenses-value",
        "expenses-percentage",
        "expenses-arrow",
        150,
        300
      );
      updateCard(
        "incomes-value",
        "incomes-percentage",
        "incomes-arrow",
        18000,
        25000
      );
    }, 5000);
  }
  );
}


