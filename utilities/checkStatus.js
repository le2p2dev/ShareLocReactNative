const checkStatus = response => {
    if (response.ok) {
        return response;
    } else {
        return response.text()
            .then(message => {
                throw new Error(message);
            });
    }
};

export default checkStatus;
