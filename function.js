module.exports = function pizza() {

    var small = 0;
    var medium = 0;
    var large = 0;

    var smallPrice = 0;
    var mediumPrice = 0;
    var largePrice = 0;


    function qtySmall() {
        return ++small
    }

    function qtyMedium() {
        return ++medium;
    }

    function qtyLarge() {
        return ++large;
    }



    function priceForSmall() {
        smallPrice = (31.99 * small).toFixed(2);
        return smallPrice;
    }


    function priceForMedium() {
        mediumPrice = (58.99 * medium).toFixed(2);
        return mediumPrice;
    }

    function priceForLarge() {
         largePrice = (87.99 * large).toFixed(2);
        return largePrice
    }


    function grandTotal() {

        return smallPrice + mediumPrice + largePrice;
    }

    return {
        qtySmall,
        qtyMedium,
        qtyLarge,
        priceForSmall,
        priceForMedium,
        priceForLarge,
        grandTotal,

    }
}