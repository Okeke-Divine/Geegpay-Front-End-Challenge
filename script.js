function generateInvoice(name,invoiceDate,status, item, quantity, unitPrice, totalAmount){
 // Sample data for the invoice
    const invoiceData = {
        name: name,
        address: '123 Main St, Cityville, State',
        invoiceDate: invoiceDate,
        status: status,
        totalAmount: totalAmount
    };

    // Generate a custom SweetAlert modal for the invoice
    Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
    }).fire({
        title: '<strong>Invoice</strong>',
        html:
            `<div>
                <p><strong>Name:</strong> ${invoiceData.name}</p>
                <p><strong>Address:</strong> ${invoiceData.address}</p>
                <p><strong>Invoice Date:</strong> ${invoiceData.invoiceDate}</p>
                <p><strong>Status:</strong> ${invoiceData.status}</p>
            </div>
            <hr>
             <table>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td>${item}</td>
                                <td>${quantity}</td>
                                <td>${unitPrice}</td>
                                <td>${totalAmount}</td>
                            </tr>
                        </table>

            `,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: true,
        footer:
            `<div style="display:flex;justify-content: space-between;">
              <div>
                <button class="btn btn-secondary" onclick="printInvoice()">Print</button>
                <a class="btn btn-primary" href="javascript:void(0)" onclick="downloadInvoice()">Download</a>
              </div>
              <div class="justify_center">
                <span class="total-amount"><strong>Total: ${invoiceData.totalAmount}</strong></span>
              </div>
            </div>`
    });

}

    // Function to handle the print button click
    function printInvoice() {
        Swal.fire({
        title: "Print Successful",
        text: "Your invoice has been successfully sent to the printer for processing. Please check your printer for the printed copy.",
        icon: "success"
      });
    }

    // Function to handle the download button click
    function downloadInvoice() {
         Swal.fire({
          title: "Download Successful",
          text: "Your invoice download has started. The file is being prepared and will be available shortly. Please check your downloads folder.",
          icon: "success"
        });
    }