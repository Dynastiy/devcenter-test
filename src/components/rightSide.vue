<template>
  <div>
    <div>
      <div class="left--side main--content py-4">
        <div>
            <div class="d-flex justify-content-between mb-1">
                <span class="text--primary" style="font-size: 11px ; font-weight: 500;">
                    N2,000,320,000
                </span>
                <span class="text--primary" style="font-size: 11px ; font-weight: 500;">N5,000,000,000</span>
            </div> 
          <div class="progress" style="height:0.4rem; background-color: var(--main-color);">
            <div
              class="progress-bar rounded-lg"
              role="progressbar"
              style="width: 30%; background-color:var(--secondary-color)"
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="d-flex justify-content-between mt-1">
                <span class="text--accent" style="font-size: 11px ; font-weight: 500;">
                    Raised
                </span>
                <span class="text--accent" style="font-size: 11px ; font-weight: 500;">Target</span>
            </div> 
        </div>

        <hr>

        <div>
            <p class="" style="font-size:11px">
                Bless this Fundraiser by making a transfer to the 
                bank account below or use the <b>“Bless”</b> button.
            </p>
        </div>

        <div class="p-3 rounded-lg mt-3" style="background:var(--secondary-color)">
            <div class="text-center">
                <h6 class="small text-uppercase text-white mb-1">sterling bank</h6>
                <div class="d-flex align-items-center justify-content-center" style="gap:3px">
                    <h4 class="text-white">0046748389</h4>
                    <span><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="8" y="8" width="12" height="12" rx="2"></rect>
                    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                    </svg></span>
                </div>
                <h6 class="small text-capitalize text-white mt-1">Gbolahan Fawale</h6>
            </div>
        </div>

        <div class="d-flex my-3 align-items-center" style="gap:10px">
            <div class="divider"></div>
            <span class="small" style="color: var(--accent-color)">Or</span>
            <div class="divider"></div>
        </div>

        <div>
            <p class="" style="font-size:11px">
                You can also bless this fundraiser from anywhere in the world by using Paypal or Card.
            </p>
            <div class="card--payments mt-1">
                <img src="@/assets/img/paypal.png" alt="">
            </div>
            <div class="card--payments mt-3">
               <div>
                <img src="@/assets/img/mastercard.png" alt="">
                <img src="@/assets/img/visa.png" alt="">
                <img src="@/assets/img/verve.png" alt="">
                <img src="@/assets/img/union.png" alt="">
               </div>
            </div>
            <div class="mt-3">
                <button class="share--btn">Share this Fundraiser</button>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>