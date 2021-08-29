function setMsg(title, msg, type, id){
    if(type == 'error'){
        $('#messages').append(`
        <div class="ui message error transition hidden" itemprop="`+id+`" style="margin: 2%; position: absolute; right: 0px;">
            <i class="close icon"></i>
            <div class="header">
             `+ title + `
            </div>
            <p>
                `+ msg + `
            </p>
        </div>
        `)
        $(`.message[itemprop=`+id+`]`).transition('fade')
        setTimeout(() => {
            $(`.message[itemprop=`+id+`]`).transition('fade')
            $(`.message[itemprop=`+id+`]`).remove()
        }, 1500)
    } else {
        $('#messages').append(`
        <div class="ui message positive transition hidden" itemprop="`+id+`" style="margin: 2%; position: absolute; right: 0px;">
            <i class="close icon"></i>
            <div class="header">
             `+ title + `
            </div>
            <p>
                `+ msg + `
            </p>
        </div>
        `)
        $(`.message[itemprop=`+id+`]`).transition('fade')
        setTimeout(() => {
            $(`.message[itemprop=`+id+`]`).transition('fade')
            $(`.message[itemprop=`+id+`]`).remove()
        }, 1500)
    }
}