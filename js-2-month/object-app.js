// Add functions to Object.prototype
Object.prototype.mergeObjects = function(obj) {
  return { ...this, ...obj };
};

Object.prototype.sortProperties = function() {
  const sortedKeys = Object.keys(this).sort();
  const sortedObj = {};
  for (const key of sortedKeys) {
    sortedObj[key] = this[key];
  }
  return sortedObj;
};

Object.prototype.checkSamePropertiesAndValues = function(obj) {
    const obj1Props = Object.keys(this);
    const obj2Props = Object.keys(obj);
  
    if (obj1Props.length !== obj2Props.length) {
      return false;
    }
  
    for (const prop of obj1Props) {
      if (this[prop] !== obj[prop]) {
        return false;
      }
    }
  
    return true;
  };
  
Object.prototype.convertToQueryString = function() {
    return Object.keys(this)
      .map(key => `${key}=${this[key]}`)
      .join('&');
  };
  
Object.prototype.findMaxValue = function() {
  const values = Object.values(this);
  return Math.max(...values);
};

Object.prototype.sumOfSquaredNumericProperties = function() {
  let sum = 0;
  for (const value of Object.values(this)) {
    if (typeof value === 'number') {
      sum += value ** 2;
    }
  }
  return sum;
};

Object.prototype.getStringValueProperties = function() {
  const stringProperties = [];
  for (const [key, value] of Object.entries(this)) {
    if (typeof value === 'string') {
      stringProperties.push(key);
    }
  }
  return stringProperties;
};

// Usage example:
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, d: 5 };

console.log('1. Birinci və ikinci obyekti birləşdirən funksiya:', obj1.mergeObjects(obj2));
console.log('2. Obyektin property-lərini əlifba sırası ilə düzən funksiya:', obj1.sortProperties());
console.log('3. Eyni property-lərə və value-lara malik olub-olmadığını yoxlamaq:', obj1.checkSamePropertiesAndValues(obj2));
console.log('4. Obyekti belə bir formata çevirən funksiya:', obj1.convertToQueryString());
console.log('5. Obyektin daxilindəki ən böyük value:', obj1.findMaxValue());
console.log('6. Obyektin daxilindəki rəqəmsal xüsusiyyətlərinin kvadratlarının cəmi:', obj1.sumOfSquaredNumericProperties());
console.log('7. Obyektdə olan string value-ların property-ləri:', obj1.getStringValueProperties());