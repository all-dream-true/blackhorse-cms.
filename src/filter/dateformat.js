import moment from "moment";

export default function(value, pattern) {
    return moment(value).format(pattern);
}