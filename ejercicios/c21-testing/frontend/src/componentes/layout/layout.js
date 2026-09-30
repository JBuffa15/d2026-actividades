import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from './header';
import { Footer } from './footer';
export function Layout({ children }) {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("main", { children: children }), _jsx(Footer, {})] }));
}
//# sourceMappingURL=layout.js.map