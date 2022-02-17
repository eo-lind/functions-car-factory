// car factory

// will build the same car over and over

const createChassis = () => {
    const newChassisObject = {}
    return newChassisObject
}

const addBody = (chassisObject) => {
    chassisObject.body = "Fever"
    return chassisObject
}


const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
    return chassisObject
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "tilting"
    return chassisObject
}

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "two wheel drive"
    return chassisObject
}


const buildCar = () => {
    const chassis = createChassis()
    const chassisBody = addBody(chassis)
    const chassisWheels = addWheels(chassisBody)
    const chassisEngine = addEngine(chassisWheels)
    const chassisSteeringWheel = addSteeringWheel(chassisEngine)
    const chassisDrive = addDriveTrain(chassisSteeringWheel)
    return chassisDrive
}

const car1 = buildCar()
console.log("Our car: ", car1)
