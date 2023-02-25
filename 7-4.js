function OnOff(powerConsumption) {
    this.turnOn = function(powerConsumption) {
      console.log(`Appliance is on, power consumption ${powerConsumption} kW/h`)
      return powerConsumption
    };
    this.turnOff = function(powerConsumption) {
      console.log(`Appliance is off, power consumption 0 kW/h`)
    };
  };
  
  
  ElectricalAppliance.prototype = new OnOff()
  
  function ElectricalAppliance(name, power) {
    this.warning = 'Avoid water ingress!',
    this.name = name,
    this.power = power,
    this.showPower = function(name, power) {
      console.log(`Appliance ${name} has power ${power} W`)
    };
  };
  
  
  function PowerfulElectricalAppliance(name, power, powerConsumption) {
    this.warning = 'Keep away from children!',
    this.name = name,
    this.power = power,
    this.powerConsumption = powerConsumption,
    this.showWarning = function(power) {
      if (power > 1000) {
        console.log('Be careful the device is powerful !')
      } else {
        console.log('Be careful anyway !')
      };
      
    };
  };
  
  
  function LowPowerElectricalAppliance(name, power, powerConsumption, color) {
    this.name = name,
    this.power = power,
    this.powerConsumption = powerConsumption,
    this.color = color
  };
  
  
  PowerfulElectricalAppliance.prototype = new ElectricalAppliance()
  LowPowerElectricalAppliance.prototype = new ElectricalAppliance()
  
  
  let washingMachine = new PowerfulElectricalAppliance('Bosh', 2200, 1.5)
  let kettle = new LowPowerElectricalAppliance('Xiaomi', 650, 0.5, 'white')
  
  washingMachine.year = 2018;
  washingMachine.wattToKilowatt = function(power) {
    console.log(power/1000 + ' kW')
  };
  
  
  kettle.guarantee = '1 year';
  kettle.nameAndColor = function () {
    console.log(`Keetle name ${this.name} and his color ${this.color}`)
  };
  
  
  let totalConsuption = washingMachine.turnOn(1.5) + kettle.turnOn(0.5)
  console.log(`Total energy consumption is ${totalConsuption} kW/h`)
  
  kettle.showPower('Xiaomi', 650)
  washingMachine.showWarning(2200)
  kettle.nameAndColor()
  
  console.log(kettle)
  console.log(washingMachine)
  