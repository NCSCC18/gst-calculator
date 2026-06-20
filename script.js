function calculateGST(){

    let amount = parseFloat(document.getElementById("amount").value);
    let gst = parseFloat(document.getElementById("gst").value);

    if(isNaN(amount) || amount<=0){

        document.getElementById("result").innerHTML="Please enter a valid amount.";
        return;

    }

    let gstAmount = amount * gst / 100;
    let total = amount + gstAmount;

    document.getElementById("result").innerHTML =

    `
    Original Amount: ₹${amount.toFixed(2)}<br>
    GST (${gst}%): ₹${gstAmount.toFixed(2)}<br>
    Total Amount: ₹${total.toFixed(2)}
    `;

}