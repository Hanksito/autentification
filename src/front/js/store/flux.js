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
        const store = getStore();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: store.username,
            password: store.password,
          }),
        };
        fetch(
          "https://3001-hanksito-autentificatio-sitc2sfap24.ws-eu61.gitpod.io/api/token",
          opts
        )
          .then((resp) => {
            let aux = resp.json();

            return aux;
          })
          .then((data) => {
            console.log(data);
            setStore({ token: data.access_token });
          });
      },
    },
  };
};

export default getState;
