function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    const distance = Math.abs(pickupLocation - hqLocation);
    return distance;
}
console.log(distanceFromHqInBlocks(50)); 


function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    const distanceInFeet = blocks * feetPerBlock;
    return distanceInFeet;
}
console.log(distanceFromHqInFeet(50)); 

function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264;
    const distanceInFeet = blocksTravelled * feetPerBlock;
    return distanceInFeet;
}
console.log(distanceTravelledInFeet(43, 48)); 

function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264;
    const distanceInFeet = blocksTravelled * feetPerBlock;
    return distanceInFeet;
}
console.log(distanceTravelledInFeet(43, 48)); 

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let farePrice;

    if (distance <= 400) {
        farePrice = 0;
    } else if (distance > 400 && distance <= 2000) {
        farePrice = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        farePrice = 25;
    } else {
        farePrice = 'cannot travel that far';
    }

    return farePrice;
}
console.log(calculatesFarePrice(43, 48)); 

