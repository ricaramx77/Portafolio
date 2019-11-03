$(document).ready(function () {

    $("#LoginCaptcha_ReloadLink").attr("title", "Cambiar el código CAPTCHA");
    $("#LoginCaptcha_SoundIcon").attr("title", "Audio del código CAPTCHA");

    $.validator.setDefaults({
        // only validate fields when the form is submitted:
        // the Captcha input must only be validated when the whole code string is
        // typed in, not after each individual character (onkeyup must be false);
        // onfocusout validation could be left on in more complex forms, but
        // doesn't fit this example
        onkeyup: false,
        onfocusout: false
        // always reload the Captcha image if remote validation failed,
        // since it will not be usable any more (a failed validation attempt
        // removes the attempted code for necessary Captcha security
        //showErrors: function (errorMap, errorList) {
        //    for (var i = 0; i < errorList.length; i++) {
        //        var element = errorList[i].element;
        //        var message = errorList[i].message;
        //        // check element css class and does the error message match remote
        //        // validation failure
        //        if (element.className.match(/captchaVal/) &&
        //            message === this.settings.messages[element.id].remote) {
        //            element.Captcha.ReloadImage();
        //            $("form").valid();
        //        }
        //    }
        //}
    });

    //Limpiar captcha
    $("#CaptchaCode").val("");

    $(function () {
        $("form input").tooltipValidation({
            placement: "bottom"
        });
    });
    $("#CaptchaCode").keydown(function (event) {
        // get client-side Captcha object instance
        var captchaObj = jQuery("#CaptchaCode").get(0).Captcha;
        // gather data required for Captcha validation
        var params = {}
        params.CaptchaId = captchaObj.Id;
        params.InstanceId = captchaObj.InstanceId;
        params.UserInput = jQuery("#CaptchaCode").val();
        jQuery("#CaptchaInstanceId").val(captchaObj.InstanceId);
    });
});