module.exports = {

    initialize: function() {
        //Get access to the carrier selection drop-down
        var carrierSel = document.getElementById('carrier-select');
        //Add a change event listener to the field
        carrierSel.addEventListener('change', carrierChange);

        //Get access to the country code selection drop-down
        var ccSel = document.getElementById('country-code-select');
        //Add a change event listener to the field
        ccSel.addEventListener('change', ccChange);

        function carrierChange() {
            console.log("Carrier selection changed to " + this.value);
        }

        function ccChange() {
            console.log("Country code selection changed to " + this.value);
        }
    }
};