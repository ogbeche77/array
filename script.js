const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  //prototype.filter
        //getting a list of inventors who were born in 1500
        const fifteen = inventors.filter (inventor =>{
            if (inventor.year >= 1500 && inventor.year  <= 1599){
                return true;
            }

        });
        console.table (fifteen);

//prototype.map
//getting a list of first & last name of the inventors
const fullName = inventors.map(inventor => 
    inventor.first + " " + inventor.last);

console.log(fullName);

//prototype.sort
//sort inventors by birthdate, oldest to youngest
const birthDate = inventors.sort (function(a,b){
    if(a.year > b.year){
        return 1;
    } else{
        return -1;
    }  
});
console.table(birthDate);

//prototype.reduce
//how long did all inventors live
const alive = inventors.reduce ((total,inventor)=>{
return total + (inventor.passed - inventor.year)

}, 0);

console.log(alive);

//sort inventors by years lived
const duration = inventors.sort (function(c, d){
    const first = c.passed - c.year;
    const second = d.passed - d.year;
    if(first < second){
        return  1;
    } else{
        return -1;
    }  
});
console.table(duration);

//sort inventor by last name (decending order)
const lName = inventors.sort (function(e,f){
    if(e.last < f.last){
        return 1;
    } else{
        return -1;
    }  
});
console.table(lName);