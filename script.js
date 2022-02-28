const counters = document.querySelectorAll(".counter");
const container = document.querySelectorAll(".value-container");
const resetBtn = document.querySelector("#reset");
const bill_container = document.querySelector("#Bill");
const people_container = document.querySelector("#People");
const speed = 50;

var value = document.getElementById("total");

var value2 = document.getElementById("per-person")

function tip_calc(ttl, ppl, perc) {
    var total_tip =  (+ttl * +perc) / 100;
    value.setAttribute('data-target', total_tip);

    var person_tip = total_tip / +ppl;
    value2.setAttribute('data-target', person_tip);
}

function calculate(n) {

    const total = document.getElementById("Bill").value;
    const people = document.getElementById("People").value;
    const percent = document.querySelector(".button-grid div:nth-child(" + n + ") button").getAttribute("data");
    const bill_error = document.getElementById("bill-error");
    const people_error = document.getElementById("people-error"); 

    if(total == 0) {
        bill_container.style.border = '1px solid red';
        bill_error.style.display = "block";
    } else {
        bill_container.style.border = 'none';
        bill_error.style.display = "none";
    }

    if(people == 0) {
        people_container.style.border = '1px solid red';
        people_error.style.display = "block";
    } else {
        people_container.style.border = 'none';
        people_error.style.display = "none";
    }

    if(total != 0 && people != 0) {

        resetBtn.disabled = false;

        const all_buttons = document.querySelectorAll(".button-grid div:not(:last-child)");
        var button = document.querySelector(".button-grid div:nth-child(" + n + ")");

        if(button.style.backgroundColor == "rgb(0, 73, 77)") { 

            all_buttons.forEach(other => {
                other.style.backgroundColor = "rgb(0, 73, 77)";
                other.style.color = "rgb(229 231 235)";
            });
            
            button.style.backgroundColor = "#9EE8DF";
            button.style.color = "rgb(0, 73, 77)";

        }
        
        else {

            all_buttons.forEach(other => {
                other.style.backgroundColor = "rgb(0, 73, 77)";
                other.style.color = "rgb(229 231 235)";
            });

            button.style.backgroundColor = "#9EE8DF";
            button.style.color = "rgb(0, 73, 77)";

            
        }

        counters.forEach(counter => {

            counter.innerText = 0;

            const updateCount = () => {
                
                tip_calc(total, people, percent);

                target = +counter.getAttribute('data-target');
                count = +counter.innerText;
                inc = target / speed;
            
                if (count < target) {
                    counter.innerText = Math.round((count + inc) * 100) / 100;
                    setTimeout (updateCount, 15);
                } 

            }
        
            updateCount();
            
        });

    }
}

function reset_form() { 

    const all_buttons = document.querySelectorAll(".button-grid div:not(:last-child)");

    all_buttons.forEach(other => {
        other.style.backgroundColor = "rgb(0, 73, 77)";
        other.style.color = "rgb(229 231 235)";
    });

    document.getElementById("reset").disabled = true;

    document.getElementById("tip-form").reset();
    
}
    