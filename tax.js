// All the Global Variabless and the input fields


document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault()

    let basic_salary = Number(document.getElementById('basic').value)
    let benefits = Number(document.getElementById('benefits').value)
    let gross_salary
    let nhif
    let nssf
    let nhdf
    let taxable_income
    let Payee
    let net_salary


    // A program Computing gross Salary

    function calculate_gross(basic, benefits) {

        return basic + benefits


    }

    gross_salary = calculate_gross(basic_salary, benefits)
    document.getElementById('gross').innerHTML = gross_salary


    // This is a program that calculates NHIF

    function calculate_nhif(gross) {
        let nhif
        if (gross = 5999) {
            nhif = 150
        }
        else if (gross => 6000 && g <= 7999) {
            nhif = 300


        }
        else if (gross => 8000 & gross <= 11999) {
            nhif = 400
        }
        else if (gross => 12000 && gross <= 14999) {
            nhif = 500
        }
        else if (gross => 15000 && gross <= 19999) {
            nhif = 600
        }
        else if (gross => 20000 && gross <= 24999) {
            nhif = 750
        }
        else if (gross => 25000 && gross <= 29999) {
            nhif = 850
        }
        else if (gross => 30000 && gross <= 34999) {
            nhif = 900
        }
        else if (gross => 35000 && gross <= 39999) {
            nhif = 950
        }
        else if (gross => 40000 && gross <= 44999) {
            nhif = 1000

        }
        else if (gross => 45000 && gross <= 49999) {
            nhif = 1100
        }
        else if (gross => 50000 && gross <= 59999) {
            nhif = 1200
        }
        else if (gross => 60000 && gross <= 69999) {
            nhif = 1300
        }
        else if (gross => 70000 && gross <= 79999) {
            nhif = 1400
        }
        else if (gross => 800000 && gross <= 89999) {
            nhif = 1500
        }
        else if (gross => 90000 && gross <= 99999) {
            nhif = 1600
        }
        else {
            nhif = 1700
        }
        return nhif
    }

    nhif = calculate_nhif(gross_salary)
    document.getElementById('nhif').innerHTML = nhif






    // This is a program calculating nssf


    function calculate_nssf(gross) {
        return 6 / 100 * gross
    }

    nssf = calculate_nssf(gross_salary)
    document.getElementById('nssf').innerHTML = nssf


    // A function computing NHDF

    function calculate_nhdf(gross) {
        return gross * 0.015

    }
    nhdf = calculate_nhdf(gross_salary)
    document.getElementById('nhdf').innerHTML = nhdf



    // A function calculating Taxable income


    function calculate_taxable_income(gross, nssf, nhdf, nhif) {

        return gross - (nssf + nhdf + nhif)
    }
    taxable_income = calculate_taxable_income(gross_salary, nssf, nhdf, nhif)
    document.getElementById('tax').innerHTML = taxable_income





    // A program that calculates PAYEE


    function calculate_payee(taxable_income) {
        let payee

        let person_relief = 2400

        if (taxable_income > 0 && taxable_income <= 24000) {
            payee = 2400
        }
        else if (taxable_income > 24000 && taxable_income <= 32333) {
            payee = 2400 + ((taxable_income - 24000) * 0.25)
        }
        else if (taxable_income > 32333 && taxable_income <= 500000) {
            payee = 2400 + (8333 * 0.25) + ((taxable_income - 32333) * 0.3)
        }
        else if (taxable_income > 500000 && taxable_income <= 800000) {
            payee = 2400 + (8333 * 0.25) + (467677 * 0.3) + ((taxable_income - 500000) * 0.325)
        }
        else {
            payee = 2400 + (8333 * 0.25) + (467677 * 0.3) + (300000 * 0.325) + ((taxable_income - 800000) * 0.35)
        }

        return payee - person_relief


    }
    Payee = calculate_payee(taxable_income)
    document.getElementById('payee').innerHTML = Payee



    // This is a function that computes NET SALARY

    function calculate_net_Salary(gross, nhif, nhdf, nssf, payee) {

        return gross - (nhif + nhdf + nssf + payee)

    }
    net_salary = calculate_net_Salary(gross_salary, nhif, nhdf, nssf, Payee)
    document.getElementById('net').innerHTML = net_salary











})





