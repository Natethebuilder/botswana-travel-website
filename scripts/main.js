
// Live cost calculator for customization
document.addEventListener('DOMContentLoaded', function () {
    const basePackage = document.getElementById('base-package');
    const addOns = document.querySelectorAll('.addon');
    const estimatedCost = document.getElementById('estimated-cost');

    // Function to calculate the total cost
    function calculateCost() {
        let totalCost = parseFloat(basePackage.value);

        addOns.forEach(addOn => {
            if (addOn.checked) {
                totalCost += parseFloat(addOn.value);
            }
        });

        estimatedCost.textContent = `Estimated Cost: $${totalCost.toFixed(2)}`;
    }

    // Event listeners for updates
    basePackage.addEventListener('change', calculateCost);
    addOns.forEach(addOn => {
        addOn.addEventListener('change', calculateCost);
    });

    // Initial calculation on page load
    calculateCost();
});
// Highlight selected add-ons
addOns.forEach(addOn => {
    addOn.addEventListener('change', () => {
        const parent = addOn.closest('.addon-card');
        if (addOn.checked) {
            parent.classList.add('selected');
        } else {
            parent.classList.remove('selected');
        }
    });
});

// Prevent form submission if no add-ons are selected
document.getElementById('finalize-safari').addEventListener('click', function (event) {
    if (!Array.from(addOns).some(addOn => addOn.checked)) {
        event.preventDefault();
        alert('Please select at least one add-on to proceed.');
    }
});
