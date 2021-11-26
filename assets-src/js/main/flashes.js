const flashes = (function () {
    const getCookie = function (cname) {
        const name = cname + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            const c = ca[i].trim();
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }

        return false;
    };

    const cookie = getCookie("flashes");

    if (!cookie) {
        return;
    }

    const flashes = JSON.parse(decodeURIComponent(cookie));

    let html = '';
    for (let type in flashes) {
        if (type.startsWith('title-') || type === 'length' || !flashes.hasOwnProperty(type)) {
            continue;
        }

        html += '<div class="l-box note note--' + type + '" role="' + (type === 'error' ? 'alert' : 'status')
            + '" aria-labelledby="' + type + '-summary-title" tabindex="-1" data-component = "' + type + '-summary" >';
        html += '<h2 id="' + type + '-summary-title" class="txt-saturn">' + flashes['title-' + type] + '</h2>';
        html += '<ul class="clean-list" role="list">';
        for (var i in flashes[type]) {
            html += '<li>' + flashes[type][i] + '</li>';
        }
        html += '</ul>';
        html += '</div>';
    }

    document.querySelector("#main").insertAdjacentHTML('afterbegin', html);

    // remove the cookie to not show flashes again
    // the cookie path is controlled by the fos_http_cache.flash_message.path configuration option
    document.cookie = "flashes=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
});

export {flashes};
