// 5,999	150
// 6,000 - 7,999	300
// 8,000 - 11,999	400
// 12,000 - 14,999	500
// 15,000 - 19,999	600
// 20,000 - 24,999	750
// 25,000 - 29,999	850
// 30,000 - 34,999	900
// 35,000 - 39,999	950
// 40,000 - 44,999	1,000
// 45,000 - 49,999	1,100
// 50,000 - 59,999	1,200
// 60,000 - 69,999	1,300
// 70,000 - 79,999	1,400
// 80,000 - 89,999	1,500
// 90,000 - 99,999	1,600
// 100,000 and above	1,700
// 

// Write a program that takes input of someone's basic salary and benefits, 
// adds them to find the gross salary then uses  the gross salary to find the NHIF. 
// To find the Kenya NHIF Rate using

// NHIF AND GROSS SALARY

let basic_salary = Number(prompt("Enter Your Basic Salary"))
let benefits = Number(prompt("Enter Your Benefits"))
let gross_salary
let nhif
let nssf
let nhdf
let taxable_income
let payee
let net_salary

function calculate_gross(s, b) {


    let gross_salary = s + b

    return gross_salary


}

gross_salary = calculate_gross(basic_salary, benefits)
console.log(gross_salary)

function calculate_nhif(g) {
    let nhif
    if (g = 5999) {
        nhif = 150
    }
    else if (g => 6000 && g <= 7999) {
        nhif = 300


    }
    else if (g => 8000 & g <= 11999) {
        nhif = 400
    }
    else if (g => 12000 && g <= 14999) {
        nhif = 500
    }
    else if (g => 15000 && g <= 19999) {
        nhif = 600
    }
    else if (g => 20000 && g <= 24999) {
        nhif = 750
    }
    else if (g => 25000 && g <= 29999) {
        nhif = 850
    }
    else if (g => 30000 && g <= 34999) {
        nhif = 900
    }
    else if (g => 35000 && g <= 39999) {
        nhif = 950
    }
    else if (g => 40000 && g <= 44999) {
        nhif = 1000

    }
    else if (g => 45000 && g <= 49999) {
        nhif = 1100
    }
    else if (g => 50000 && g <= 59999) {
        nhif = 1200
    }
    else if (g => 60000 && g <= 69999) {
        nhif = 1300
    }
    else if (g => 70000 && g <= 79999) {
        nhif = 1400
    }
    else if (g => 800000 && g <= 89999) {
        nhif = 1500
    }
    else if (g => 90000 && g <= 99999) {
        nhif = 1600
    }
    else {
        nhif = 1700

    }
    return nhif



}
nhif = calculate_nhif(gross_salary)
console.log(nhif)



// // Continue with the program above, then use  the gross salary to find the NSSF.
// // To find the Kenya NSSF Rate  using 6% of the Gross Salary. BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF.


// // NSSF


function calculate_nssf(g) {
    let nssf
    nssf = 6 / 100 * g
    return nssf

}
nssf = calculate_nssf(gross_salary)
console.log(nssf)


// Continue with the same program and calculate an individual’s NHDF using:
//  i.e NHDF = gross_salary *  0.015

function calculate_nhdf(g) {
    let nhdf
    nhdf = g * 0.0015
    return nhdf

}
nhdf = calculate_nhdf(gross_salary)
console.log(nhdf)


// Calculate the taxable income.
// i.e taxable_income = gross salary - (NSSF + NHDF + NHIF) 

// Taxable Income

function  calculate_taxable_income(g, ns, nh, nhi){
    let tax
    tax = g-(ns + ns + nh + nhi)

    return tax
}
taxable_income= calculate_taxable_income(gross_salary, nssf, nhdf, nhif)
console.log(taxable_income)


// Continue with the same program and find the person's PAYEE using the taxable income above.


// PAYEE


function calculate_payee(taxable_income){
    let payee 

    let person_relief = 2400
    
    if (taxable_income=>0 && taxable_income<=24000){
        payee= 2400
    }
    else if(taxable_income=>24000 && taxable_income<=32333){
        payee= 2400+((taxable_income-24000)*0.25)
    }
    else if (taxable_income>=32333 && taxable_income<=500000){
        payee= 2400+((8333*0.25)+((taxable_income-32333)*0.3))
    }
    else if(taxable_income =>500000 && taxable_income<=800000){
        payee= 2400+(8333*0.25)+(467677*0.3)+((taxable_income-500000)*0.325)
    }
    else {
        payee=  2400+ (8333*0.25)+(467677*0.3)+(300000*0.325)+((taxable_income-800000)*0.35)
    }
 return payee - person_relief

    
}
payee = calculate_payee(taxable_income)
console.log(payee)

// Continue with the same program and calculate an individual’s Net Salary using:
//  net_salary = gross_salary - (nhif + nhdf +  nssf + payee)


// NET SALARY
function calculate_net_Salary(g, nhi, nhd, ns, p){
    let net
    net = g - (nhi+ nhd+ ns + p)
    return net

}
net_salary=calculate_net_Salary(gross_salary, nhif, nhdf, nssf, payee)
console.log(net_salary)









