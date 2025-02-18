"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slash = (path) => {
    const isExtendedLengthPath = /^\\\\\?\\/.test(path);
    const hasNonAscii = /[^\u0000-\u0080]+/.test(path); // eslint-disable-line no-control-regex
    if (isExtendedLengthPath || hasNonAscii) {
        return path;
    }
    return path.replace(/\\/g, '/');
};
exports.default = slash;
//# sourceMappingURL=slash.js.map