const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      email: "",
      username: "",
      password: "",
      token: "",
      autentificacion: false,
      url: "https://3001-hanksito-autentificatio-mk8gvzyiyhh.ws-eu62.gitpod.io/",
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
        setStore({ token: token });
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
        fetch(store.url + "api/register", opts).then((resp) => {
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
        sessionStorage.removeItem("token");
      },
      getLogin: () => {
        const store = getStore();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: store.email,
            password: store.password,
          }),
        };
        fetch(store.url + "api/token", opts)
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

            alert("se ha logueado correctamente");
          });
      },
      getAutentification: async () => {
        const store = getStore();
        try {
          const resp = await fetch(store.url + "api/privado", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + store.token,
            },
          });
          const data = await resp.json();
          let bolean = data.msg;
          setStore({ autentificacion: bolean });
          return data;
        } catch (error) {
          console.error({ msg: "no tienes permiso" }), 400;
        }
      },
    },
  };
};

export default getState;
