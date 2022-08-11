const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      
    },
    actions: {
      // Use getActions to call a function within a fuction

      getLogin: (user, pass) => {
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
        fetch(
          "https://3001-hanksito-autentificatio-lsemqdrbw7c.ws-eu59.gitpod.io/api/token",
          opts
        )
          .then((res) => {
            if (res.ok) return res.json();
            else alert("algo no fue bien");
          })
          .then((data) =>)
          .catch((error) => console.error("algo no va bien", error));
      },
    },
  };
};

export default getState;
