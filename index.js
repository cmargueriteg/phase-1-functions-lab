function distanceFromHqInBlocks(distance){
    if(distance > 42) {
        return distance - 42
    } else {
        return 42 - distance
    }
}


function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264
}


function distanceTravelledInFeet(start, end){
    const result = (end - start) * 264
    if(start > end){
return result * -1
    } else { 
        return result
    }

}

function calculatesFarePrice(start, end){
    const distance = distanceTravelledInFeet(start, end)
    if(distance <= 400){
        return 0
    } else if(distance > 400 && distance < 2000){
        return (distance - 400) * .02
    } else if (distance > 2000 && distance < 2500){
        return 25
    }
    else if(distance > 2500){
        return "cannot travel that far"
    }
}

