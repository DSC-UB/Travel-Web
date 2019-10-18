/**
 * Base script used in all controllers.
 * getToken helps authenticate a request
 * @param headers
 * @return boolean
 * */

getToken = function (headers) {
    if (headers && headers.authorization) {
        let parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};
