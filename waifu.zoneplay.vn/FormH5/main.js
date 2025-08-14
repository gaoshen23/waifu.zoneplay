
// AUTHEN OTP START 
function startCountdown($btn, duration = 180) {
    let remaining = duration;

    if (!$btn.data('original')) {
        $btn.data('original', $btn.html());
    }

    const originalText = $btn.data('original');
    const $countEl = $btn.find('.countdown-text');

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    }

    // Clear timer cũ nếu có
    if ($btn.data('countdownInterval')) {
        clearInterval($btn.data('countdownInterval'));
    }

    $('.zalo-button, .voice-button').prop('disabled', true).css('opacity', '0.6');

    const intervalId = setInterval(() => {
        $countEl.text(formatTime(remaining--));

        if (remaining < 0) {
            clearInterval(intervalId);
            $btn.html(originalText);
            $('.zalo-button, .voice-button').prop('disabled', false).css('opacity', '1');
        }
    }, 1000);

    $btn.data('countdownInterval', intervalId);
}

function stopCountdown() {
    $('.zalo-button, .voice-button').each(function() {
        const $btn = $(this);
        const intervalId = $btn.data('countdownInterval');
        const originalText = $btn.data('original');

        if (intervalId) {
            clearInterval(intervalId);
            $btn.removeData('countdownInterval');
        }

        $btn.html(originalText).prop('disabled', false).css({
            opacity: '1',
            pointerEvents: 'auto',
            cursor: 'pointer'
        });
    });
}



$('.zalo-button').on('click', function () {
    const $btn = $(this);
    sendOTP(1, $btn);
});

$('.voice-button').on('click', function () {
    const $btn = $(this);
    sendOTP(3, $btn);
});
// AUTHEN OTP END 

// GENERAL JS START 
$('.btn-link-register').on('click', function () {
    $('#loginForm').removeClass('show').addClass('hide');
    $('#registerForm').removeClass('hide').addClass('show');
});

$('.btn-link-forgot').on('click', function () {
    $('#loginForm').removeClass('show').addClass('hide');
    $('#forgotForm').removeClass('hide').addClass('show');
});

$('.btn-back').on('click', function () {
    $('#registerForm').removeClass('show').addClass('hide');
    $('#loginForm').removeClass('hide').addClass('show');
});

$('.btn-back-forgot').on('click', function () {
    $('#updatePassForm').removeClass('show').addClass('hide');
    $('#forgotForm').removeClass('show').addClass('hide');
    $('#authenForm').removeClass('show').addClass('hide');
    $('#loginForm').removeClass('hide').addClass('show');
});

document.getElementById("username").addEventListener("input", function () {
    let phoneInput = this.value.trim();
    let phoneError = document.getElementById("phone-error");

    let phoneRegex = /^(0[1-9][0-9]{8,9})$/;

    if (phoneInput === "" || phoneRegex.test(phoneInput)) {
        phoneError.style.display = "none";
        this.classList.remove("error");
    } else {
        phoneError.style.display = "block";
        this.classList.add("error");
    }
});

document.getElementById("re-username").addEventListener("input", function () {
    let phoneInput = this.value.trim();
    let phoneError = document.getElementById("re-phone-error");

    let phoneRegex = /^(0[1-9][0-9]{8,9})$/;

    if (phoneInput === "" || phoneRegex.test(phoneInput)) {
        phoneError.style.display = "none";
        this.classList.remove("error");
    } else {
        phoneError.style.display = "block";
        this.classList.add("error");
    }
});
// GENERAL JS END 
