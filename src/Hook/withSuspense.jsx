import React, { Suspense } from "react";
import Preloader from "../components/common/Pleloader/Preloader/Preloaer";

export let withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader/>}><Component {...props}/></Suspense>
    }
}

