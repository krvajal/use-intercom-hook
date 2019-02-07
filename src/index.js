import React from "react";

function useIntercom(appID, userData = {}) {
  const [loaded, setLoaded] = React.useState(false);
  const { email, user_id } = userData;

  React.useEffect(() => {
    if (!window.Intercom) {
      // this snipet comes from
      // intercom
      (function(w, d, id, s, x) {
        function i() {
          i.c(arguments);
        }
        i.q = [];
        i.c = function(args) {
          i.q.push(args);
        };
        w.Intercom = i;
        s = d.createElement("script");
        s.async = 1;
        s.src = "https://widget.intercom.io/widget/" + id;
        d.head.appendChild(s);
      })(window, document, appID);
    }

    return () => {
      if (window.Intercom) {
        window.Intercom("shutdown");
        setLoaded(false);
        window.Intercom = null;
      }
    };
  }, [appID, email, user_id]);

  React.useEffect(() => {
    if (window.Intercom) {
      if (loaded) {
        window.Intercom("update", { app_id: appID, ...userData });
      } else {
        window.Intercom("boot", { app_id: appID, ...userData });
        setLoaded(true);
      }
    }
  }, [appID, userData]);
}

export default useIntercom;
