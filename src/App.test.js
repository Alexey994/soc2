import SamuraiJSApp from "./App";

/*it('renders withot crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<SamuraiJSApp/> , div);
ReactDOM.unmountComponentAtNode(div);
})*/

import {createRoot} from "react-dom/client";

it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<SamuraiJSApp/>);
    root.unmount();
});