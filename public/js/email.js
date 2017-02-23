$(function () {
    const REGULAR = 0;
    const INTERN = 1;

    $('.add-flag-btn.regular').click(function() {
        postSetFlagReq(REGULAR);
    });

    $('.add-flag-btn.intern').click(function() {
        postSetFlagReq(INTERN);
    });

    function postSetFlagReq(type){
        var textMails = (type === REGULAR 
                            ? $('.J-regular-email.item-container').text()
                            : $('.J-intern-email.item-container').text()
                        );
        $.ajax({
            type: 'post',
            url: '/addSentFlag',
            data: {'emails' : textMails.replace(/\s+/g,"").split(";")},
            success: function (data) {
                console.log(data);
                if(data.updateFailed.length != 0){
                    alert(data.updateFailed.length + " mail update failed");
                }else{
                    alert("all update success");
                    location.reload();
                }                
            },
            error: function (e) {
                alert("ajax request failed");
                console.log(e)
            }
        });
    }    
})


