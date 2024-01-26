function generateInvoice(
  name,
  invoiceDate,
  status,
  item,
  quantity,
  unitPrice,
  totalAmount
) {
  const invoiceData_forDownload = [
    "'" + name + "'",
    "'" + invoiceDate + "'",
    "'" + status + "'",
    "'" + item + "'",
    "'" + quantity + "'",
    "'" + unitPrice + "'",
    "'" + totalAmount + "'",
  ];
  // Sample data for the invoice
  const invoiceData = {
    name: name,
    address: "123 Main St, Cityville, State",
    invoiceDate: invoiceDate,
    status: status,
    totalAmount: totalAmount,
  };

  // Generate a custom SweetAlert modal for the invoice
  Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  }).fire({
    title: "<strong>Invoice</strong>",
    html: `<div>
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
    footer: `<div style="display:flex;justify-content: space-between;">
              <div>
                <button class="btn btn-secondary cur_pointer hideOnPrint_dfgdf" onclick="printInvoice(${invoiceData_forDownload})">Print</button>
                <a class="btn btn-primary hideOnPrint_dfgdf" href="javascript:void(0)" onclick="downloadInvoice(${invoiceData_forDownload})">Download</a>
              </div>
              <div class="justify_center">
                <span class="total-amount"><strong>Total: ${invoiceData.totalAmount}</strong></span>
              </div>
            </div>`,
  });
}

function main_print(
  name,
  invoiceDate,
  status,
  item,
  quantity,
  unitPrice,
  totalAmount
) {
  var header_str =
    "<html><head><title>" +
    "Invoice for " +
    name +
    " on " +
    invoiceDate +
    "</title></head><body><style>.swal2-close,.hideOnPrint_dfgdf{display:none!important;}.total-amount{margin-top:20px;}</style>";
  var footer_str = "</body></html>";
  var new_str = document.querySelector(
    ".swal2-container .swal2-popup"
  ).innerHTML;
  var old_str = document.body.innerHTML;
  document.body.innerHTML = header_str + new_str + footer_str;
  window.print();
  location.reload();
  // document.body.innerHTML = old_str;
  return false;
}

// Function to handle the print button click
function printInvoice() {
  main_print();
  //   const targetDiv = document.querySelector(".swal2-container .swal2-popup");
  print;
  Swal.fire({
    title: "Print Successful",
    text: "Your invoice has been successfully sent to the printer for processing. Please check your printer for the printed copy.",
    icon: "success",
  });
}

// Function to handle the download button click
function downloadInvoice(
  name,
  invoiceDate,
  status,
  item,
  quantity,
  unitPrice,
  totalAmount
) {
  const a = document.createElement("a");
  const file = new Blob(
    [
      "Name: " + name,
      "\nAddress: 23 Main St, Cityville, State \n" +
        "Invoice Date: " +
        invoiceDate +
        "\nStatus: " +
        status +
        "\n\nITEMS:\n===\n1. " +
        item +
        "   " +
        quantity +
        "   " +
        unitPrice +
        "   " +
        totalAmount +
        "\n",
    ],
    { type: "text/plain" }
  );
  a.setAttribute("href", URL.createObjectURL(file));
  a.setAttribute(
    "download",
    "Invoice for " + name + " on " + invoiceDate + " .txt"
  );
  a.click();
  URL.revokeObjectURL(a.getAttribute("href"));

  Swal.fire({
    title: "Download Successful",
    text: "Your invoice download has started. The file is being prepared and will be available shortly. Please check your downloads folder.",
    icon: "success",
  });
}

function sidebar_visibility_toggle() {
  const sidebar = document.querySelector(".sidebar");
  const toggle_button = document.querySelector(".sidebar_visibility_toggle");
  const sidebar_visibily_toggle_default = toggle_button.getAttribute(
    "sidebar_visibily_toggle_default"
  );
  if (sidebar_visibily_toggle_default === "false") {
    toggle_button.setAttribute("sidebar_visibily_toggle_default", "true");
    sidebar.style.left = "0px";
    toggle_button.style.left = "90px";
  } else {
    toggle_button.setAttribute("sidebar_visibily_toggle_default", "false");
    sidebar.style.left = "-80px";
    toggle_button.style.left = "10px";
  }
}

function showDate(date) {
  Swal.fire({
    title: "Info",
    text: "Today's date is " + date,
    icon: "info",
  });
}

function showNotifications() {
  Swal.fire({
    title: "Notifications",
    text: "Nothing is here",
    icon: "info",
  });
}

function logout() {
  Swal.fire({
    title: "Confirm",
    text: "Are you sure you want to logout?",
    icon: "warning",
    showCloseButton: true,
    showCancelButton: true,
    showConfirmButton: true,
    allowOutsideClick: true,
  });
}

function dark_mode() {
  document.documentElement.classList.add("dark-mode");
  document.getElementById("light_mode_btn").classList.remove("lmode_active");
  document.getElementById("dark_mode_btn").classList.add("lmode_active");
}

function light_mode() {
  document.documentElement.classList.remove("dark-mode");
  document.getElementById("dark_mode_btn").classList.remove("lmode_active");
  document.getElementById("light_mode_btn").classList.add("lmode_active");
}