class StatusCheck {
    callServerStatus(mode) {
        $.get("https://status.fearnixx.de/api/v1/components?sort=status=" + mode, function (data) {
            return data;
        })
    }

    callServerStatus(mode) {
        return undefined;
    }
}

export {StatusCheck};