/*******************************************************************************
*
*                               FUNCTIONS
*
*******************************************************************************/



// If users change from landscape to portrait and
// then portrait to landscape.
// Reset all the effect again.
function reset() {

    // CTA Txt.
    let ctaTxtWrapper = document.getElementById('ctaTxtWrapper');

    // CTA Button.
    let ctaBtnWrapper = document.getElementById('ctaBtnWrapper');


    // Remove the fadeOut class from CTA Txt.
    if (ctaTxtWrapper.classList.contains('fadeOut')) {
        ctaTxtWrapper.classList.remove('fadeOut');
    }

    // Remove the fadeOut class from the CTA Button.
    if (ctaBtnWrapper.classList.contains('fadeOut')) {
        ctaBtnWrapper.classList.remove('fadeOut');
    }

}























/*******************************************************************************
*
* Using JS to create typewriter animation effect.
* Work for any array string input.
*
*******************************************************************************/
let i = 0;
let textArray = ["Want a cool logo, video, website or app?", "Let's build something wonderful! ❤️."];

function typeWriter(id, inputArray, elementIndex) {
    let idInput = document.getElementById(id);
    let firstline = idInput.querySelector('.firstline');
    let txt = inputArray[elementIndex];


    // If full string hasn't yet been typed out, continue typing.
    if (i < txt.length) {
        firstline.innerText += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 100, id, inputArray, elementIndex);
    }
}

/*******************************************************************************
*
* It depends on the cookie,
* CTA text will show or
* the text in number 6 shows.
*
******************************************************************************/
function showCtaTxt() {
    let emailForm = document.getElementById('emailForm');

    // Number 6
    // After the user hits send, the page redirect to Formspree reCAPTCHA page.
    // When users are not a robot, redirect back to the original page.
    // Here the text entry field animates out (animate to a point) and
    // the following text appears: Let's build something wonderful! ❤️.
    if (getCookie('sent') >= 1) {
        setTimeout(typeWriter, 0, 'txtIn6', textArray, 1);
    } else {
        // Number 2
        // Animated call to action (CTA) text: Want a cool logo, video, website, or app?
        // Text animation begins 0.5s after page loads. Animation style: typewriter.
        // Run the loop after 0.5s delay.
        setTimeout(typeWriter, 500, 'ctaTxtWrapper', textArray, 0);
    }
}

/*******************************************************************************
*
* cookies handling
*
******************************************************************************/
function setCookies(cname, value) { document.cookie = cname + "=" + value; }
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*******************************************************************************
*
* Button animates to view 0.25s after CTA text animation is complete.
*
******************************************************************************/
function btnAppear() {
    // Number 3
    // Animated CTA button below CTA text.
    // Button animates to view 0.25s after CTA text animation is complete
    // Run the addCtaBtn function after 0.25s delay.
    let ctaBtn = document.getElementById('ctaBtn');
    console.log('Added ctaBtn');
    ctaBtn.classList.add('ctaBtn');
}

function btnChangeColorandTxt() {
    // Number 7
    // About 1s after the text in 6 appears,
    // the link with text ‘re-send form’, appears below the text.

    let ctaBtn = document.getElementById('ctaBtn');
    ctaBtn.innerText = 'Re-send form';
    ctaBtn.classList.add('btnChangeColorandTxt');
}

function showBtn() {
    if (getCookie('sent') >= 1) {
        setTimeout(btnChangeColorandTxt, 4600);
    } else {
        setTimeout(btnAppear, 4250);
    }
}

function hideBtn() {
    let ctaBtn = document.getElementById('ctaBtn');
    console.log('Remove ctaBtn');
    ctaBtn.classList.remove('ctaBtn');
}


/*******************************************************************************
* This is used for the onclick ctaBtn event.
* When users click on the CTA button.
* The CTA text fades out (Text in 6 also fade outs if users hit the Re-send form).
* The CTA button is also faded out.
*
* Then the form will be displayed.
******************************************************************************/
function showForm() {
    let ctaTxtWrapper   = document.getElementById('ctaTxtWrapper');
    let txtIn6          = document.getElementById('txtIn6');
    let ctaBtnWrapper   = document.getElementById('ctaBtnWrapper');
    let emailForm       = document.getElementById('emailForm');



    // Initially, form are not shown, so show it for the first time When
    // users on click CTA button.
    ctaBtnWrapper.addEventListener('click', function() {

        // Add fade out class to CTA text and button.
        ctaTxtWrapper.classList.add('fadeOut');
        ctaBtnWrapper.classList.add('fadeOut');

        // If users submitted the form,
        // then text in number 6 will be removed instead of CTA text.
        txtIn6.classList.add('fadeOut');

        // Show form in desktop styling and remove the form class for mobile.
        emailForm.classList.remove('emailFormMobile');
        emailForm.classList.add('emailForm');

    }, false);
}

function showFormMobile() {
    let emailForm   = document.getElementById('emailForm');
    let sendBtn     = document.getElementById('sendBtn');

    emailForm.classList.remove('emailForm');
    emailForm.classList.add('emailFormMobile');
}


















/*******************************************************************************
* After the user types their email,
* the send button appears below the text entry field, to the right.
******************************************************************************/
function userTypeEmail() {
    let txtEntryFieldWrapper = document.getElementById('txtEntryFieldWrapper');
    let txtEntryField = document.getElementById('txtEntryField');
    let sendBtn = document.getElementById('sendBtn');


    txtEntryField.addEventListener('keyup', function() {
        if (txtEntryField.value !== "") {

            // Apply new styling for text entry field when users enter something.
            txtEntryFieldWrapper.classList.add('txtEntryFieldWrapper');
            txtEntryField.classList.add('txtEntryField');

            // Add send button when users type nothing.
            sendBtn.classList.add('sendBtn');

        } else {
            txtEntryFieldWrapper.classList.remove('txtEntryFieldWrapper');
            txtEntryField.classList.remove('txtEntryField');

            // Remove send button when users start typing.
            sendBtn.classList.remove('sendBtn');

        }
    }, false);
}








/*******************************************************************************
*
*                          JavaScript FUNCTION CALLS
*
*******************************************************************************/

// Submit form handling.
let emailForm = document.getElementById('emailForm');
emailForm.addEventListener('submit', function() {
    if (typeof(localStorage.sent) == "undefined") {
        localStorage.sent = 1;

        let value = localStorage.sent;
        setCookies('sent', value);
    } else {
        localStorage.sent++

        let value = localStorage.sent;
        setCookies('sent', value);
    }
}, false);


/*------------------------------------------------------------------------------
Animation calls
------------------------------------------------------------------------------*/

// Number 2 or number 6
showCtaTxt();



/*
Handle for changing between big and mobile screen.
------------------------------------------------------------------------------*/


// -----------------------------------------------------------------------------
// Initially
// -----------------------------------------------------------------------------


// Number 3 or number 7
let windowInnerWidth = window.innerWidth;
if (windowInnerWidth > 480) {
    showBtn();
    showForm();
    userTypeEmail();

    console.log('Init Desktop ' + windowInnerWidth);
} else {
    hideBtn();
    showFormMobile();
    console.log('Init Mobile ' + windowInnerWidth);
}



// -----------------------------------------------------------------------------
// Functions will work on window resize.
// -----------------------------------------------------------------------------

let resetTimeOut = false;
window.addEventListener('resize', function() {
    // Clear the time out.
    clearTimeout(resetTimeOut);

    // Start timing for event "completion".
    resetTimeOut = setTimeout(function() {
        // window.resize callback functions.
        // Debouncing.
        // Functions will only be called once the resizing is “complete.”
        windowInnerWidth = window.innerWidth;
        if (windowInnerWidth > 480) {
            console.log("Reset!");
            reset();

            console.log('Resize Desktop '  + windowInnerWidth);
            showBtn();

            console.log('Show form desktop!');
            showForm();

            userTypeEmail();

        } else {
            console.log('Resize Mobile ' + windowInnerWidth);
            hideBtn();

            console.log('Show form mobile!');
            showFormMobile();
        }
    }, 250);
});
