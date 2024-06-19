var n=Object.defineProperty;var a=(t,o,r)=>o in t?n(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r;var e=(t,o,r)=>(a(t,typeof o!="symbol"?o+"":o,r),r);class c{constructor(o){e(this,"theme");e(this,"styles");(o==="6fe4d16f-bdfa-4dc3-b066-1b4d8df175b8"||o==="d016495a-f9db-4097-9fda-ff2f454bc8cf"||o==="e40d4516-93ea-4d2e-b147-b2f53188beaa")&&(this.theme={input:{color:"#e4e4e7",borderRadius:"7px"},inputbackground:{color:"#313044"},labels:{color:"#FFFFFF",fontSize:"14px"},headings:{color:"#fcfcfc",fontSize:"16px"},loader:{color:"#28c239"},error:{color:"#CC0026"},success:{color:"#28c239"},buttons:{color:"#28c239"},cashierbackground:{color:"#232332"},border:{radius:"5px"},margin:{size:"16px"},providerlogos:{list:"50px"},creditcardicons:{creditcardUrl:"logos/creditcard-cc_logo_extended_left_100315000.png",cvvUrl:"logos/creditcard-cc_cvv_extended_left_100315000.png",expirydateUrl:"logos/creditcard-cc_exp_extended_left_100315000.png"}},this.styles=`
            :root {
                --border-color: transparent !important;
                --border-focus-color: #353542 !important;
                --hosted-fields-border-focus-color: #353542 !important;
                --hosted-fields-border-color: #353542 !important; 
            }
            
            .input{
            border-color: #353542 !important;
            }

            #cashier .submit-button:disabled {
            text-transform: uppercase !important;
            background: #5a5a65 !important;
            }

            #cashier .submit-button {
            text-transform: uppercase !important;
            background: #28c239 !important;
            }

            #cashier .set-amount .predefinedvalues button {
            border-radius: 15px;
            border-style: solid !important;
            border-color: #393946 !important;
            border-block-style: solid !important;
            border-block-color: #393946 !important;
            border-width: thin !important;
            background: #232332 !important;
            color: #e4e4e7 !important;
            text-transform: uppercase;
            }
            
            #cashier .set-amount .predefinedvalues button:hover {
            background: #313044 !important;
            border-color: #464655 !important;
            color: #e4e4e7 !important;
            }
            
            #cashier .set-amount .predefinedvalues button.active {
            background: #313044 !important;
            border-color: #28c239 !important;
            color: #e4e4e7 !important;
            }
            
            <!-- list radio border color -->
            .list-has-radio.app_default .payment-method.active .payment-method-header:before {
            border-color: white !important;
            }
            
            <!-- Input field text/Amount. Not card input -->
            .input-wrapper .input-label-float {
            color: #e4e4e7 !important;
            }
            
            .inputbackground .active {
            background: #313044 !important;
            color: #e4e4e7 !important;
            }
            
            .dropdown-container {
            background-color: #2e2e3d !important;
            }
            
            .dropdown.open .dropdown-content {
            background: #232333 !important;
            }

            .dropdown-content .dropdown-item:hover {
            background: #2e2e3d !important;
            opacity: 0.3;
            }
            
            button.vue-dialog-button {
            background-color: #e4e4e7 !important;
            }
            
            button.vue-dialog-button:hover {
            opacity: 0.3 !important;
            }
            
            <!-- Redirect button -->
            .provider-window-container .manual-redirect-container button {
                background: #232333 !important;
            }
            
            <!-- logo background -->
            .logo-container .logo-icon {
                border-radius: 0%;
                width: auto;
            }`)}getTheme(){return this.theme}getCustomStyles(){return this.styles}}export{c as P};
