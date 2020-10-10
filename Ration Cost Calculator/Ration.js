let costCorn = 0;
let costOPB = 0;
let costSoy = 0;
let costSpelt = 0;
let kgOPB = 0;
let kgCorn = 0;
let kgSoy = 0;
let kgSpelt = 0;
let kgPremix = 25;
let costPremix = 0;
let totalPremixUsed = 0;
let totalFeedCost = 0;
let costPerKg = 0;


function costBatch() {
  costCorn = document.getElementById("costOfCorn").value;
  costSoy = document.getElementById("costOfSoy").value;
  costOPB = document.getElementById("costOfOPB").value;
  costSpelt = document.getElementById("costOfSpelt").value;

  kgOPB = document.getElementById("opbInput").value;

  kgCorn = document.getElementById("cornInput").value;

  kgSoy = document.getElementById("soyInput").value;

  kgSpelt = document.getElementById("speltInput").value;

  kgPremix = document.getElementById("premixInput").value;
  costPremix = document.getElementById("premixCostInput").value / 1000;
  totalPremixUsed = document.getElementById("totalPremixInput").value;
  costPerKg =
    (costOPB * kgOPB +
      costCorn * kgCorn +
      costSoy * kgSoy +
      costSpelt * kgSpelt +
      costPremix * kgPremix) /
    kgPremix /
    1000;

  totalFeedCost = costPerKg * totalPremixUsed;
  totalFeedCost = Math.round(totalFeedCost);
  costPerKg = Math.round(costPerKg);
  totalFeedCost=isFinite(totalFeedCost)&&totalFeedCost||0;
  document.getElementById("totalFeedCost").innerHTML = totalFeedCost;
  
}
