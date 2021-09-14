module.exports = function pizza() {

    var small = 0;
    var medium = 0;
    var large = 0;

    var smallPrice = 0;
    var mediumPrice = 0;
    var largePrice = 0;

    let smallList = [];
    // let mediumList = [];
    // let largeList = [];

  

    // Increments the quantity
    function qtySmall() {
        return ++small
    }

    function qtyMedium() {
        return ++medium;
    }

    function qtyLarge() {
        return ++large;
    }


    // Decrements the quantity
    function qtySmallMinus() {
        return --small;
    }


    function qtyMediumMinus() {
        return --medium;
    }

    function qtyLargeMinus() {
        return --large;
    }

    //Total cost for each flavour
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

    //Toatal cost for all ordered pizzas
    function grandTotal() {
        let x = smallPrice
        let y = mediumPrice
        let z = largePrice;
        return (Number(x) + Number(y) + Number(z)).toFixed(2);
    }

    //Orders
    function actSmall() {

        let x = qtySmall();
        let y = priceForSmall(); 
        
        smallList.push({
            Pizza: "small",
            Quantity:x,
            Price:y,
        });
    }

function actionSmall() {
    return smallList;
}

    return {
        qtySmall,
        qtyMedium,
        qtyLarge,
        priceForSmall,
        priceForMedium,
        priceForLarge,
        grandTotal,
        qtySmallMinus,
        qtyMediumMinus,
        qtyLargeMinus,
        actSmall,
        actionSmall,

    }
}