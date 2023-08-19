! function(t) {
    "use strict";
    jQuery(document).ready(function(t) {
        t(".bitem").hover(function() {
            t(this).addClass("hover")
        }, function() {
            t(this).removeClass("hover")
        })
    }), t(".contact-form #phone").keypress(function(t) {
        if (8 != t.which && 0 != t.which && (t.which < 48 || t.which > 57)) return alert("Please enter digit only"), !1
    }), t(".contact-form-2 .phone").keypress(function(t) {
        if (8 != t.which && 0 != t.which && (t.which < 48 || t.which > 57)) return alert("Please enter digit only"), !1
    }), t(".contact-form").on("submit", function(e) {
        e.preventDefault();
        var a = document.getElementById("frmContact-home"),
            o = new FormData(a);
        t.ajax({
            url: "contact-home-new",
            type: "POST",
            data: o,
            contentType: !1,
            processData: !1,
            success: function(e) {
                "success" == e ? window.location.replace("https://www.bikham.com/thank-you") : (alert("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"), t(".contact-form .submit").removeAttr("disabled"), t(".contact-form").trigger("reset"))
            }
        })
    }), t(".contact-form1").on("submit", function(e) {
        e.preventDefault();
        var a = document.getElementById("frmContacthealth"),
            o = new FormData(a);
        t.ajax({
            url: "contact-health-new",
            type: "POST",
            data: o,
            contentType: !1,
            processData: !1,
            success: function(e) {
                "success" == e ? window.location.replace("https://www.bikham.com/thank-you") : (alert("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"), t(".contact-form .submit").removeAttr("disabled"), t(".contact-form").trigger("reset"))
            }
        })
    }), t(".contact-form2").on("submit", function(e) {
        e.preventDefault();
        var a = document.getElementById("frmContactaccount"),
            o = new FormData(a);
        t.ajax({
            url: "contact-cpa-new",
            type: "POST",
            data: o,
            contentType: !1,
            processData: !1,
            success: function(e) {
                "success" == e ? window.location.replace("https://www.bikham.com/thank-you") : (alert("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"), t(".contact-form .submit").removeAttr("disabled"), t(".contact-form").trigger("reset"))
            }
        })
    }), t(".submit-frm").on("submit", function(e) {
        e.preventDefault();
        var a = document.getElementById("submit-frm"),
            o = new FormData(a);
        t.ajax({
            url: "upload_cv.php",
            type: "POST",
            data: o,
            contentType: !1,
            processData: !1,
            success: function(e) {
                "success" == e ? window.location.replace("https://www.bikham.com/thank-you") : (alert("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"), t(".submit-frm .submit").removeAttr("disabled"), t(".submit-frm").trigger("reset"))
            }
        })
    }), t(".contact-form7").on("submit", function(e) {
        e.preventDefault();
        var a = document.getElementById("frmContactindividual"),
            o = new FormData(a);
        t.ajax({
            url: "contact-individual-new",
            type: "POST",
            data: o,
            contentType: !1,
            processData: !1,
            success: function(e) {
                "success" == e ? window.location.replace("https://www.bikham.com/thank-you") : (alert("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"), t(".contact-form .submit").removeAttr("disabled"), t(".contact-form").trigger("reset"))
            }
        })
    }), t(".contact-form8").on("submit", function(e) {
        e.preventDefault();
        var a = document.getElementById("frmContactfinancialad"),
            o = new FormData(a);
        t.ajax({
            url: "contact-financial-new",
            type: "POST",
            data: o,
            contentType: !1,
            processData: !1,
            success: function(e) {
                "success" == e ? window.location.replace("https://www.bikham.com/thank-you") : (alert("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"), t(".contact-form .submit").removeAttr("disabled"), t(".contact-form").trigger("reset"))
            }
        })
    }), t(".contact-form3").on("submit", function(e) {
        e.preventDefault();
        var a = document.getElementById("frmContacteducation"),
            o = new FormData(a);
        t.ajax({
            url: "contact-education-new",
            type: "POST",
            data: o,
            contentType: !1,
            processData: !1,
            success: function(e) {
                "success" == e ? window.location.replace("https://www.bikham.com/thank-you") : (alert("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"), t(".contact-form .submit").removeAttr("disabled"), t(".contact-form").trigger("reset"))
            }
        })
    }), t(".contact-form4").on("submit", function(e) {
        e.preventDefault();
        var a = document.getElementById("frmContacttechnology"),
            o = new FormData(a);
        t.ajax({
            url: "contact-technology-new",
            type: "POST",
            data: o,
            contentType: !1,
            processData: !1,
            success: function(e) {
                "success" == e ? window.location.replace("https://www.bikham.com/thank-you") : (alert("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"), t(".contact-form .submit").removeAttr("disabled"), t(".contact-form").trigger("reset"))
            }
        })
    }), t(".contact-formpage").on("submit", function(e) {
        e.preventDefault();
        var a = document.getElementById("frmContactpage"),
            o = new FormData(a);
        t.ajax({
            url: "contact-form-new",
            type: "POST",
            data: o,
            contentType: !1,
            processData: !1,
            success: function(e) {
                "success" == e ? window.location.replace("https://www.bikham.com/thank-you") : (alert("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"), t(".contact-form .submit").removeAttr("disabled"), t(".contact-form").trigger("reset"))
            }
        })
    }), t(".contact-form6").on("submit", function(e) {
        e.preventDefault();
        var a = document.getElementById("frmContactedupop"),
            o = new FormData(a);
        t.ajax({
            url: "contact-education-new",
            type: "POST",
            data: o,
            contentType: !1,
            processData: !1,
            success: function(e) {
                "success" == e ? window.location.replace("https://www.bikham.com/thank-you") : (alert("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"), t(".contact-form .submit").removeAttr("disabled"), t(".contact-form").trigger("reset"))
            }
        })
    }), t(".contact-form7").on("submit", function(e) {
        e.preventDefault();
        var a = document.getElementById("frmContact7"),
            o = new FormData(a);
        t.ajax({
            url: "contact-technology-new",
            type: "POST",
            data: o,
            contentType: !1,
            processData: !1,
            success: function(e) {
                "success" == e ? window.location.replace("https://www.bikham.com/thank-you") : (alert("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"), t(".contact-form .submit").removeAttr("disabled"), t(".contact-form").trigger("reset"))
            }
        })
    })
}(jQuery)