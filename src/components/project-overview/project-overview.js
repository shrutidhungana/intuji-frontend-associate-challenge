import EmptyWalletIcon from "../../icons/empty-wallet.svg";
import ExportIcon from "../../icons/export.svg";
import BalanceArrowIcon from "../../icons/arrow-right.svg";

import SavingIcon from "../../icons/save.svg";
import SavingExport from "../../icons/export1.svg";

import ArrowIcon from "../../icons/arrow-right1.svg";

import ExpenseIcon from "../../icons/expenses.svg";
import ExpenseExport from "../../icons/export2.svg";

import IncomeIcon from "../../icons/income.svg";
import IncomeExport from "../../icons/export3.svg";

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
}
