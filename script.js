 // Sample data for the invoice
    const invoiceData = {
        name: 'John Doe',
        address: '123 Main St, Cityville, State',
        invoiceDate: '2024-01-25',
        status: 'Paid',
        totalAmount: 500.00
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
            </div>`,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: true,
        footer:
            `<div style="text-align: right;">
                <button class="btn btn-secondary" onclick="printInvoice()">Print</button>
                <a class="btn btn-primary" href="#" onclick="downloadInvoice()">Download</a>
                <span class="total-amount"><strong>Total: $${invoiceData.totalAmount.toFixed(2)}</strong></span>
            </div>`
    });

    // Function to handle the print button click
    function printInvoice() {
        // Add your code to handle printing the invoice
        console.log('Print button clicked');
    }

    // Function to handle the download button click
    function downloadInvoice() {
        // Add your code to handle downloading the invoice
        console.log('Download button clicked');
    }