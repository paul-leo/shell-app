// import { startApp } from 'wujie';
import React, { useEffect, useRef } from 'react';
export default function SubApp(props = {}) {
    const ref = useRef();
    useEffect(() => {
        // const { startApp } = require('wujie');
        import('wujie').then((res) => {
            const { startApp } = res;
            startApp({ el: ref.current, ...props });
        });
    }, [props]);
    return (
        <div ref={ref}>
            {/* <WujieReact
                width="100%"
                height="100%"
                sync="{true}"
                // fetch="{fetch}"
                // props="{props}"
                // beforeLoad="{beforeLoad}"
                // beforeMount="{beforeMount}"
                // afterMount="{afterMount}"
                // beforeUnmount="{beforeUnmount}"
                // afterUnmount="{afterUnmount}"
                {...(props ?? {})}
            ></WujieReact> */}
        </div>
    );
}
