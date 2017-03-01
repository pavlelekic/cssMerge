// @flow weak

export default function cssMerge() {
    var combinedStyles = {};

    for (var i=0; i < arguments.length; ++i) {
        if (arguments[i]) {
            Object.assign(combinedStyles, arguments[i]);
        }
    }

    return combinedStyles;
}
