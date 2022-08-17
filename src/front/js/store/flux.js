const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      email: "",
      username: "",
      password: "",
      token: "",
      autentificacion: false,
    },
    actions: {
      // Use getActions to call a function within a fuction
      getUsername: (name) => {
        setStore({ username: name });
      },

      getPassword: (pass) => {
        setStore({ password: pass });
      },

      getEmail: (mail) => {
        setStore({ email: mail });
      },
      storereload: () => {
        let token = sessionStorage.getItem("token");
        if (token !== "") {
          setStore({ token: token });
          setStore({ autentificacion: true });
          sessionStorage.setItem("token", "");
        }
      },
      register: () => {
        const store = getStore();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: store.username,
            password: store.password,
            email: store.email,
          }),
        };
        fetch(
          "https://3001-hanksito-autentificatio-sitc2sfap24.ws-eu61.gitpod.io/api/register",
          opts
        ).then((resp) => {
          if (resp.status == 200) {
            setStore({ username: "" });
            setStore({ password: "" });
            setStore({ email: "" });
            alert("Se ha registrado correctamente");
          } else alert("no se ha podido registrar con exito");
        });
      },
      logout: () => {
        setStore({ token: "" });
        setStore({ autentificacion: false });
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
            if (resp.status == 200) {
              let aux = resp.json();
              return aux;
            } else {
              alert("username o contraseña incorrectos");
            }
          })
          .then((data) => {
            sessionStorage.setItem("token", data.access_token);
            setStore({ token: data.access_token });
            setStore({ username: "" });
            setStore({ password: "" });
            setStore({ autentificacion: true });
            alert("se ha logueado correctamente");
          });
      },
    },
  };
};

export default getState;
