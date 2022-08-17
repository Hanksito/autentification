const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
      password: "",
      token: "",
    },
    actions: {
      // Use getActions to call a function within a fuction
      getUsername: (name) => {
        setStore({ username: name });
      },

      getPassword: (pass) => {
        setStore({ password: pass });
      },

      getLogin: () => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: getStore.username,
            password: getStore.password,
          }),
        };
        fetch(
          "https://3001-hanksito-autentificatio-i5r18ezl44q.ws-eu61.gitpod.io/api/token",
          opts
        )
          .then((resp) => {
            let aux = resp.json();

            return aux;
          })
          .then((data) => {
            sessionStorage.getItem("token", data.access_token);
            setStore({ token: data.access_token });
          });
      },
    },
  };
};

export default getState;
