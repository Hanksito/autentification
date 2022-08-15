const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
    },
    actions: {
      // Use getActions to call a function within a fuction
      reloadtoken: () => {
        const token = sessionStorage.getItem("token");
        setStore({ token: token });
      },
      getLogin: async (user, pass) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: user,
            password: pass,
          }),
        };
        try {
          const resp = await fetch(
            "https://3001-hanksito-autentificatio-lsemqdrbw7c.ws-eu59.gitpod.io/api/token",
            opts
          );
          if (resp.status !== 200) {
            alert("Algo salio mal");
            return false;
          }
          const data = await resp.json();
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("Algo salio mal");
        }
      },
    },
  };
};

export default getState;
