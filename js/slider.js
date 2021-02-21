var position = 1
var supportedFlag = $.keyframe.isSupported();

$(document).ready(()=>{
    $('#btnNext').on('click', ()=>{
        if(position ==  1){
            $('.first').css('margin-left', '-100%');
        }
        if(position == 2){
            $('.first').css('margin-left', '-200%');
        }
        if(position == 3){
            $('.first').css('margin-left', '-300%');
        }
        if(position == 4){
            $('.first').css('margin-left', '-400%');
        }
        if(position == 5){
            $('.first').css('margin-left', '-500%');
        }
        if(position == 6){
            $('.first').css('margin-left', '0');
            position = 1
        }

        if(position != 6){
            position += 1
        }

        console.log($('.first').css('margin-left'))
    })

    $('#btnLast').on('click', ()=>{
        if(position ==  1){
            $('.first').css('margin-left', '-500%');
            position = 6
        }
        if(position == 2){
            $('.first').css('margin-left', '0');
        }
        if(position == 3){
            $('.first').css('margin-left', '-100%');
        }
        if(position == 4){
            $('.first').css('margin-left', '-200%');
        }
        if(position == 5){
            $('.first').css('margin-left', '-300%');
        }

        if(position != 1) {
            position -= 1
        }
    })
})


setInterval(()=>{
    if(position ==  1){
        $('.first').css('margin-left', '-100%');
    }
    if(position == 2){
        $('.first').css('margin-left', '-200%');
    }
    if(position == 3){
        $('.first').css('margin-left', '-300%');
    }
    if(position == 4){
        $('.first').css('margin-left', '-400%');
    }
    if(position == 5){
        $('.first').css('margin-left', '-500%');
    }
    if(position == 6){
        $('.first').css('margin-left', '0');
        position = 1
    }

    if(position != 6){
        position += 1
    }
}, 2000)

